import { useState } from "react";
import { FadeIn } from "./FadeIn";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  XIcon,
  LinkedInIcon,
  SpotifyIcon,
} from "./Icons";
import { X, ShieldCheck, FileText } from "lucide-react";

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
  const [modalContent, setModalContent] = useState<"privacidad" | "terminos" | null>(null);

  return (
    <>
      <footer className="bg-[#e4e6ea] pt-[clamp(44px,4.6vw,84px)] pb-[clamp(24px,2.4vw,42px)] text-ink">
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

            {/* Social Síguenos en Column */}
            <div>
              <h2 className="mb-5 text-[15px] sm:text-[18px] font-black tracking-[0.6px] uppercase text-ink">
                Síguenos en:
              </h2>
              <ul className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {FOOTER_SOCIAL.map(({ label, Icon, ring }) => (
                  <li key={label}>
                    <a
                      href="#hablemos"
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 hover:scale-110"
                    >
                      <Icon ring={ring} className="w-4 h-4 text-white" />
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
              <button
                type="button"
                onClick={() => setModalContent("privacidad")}
                className="hover:underline hover:text-ink cursor-pointer bg-transparent border-none p-0"
              >
                Privacidad
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => setModalContent("terminos")}
                className="hover:underline hover:text-ink cursor-pointer bg-transparent border-none p-0"
              >
                Terminos
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms & Privacy Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setModalContent(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 text-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-5 right-5 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            {modalContent === "terminos" ? (
              <div>
                <div className="flex items-center gap-3 text-brand-red mb-3">
                  <FileText className="h-6 w-6" />
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    Términos y Condiciones
                  </h3>
                </div>
                <div className="text-sm text-stone-600 leading-relaxed space-y-4">
                  <p>
                    Bienvenido al portal institucional del <strong>Centro de Pensamiento Vida</strong>. Al acceder y navegar en este sitio web, usted acepta cumplir con los siguientes términos y condiciones de uso:
                  </p>
                  <h4 className="font-bold text-ink uppercase text-xs tracking-wider">1. Objeto y Acceso</h4>
                  <p>
                    El Centro de Pensamiento Vida difunde investigaciones, análisis económicos, publicaciones digitales y convocatorias para la construcción de alternativas hacia la justicia social y el bienestar común.
                  </p>
                  <h4 className="font-bold text-ink uppercase text-xs tracking-wider">2. Propiedad Intelectual</h4>
                  <p>
                    Todos los textos, infografías, cartillas, libros y materiales audiovisuales publicados están protegidos por licencias abiertas para fines pedagógicos y de divulgación social, citando siempre la fuente correspondiente.
                  </p>
                  <h4 className="font-bold text-ink uppercase text-xs tracking-wider">3. Uso Responsable</h4>
                  <p>
                    El usuario se compromete a no emplear el sitio para actividades ilícitas o que atenten contra la integridad de las comunidades y organizaciones participantes.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 text-brand-blue mb-3">
                  <ShieldCheck className="h-6 w-6" />
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    Política de Privacidad
                  </h3>
                </div>
                <div className="text-sm text-stone-600 leading-relaxed space-y-4">
                  <p>
                    En el <strong>Centro de Pensamiento Vida</strong> garantizamos la protección y confidencialidad de los datos personales suministrados por quienes participan en nuestras redes, boletines y eventos.
                  </p>
                  <h4 className="font-bold text-ink uppercase text-xs tracking-wider">1. Recolección de Datos</h4>
                  <p>
                    Los datos recabados en nuestros formularios de contacto son utilizados exclusivamente para comunicaciones institucionales, boletines informativos y convocatorias de formación.
                  </p>
                  <h4 className="font-bold text-ink uppercase text-xs tracking-wider">2. Derechos del Titular</h4>
                  <p>
                    Cualquier suscriptor o contacto puede solicitar la actualización o eliminación de su información escribiendo a <em>contacto@centrodepensamientovida.org</em>.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="rounded-full bg-ink px-6 py-2 text-sm font-bold uppercase text-white hover:bg-brand-red transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
