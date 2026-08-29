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
  { label: "Instagram", Icon: InstagramIcon, w: "clamp(34px,3.2vw,52px)" },
  { label: "Facebook", Icon: FacebookIcon, ring: true, w: "clamp(34px,3.2vw,52px)" },
  { label: "YouTube", Icon: YouTubeIcon, w: "clamp(34px,3.2vw,52px)" },
  { label: "X", Icon: XIcon, w: "clamp(31px,2.9vw,47px)" },
  { label: "LinkedIn", Icon: LinkedInIcon, w: "clamp(34px,3.2vw,52px)" },
  { label: "Spotify", Icon: SpotifyIcon, w: "clamp(34px,3.2vw,52px)" },
];

export function SocialBanner() {
  return (
    <section
      className="px-[3.2vw]"
      style={{
        background: "linear-gradient(var(--stone) 0 50%, var(--ink) 50% 100%)",
      }}
    >
      <FadeIn className="mx-auto flex max-w-[1050px] flex-col items-center gap-[clamp(12px,1.4vw,22px)] rounded-full bg-brand-yellow px-[4vw] py-[clamp(20px,2.4vw,38px)] text-ink">
        <div className="text-[clamp(13px,1.1vw,19px)] font-bold tracking-[1.6px] uppercase">
          Siguenos en:
        </div>
        <div className="flex flex-wrap items-center justify-center gap-[clamp(14px,2.2vw,38px)]">
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
