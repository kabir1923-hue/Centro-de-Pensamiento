import type { ReactNode } from "react";

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
      />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className, ring = false }: { className?: string; ring?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {ring && <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.8" />}
      <path
        fill="currentColor"
        d="M13.6 22v-8.2h2.8l.42-3.2H13.6V8.53c0-.93.26-1.56 1.6-1.56h1.71V4.1A23 23 0 0 0 14.4 4c-2.47 0-4.16 1.5-4.16 4.27v2.33H7.4v3.2h2.84V22Z"
      />
    </svg>
  );
}

export function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M22.5 7.6a2.9 2.9 0 0 0-2-2.05C18.7 5.05 12 5.05 12 5.05s-6.7 0-8.5.5a2.9 2.9 0 0 0-2 2.05A30 30 0 0 0 1 12a30 30 0 0 0 .5 4.4 2.9 2.9 0 0 0 2 2.05c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.9 2.9 0 0 0 2-2.05A30 30 0 0 0 23 12a30 30 0 0 0-.5-4.4ZM9.9 15.3V8.7l5.6 3.3Z"
      />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.3 3h3.3l-7.2 8.2L21.8 21h-6.6l-4.3-5.6L5.9 21H2.6l7.7-8.8L2.5 3h6.8l3.9 5.2Zm-1.2 16h1.8L7.9 4.9H6Z"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M6.2 9.4H3.3V21h2.9ZM4.75 3.6a1.72 1.72 0 1 0 0 3.44 1.72 1.72 0 0 0 0-3.44ZM21 14.6c0-3.3-1.77-4.84-4.13-4.84a3.56 3.56 0 0 0-3.23 1.78h-.05V9.4H8.85V21h2.9v-5.74c0-1.51.29-2.98 2.17-2.98s1.9 1.73 1.9 3.08V21H21Z" />
    </svg>
  );
}

export function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.35 14.48a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34.35.22.46.68.25 1.03Zm1.42-3.1a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 0 1-.54-1.79c4.37-1.32 9.79-.68 13.5 1.6.44.27.58.85.3 1.28Zm.12-3.23C14.01 7.86 7.7 7.65 4 8.77a1.12 1.12 0 1 1-.65-2.15c4.25-1.29 11.22-1.04 15.64 1.58a1.12 1.12 0 1 1-1.14 1.94Z"
      />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M2 5.5h20v13H2Zm1.9 1.4L12 12.6l8.1-5.7Z" />
    </svg>
  );
}
