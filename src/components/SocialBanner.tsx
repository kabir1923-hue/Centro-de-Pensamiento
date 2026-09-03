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
  { label: "Instagram", Icon: InstagramIcon, iconClass: "w-4 h-4 text-white" },
  { label: "Facebook", Icon: FacebookIcon, iconClass: "w-4 h-4 text-white", ring: false },
  { label: "YouTube", Icon: YouTubeIcon, iconClass: "w-4 h-4 text-white" },
  { label: "X", Icon: XIcon, iconClass: "w-3.5 h-3.5 text-white" },
  { label: "LinkedIn", Icon: LinkedInIcon, iconClass: "w-3.5 h-3.5 text-white" },
  { label: "Spotify", Icon: SpotifyIcon, iconClass: "w-4 h-4 text-white" },
];

export function SocialBanner() {
  return (
    <section className="bg-grain relative overflow-hidden bg-ink py-6 px-[3.2vw]">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#0d0e12] to-ink opacity-95 pointer-events-none" />

      <div className="relative z-10 flex justify-center">
        <FadeIn className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-full bg-brand-yellow px-8 sm:px-12 py-3 text-ink shadow-2xl">
          <span className="text-[12px] sm:text-[14px] font-black tracking-[1.4px] uppercase whitespace-nowrap mr-1 sm:mr-2">
            Síguenos en:
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            {SOCIAL_LINKS.map(({ label, Icon, ring, iconClass }) => (
              <a
                key={label}
                href="#hablemos"
                aria-label={label}
                className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 hover:scale-110 focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
              >
                <Icon ring={ring} className={iconClass} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
