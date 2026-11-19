import React from "react";

export function ReactLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" {...props}>
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 180" fill="currentColor" {...props}>
      <mask height="180" id="nextMask" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
        <circle cx="90" cy="90" fill="#fff" r="90" />
      </mask>
      <g mask="url(#nextMask)">
        <circle cx="90" cy="90" fill="currentColor" r="90" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="#080808"
        />
        <rect fill="#080808" height="72" width="12" x="115" y="54" />
      </g>
    </svg>
  );
}

export function NodeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L5 8.3v7.4l7 4.2 7-4.2V8.3L12 4.3z" />
    </svg>
  );
}

export function PostgresLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3c-4.5 0-8 3.5-8 8 0 3 1.6 5.6 4 7 0-2 .8-3.5 2-4.5-1.5-.5-2.5-1.8-2.5-3.5 0-2 1.8-3.5 4.5-3.5s4.5 1.5 4.5 3.5c0 1.7-1 3-2.5 3.5 1.2 1 2 2.5 2 4.5 2.4-1.4 4-4 4-7 0-4.5-3.5-8-8-8z" />
      <path d="M9.5 13c-.8 2-1.5 4.5-1.5 6" />
      <path d="M14.5 13c.8 2 1.5 4.5 1.5 6" />
    </svg>
  );
}

export function MongoLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.5s-5.8 4.6-5.8 11.2c0 4.2 3.1 7.8 5.8 9.8 2.7-2 5.8-5.6 5.8-9.8C17.8 6.1 12 1.5 12 1.5zm-.5 18.5V4.2c2.5 2.8 4.3 6.3 4.3 8.5 0 3.2-2.1 6-4.3 7.3z" />
    </svg>
  );
}

export function TsLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="5" y="16.5" fontSize="11" fontWeight="bold" fontFamily="monospace" fill="currentColor">TS</text>
    </svg>
  );
}

export function DockerLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.9 11.2h2.2v2.2H13.9zm-3.3 0h2.2v2.2h-2.2zm-3.3 0h2.2v2.2H7.3zm3.3-3.3h2.2v2.2h-2.2zm3.3 0h2.2v2.2h-2.2zm-6.6 0h2.2v2.2H7.3zm6.6-3.3h2.2v2.2h-2.2zm7.7 7.7c-.5-.4-1.2-.5-1.8-.4-.3-1.6-1.5-2.9-3.1-3.2-.2 0-.4 0-.6.1V8.2c0-.4-.3-.8-.8-.8h-9c-.4 0-.8.4-.8.8v5.5c-2.3.4-4.1 2.3-4.1 4.7 0 2.7 2.2 4.9 4.9 4.9 5.8 0 10.4-3.7 12.3-7.5 1.1.1 2.2-.4 3-1.3.3-.4.3-.9 0-1.3z" />
    </svg>
  );
}

export function N8nLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="5" cy="12" r="3" />
      <circle cx="19" cy="8" r="3" />
      <circle cx="19" cy="16" r="3" />
      <path d="M7.8 11.2l8.4-2.4M7.8 12.8l8.4 2.4" stroke="currentColor" strokeWidth="1.8" fill="none" />
    </svg>
  );
}

export function RedisLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 7l10-4 10 4-10 4L2 7zm0 5l10 4 10-4v2.5l-10 4-10-4V12zm0 5l10 4 10-4v2.5l-10 4-10-4V17z" />
    </svg>
  );
}

export function AwsLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M4 16c4 3 12 3 16 0" />
      <path d="M18 15l2 1-1.5 1.5" />
    </svg>
  );
}

export function PythonLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.9 2c-3.1 0-5.1 1.4-5.1 3.5v2.6h5.2v.9H4.7c-2 0-3.7 1.3-3.7 3.5 0 2.2 1.4 3.5 3.5 3.5h1.9v-2.6c0-2.3 2-4.3 4.3-4.3h5.2V6.5c0-2-1.7-4.5-4-4.5zm-2.2 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM19.3 8h-1.9v2.6c0 2.3-2 4.3-4.3 4.3H7.9v2.6c0 2 1.7 4.5 4 4.5 3.1 0 5.1-1.4 5.1-3.5v-2.6h-5.2v-.9h7.3c2 0 3.7-1.3 3.7-3.5 0-2.2-1.4-3.5-3.5-3.5zm-5 12.4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
    </svg>
  );
}

export function TailwindLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
    </svg>
  );
}

export function GraphqlLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.27L5.07 8.27v7.46L12 19.73l6.93-4V8.27L12 4.27zM12 7a2 2 0 110 4 2 2 0 010-4zm-4.33 7.5a2 2 0 110 4 2 2 0 010-4zm8.66 0a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  );
}

export function PrismaLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.9 2.3c-.4-.5-1.1-.4-1.4.1L3.3 17.5c-.3.5 0 1.2.6 1.4l12.4 4.1c.6.2 1.2-.2 1.3-.8l4.1-17.7c.1-.6-.4-1.2-1-1.1L12.9 2.3zm-1 2.8l5.9 1.1-2.9 12.8-5.7-1.9 2.7-12z" />
    </svg>
  );
}

export function GitLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.7 10.7L13.3 2.3c-.4-.4-1.1-.4-1.5 0L10.3 3.8l2.4 2.4c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.3 2.3c.5-.2 1.1-.1 1.5.3.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.4-.4-.5-1-.3-1.5l-2.2-2.2v4.4c.2.1.4.3.5.5.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2.2-.2.4-.4.6-.5V8.1c-.2-.1-.4-.3-.6-.5-.5-.4-.5-1.1-.1-1.6L8.4 4.5 2.3 10.6c-.4.4-.4 1.1 0 1.5l8.4 8.4c.4.4 1.1.4 1.5 0l9.5-9.5c.4-.4.4-1.1 0-1.5z" />
    </svg>
  );
}

export function LinuxLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.1.4 2.1 1 2.9-.6.7-1 1.6-1 2.6v4c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4c0-1-.4-1.9-1-2.6.6-.8 1-1.8 1-2.9C16.5 4 14.5 2 12 2zm-1.5 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm3 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM5 18c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2 0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3z" />
    </svg>
  );
}

export function ExpressLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <text x="2" y="17" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="-0.5" fill="currentColor">ex</text>
    </svg>
  );
}

export function FirebaseLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.6 17.6L7.4 2.4c.1-.4.6-.5.8-.2l3.4 6.4-7 9z" />
      <path d="M13.6 7.8l2.2-4.2c.2-.4.8-.3.9.1l3 13.9-6.1-9.8z" />
      <path d="M3.7 18.6L11.5 23c.3.2.7.2 1 0l8.1-4.4-4-10.8-12.9 10.8z" />
    </svg>
  );
}
