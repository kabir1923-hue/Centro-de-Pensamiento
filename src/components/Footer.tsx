import { FadeIn } from "./FadeIn";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  XIcon,
  LinkedInIcon,
  SpotifyIcon,
} from "./Icons";

const FOOTER_LINKS = [
  { label: "Quienes somos", href: "#proposito" },
  { label: "Opinión y análisis", href: "#opinion" },
  { label: "Noticias y eventos", href: "#noticias" },
  { label: "Hablemos", href: "#hablemos" },
  { label: "Donaciones", href: "#hablemos" },
];

const FOOTER_SOCIAL = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Facebook", Icon: FacebookIcon, ring: true },
  { label: "YouTube", Icon: YouTubeIcon },
  { label: "X", Icon: XIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
  { label: "Spotify", Icon: SpotifyIcon },
];

export function Footer() {
  return (
    <footer className="bg-stone pt-[clamp(44px,4.6vw,84px)] pb-[clamp(24px,2.4vw,42px)] text-ink">
      <div className="mx-auto max-w-[1560px] px-[3.2vw]">
        <FadeIn
          from="left"
          className="grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-[clamp(30px,4vw,70px)] pb-[clamp(34px,3.6vw,60px)]"
        >
          {/* Logo Brand Column */}
          <div className="flex items-center gap-[clamp(16px,1.6vw,28px)]">
            <img
              src="/__l5e/assets-v1/12096966-ce8a-4439-8944-7bb0169fe93f/cpv-logo.webp"
              alt="Centro de Pensamiento Vida"
              className="w-[clamp(76px,7vw,124px)]"
            />
            <div className="leading-[1.02] uppercase">
              <div className="text-[clamp(22px,2.4vw,40px)] font-light tracking-[1px] text-brand-blue">
                Centro
              </div>
              <div className="text-[clamp(11px,1.05vw,17px)] font-light tracking-[1.4px] text-brand-blue">
                De pensamiento
              </div>
              <div className="text-[clamp(30px,3.3vw,55px)] font-light tracking-[2px] text-brand-red">
                Vida
              </div>
            </div>
          </div>

          {/* Nav Links Column */}
          <nav aria-label="Enlaces">
            <h2 className="mb-[clamp(18px,1.9vw,32px)] text-[clamp(15px,1.35vw,24px)] font-extrabold tracking-[0.4px] uppercase">
              Enlaces
            </h2>
            <ul className="flex flex-col gap-[clamp(12px,1.3vw,22px)] text-[clamp(13px,1.15vw,20px)] font-light tracking-[0.6px] uppercase">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-brand-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Conecta Column */}
          <div>
            <h2 className="mb-[clamp(18px,1.9vw,32px)] text-[clamp(15px,1.35vw,24px)] font-extrabold tracking-[0.4px] uppercase">
              Conecta
            </h2>
            <ul className="flex flex-wrap items-center gap-[clamp(12px,1.4vw,24px)]">
              {FOOTER_SOCIAL.map(({ label, Icon, ring }) => (
                <li key={label}>
                  <a
                    href="#hablemos"
                    aria-label={label}
                    className="block w-[clamp(26px,2.2vw,36px)] transition-opacity duration-200 hover:opacity-70"
                  >
                    <Icon ring={ring} className="block h-auto w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="h-px bg-stone-line" />

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-between gap-5 pt-[clamp(18px,1.8vw,32px)] text-[clamp(12px,1.05vw,18px)] font-light text-[oklch(0.317_0.005_91.6)]">
          <div>© 2024 Centro de Pensamiento Vida. Todos los derechos reservados</div>
          <div className="flex gap-[clamp(14px,1.4vw,26px)]">
            <a href="#home" className="hover:underline">
              Privacidad
            </a>
            <span>/</span>
            <a href="#home" className="hover:underline">
              Terminos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
