import { FadeIn } from "./FadeIn";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  XIcon,
  LinkedInIcon,
  SpotifyIcon,
} from "./Icons";

const SOCIAL_LINKS = [
  { label: "Instagram", Icon: InstagramIcon, w: "clamp(24px,2.1vw,36px)" },
  { label: "Facebook", Icon: FacebookIcon, ring: true, w: "clamp(24px,2.1vw,36px)" },
  { label: "YouTube", Icon: YouTubeIcon, w: "clamp(24px,2.1vw,36px)" },
  { label: "X", Icon: XIcon, w: "clamp(22px,1.9vw,32px)" },
  { label: "LinkedIn", Icon: LinkedInIcon, w: "clamp(24px,2.1vw,36px)" },
  { label: "Spotify", Icon: SpotifyIcon, w: "clamp(24px,2.1vw,36px)" },
];

export function SocialBanner() {
  return (
    <section
      className="px-[3.2vw]"
      style={{
        background: "linear-gradient(var(--stone) 0 50%, var(--ink) 50% 100%)",
      }}
    >
      <FadeIn className="mx-auto flex max-w-[1560px] flex-col sm:flex-row items-center justify-between gap-[clamp(10px,2vw,30px)] rounded-full bg-brand-yellow px-[clamp(30px,4vw,80px)] py-[clamp(16px,1.7vw,28px)] text-ink">
        <div className="text-[clamp(13px,1.25vw,22px)] font-bold tracking-[1.6px] uppercase whitespace-nowrap">
          Síguenos en:
        </div>
        <div className="flex flex-wrap items-center justify-center gap-[clamp(14px,2.2vw,34px)]">
          {SOCIAL_LINKS.map(({ label, Icon, ring, w }) => (
            <a
              key={label}
              href="#hablemos"
              aria-label={label}
              style={{ width: w }}
              className="block transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
            >
              <Icon ring={ring} className="block h-auto w-full" />
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
