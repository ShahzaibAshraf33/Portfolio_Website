"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Mail, MessageSquare, MapPin, Send, Loader2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to deliver message");
      }

      toast.success("Message sent successfully!", {
        description: "Your inquiry has been delivered directly to Shahzaib's inbox. Expect a response shortly.",
      });
      reset();
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Something went wrong";
      toast.error("Delivery Error", {
        description: errorMsg,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] text-[#D6A76C] uppercase mb-3">
            LET&apos;S COLLABORATE // GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Initiate an Engineering Consultation or <span className="text-[#F0C995]">Project</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-base text-[#B7A7A7] leading-relaxed font-sans">
                Currently open for full-time Associate Software Engineer roles, onsite positions in Lahore, flexible evening/night shifts, and custom full-stack or AI/n8n automation integrations.
              </p>

              <div className="space-y-4 pt-4">
                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#30251D] bg-[#100D0B]">
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#F0C995]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-sans text-[#888888] uppercase tracking-wider font-semibold">Location</p>
                    <p className="text-sm font-semibold text-white font-sans">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#30251D] bg-[#100D0B] hover:border-[#D6A76C]/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#F0C995]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 truncate">
                    <p className="text-xs font-sans text-[#888888] uppercase tracking-wider font-semibold">Direct Email</p>
                    <p className="text-sm font-semibold text-white font-sans truncate group-hover:text-[#F0C995] transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#F0C995]" />
                </a>

                {/* WhatsApp */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#30251D] bg-[#100D0B] hover:border-[#D6A76C]/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#F0C995]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-sans text-[#888888] uppercase tracking-wider font-semibold">Instant WhatsApp</p>
                    <p className="text-sm font-semibold text-white font-sans group-hover:text-[#F0C995] transition-colors">
                      {PERSONAL_INFO.whatsapp}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#F0C995]" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8 border-t border-[#30251D]/60 mt-8">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#100D0B] border border-[#30251D] text-xs font-sans font-medium text-[#B7A7A7] hover:text-white hover:border-[#D6A76C]/50 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#100D0B] border border-[#30251D] text-xs font-sans font-medium text-[#B7A7A7] hover:text-white hover:border-[#D6A76C]/50 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Integrity Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-[#30251D] bg-[#100D0B] p-5 sm:p-10 space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-sans uppercase text-[#888888] mb-1.5 font-medium tracking-wider">
                    Your Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Alex Vance"
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-[#30251D] text-base sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D6A76C] font-sans transition-colors min-h-[48px]"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 font-sans">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-sans uppercase text-[#888888] mb-1.5 font-medium tracking-wider">
                    Email Address *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="alex@enterprise.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-[#30251D] text-base sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D6A76C] font-sans transition-colors min-h-[48px]"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 font-sans">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-sans uppercase text-[#888888] mb-1.5 font-medium tracking-wider">
                  Subject *
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  placeholder="...."
                  className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-[#30251D] text-base sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D6A76C] font-sans transition-colors min-h-[48px]"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1 font-sans">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-sans uppercase text-[#888888] mb-1.5 font-medium tracking-wider">
                  Message Details *
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Describe your application requirements, timeline, or open engineering opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-[#30251D] text-base sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D6A76C] font-sans transition-colors resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1 font-sans">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#F0C995] hover:bg-white text-[#080808] font-sans font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(214,167,108,0.3)] hover:shadow-[0_0_28px_rgba(240,201,149,0.5)] flex items-center justify-center gap-2 disabled:opacity-50 min-h-[50px] active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Routing to n8n Pipeline...</span>
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4 text-[#080808]" />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] font-sans text-[#888888] pt-1">
                Protected by client-side Zod validation &amp; rate limiting. Delivered straight to n8n automation webhook.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
