import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address"),
  subject: z.string().trim().min(2, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(3000),
  phone: z.string().trim().optional(),
});

// In-memory sliding window rate limiter: max 5 requests per 10 mins per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages sent. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const targetEmail = process.env.CONTACT_EMAIL || "shahzaibashraf99887@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error(
        "RESEND_API_KEY is missing! Add RESEND_API_KEY=re_... in .env.local and restart your dev server (Ctrl + C then npm run dev)."
      );
      return NextResponse.json(
        {
          error:
            "RESEND_API_KEY is not configured in .env.local. Please add your Resend API key and restart your Next.js dev server.",
        },
        { status: 500 }
      );
    }

    // ── Resend Email Dispatch (Serverless on Vercel) ─────────────────────
    const resend = new Resend(resendApiKey);

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Portfolio Inquiry</title>
        </head>
        <body style="margin: 0; padding: 24px; background-color: #080808; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #E5E5E5;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #100D0B; border: 1px solid #30251D; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">
            <!-- Header Banner -->
            <tr>
              <td style="padding: 28px 32px; background: linear-gradient(135deg, #1A130F 0%, #100D0B 100%); border-bottom: 1px solid #30251D;">
                <p style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #D6A76C; font-weight: 700;">Portfolio Inquiry</p>
                <h1 style="margin: 8px 0 0 0; font-size: 22px; color: #FFFFFF; font-weight: 800;">New Consultation Request</h1>
              </td>
            </tr>

            <!-- Client Info -->
            <tr>
              <td style="padding: 28px 32px 16px 32px;">
                <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px;">
                  <tr>
                    <td width="100" style="color: #888888; font-weight: 600;">From:</td>
                    <td style="color: #FFFFFF; font-weight: 700;">${validatedData.name}</td>
                  </tr>
                  <tr>
                    <td style="color: #888888; font-weight: 600;">Email:</td>
                    <td><a href="mailto:${validatedData.email}" style="color: #F0C995; text-decoration: none; font-weight: 600;">${validatedData.email}</a></td>
                  </tr>
                  ${
                    validatedData.phone
                      ? `<tr>
                          <td style="color: #888888; font-weight: 600;">Phone:</td>
                          <td style="color: #FFFFFF;">${validatedData.phone}</td>
                        </tr>`
                      : ""
                  }
                  <tr>
                    <td style="color: #888888; font-weight: 600;">Subject:</td>
                    <td style="color: #FFFFFF; font-weight: 600;">${validatedData.subject}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message Box -->
            <tr>
              <td style="padding: 8px 32px 28px 32px;">
                <div style="background-color: #080808; border-left: 3px solid #D6A76C; border-radius: 8px; padding: 18px 20px; border: 1px solid #30251D; border-left-width: 3px;">
                  <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #D6A76C; font-weight: 700;">Message</p>
                  <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #E0E0E0; white-space: pre-wrap;">${validatedData.message}</p>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 20px 32px; background-color: #080808; border-top: 1px solid #30251D; text-align: center; font-size: 11px; color: #666666;">
                Delivered via Shahzaib Ashraf Portfolio Vercel Serverless Function.<br>
                Click "Reply" to email <strong style="color: #D6A76C;">${validatedData.name}</strong> (${validatedData.email}) directly.
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

      const { error: resendError } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [targetEmail],
        replyTo: validatedData.email,
        subject: `[Portfolio Inquiry] ${validatedData.subject} — from ${validatedData.name}`,
        html: htmlContent,
      });

      if (resendError) {
        console.error("Resend delivery error:", resendError);
        return NextResponse.json(
          { error: `Email service error: ${resendError.message}` },
          { status: 500 }
        );
      }

    // Optional: Downstream n8n webhook forwarding if configured
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...validatedData,
            timestamp: new Date().toISOString(),
            clientIp: ip,
          }),
        });
      } catch (webhookErr) {
        console.error("Failed downstream webhook forwarding:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received! Shahzaib will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    console.error("Error in contact route handler:", error);
    return NextResponse.json(
      { error: "Internal server error. Please reach out via WhatsApp directly." },
      { status: 500 }
    );
  }
}
