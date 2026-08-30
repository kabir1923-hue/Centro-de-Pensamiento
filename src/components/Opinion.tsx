import { FadeIn } from "./FadeIn";
import type { ProcessItem } from "../types";

const PROCESSES: ProcessItem[] = [
  {
    icon: "/__l5e/assets-v1/3030ac57-7802-48e3-9bb6-37c02e33d664/icon-investigacion.webp",
    title: "Investigación",
    text: "Generamos conocimientos críticos y situado sobre las realidades sociales, políticas y económicas que afecta la vida digna.",
    color: "var(--brand-yellow)",
    border: "border-brand-yellow",
    from: "left",
    delay: 0,
  },
  {
    icon: "/__l5e/assets-v1/8895a711-b292-4b48-978e-354bb0d9901e/icon-formacion.webp",
    title: "Formación",
    text: "Construimos capacidades en comunidades, organizaciones y lideres para la incidencia política y la acción transformadora.",
    color: "var(--brand-blue)",
    border: "border-brand-blue",
    from: "up",
    delay: 110,
  },
  {
    icon: "/__l5e/assets-v1/ecabd28d-74ce-4f75-b714-2597940d2030/icon-incidencia.webp",
    title: "Incidencia",
    text: "Articulamos redes y alianzas estratégicas para influir en políticas públicas que garaanticen derechos y justicia social.",
    color: "var(--brand-red)",
    border: "border-brand-red",
    from: "right",
    delay: 220,
  },
];

export function Opinion() {
  return (
    <section
      id="opinion"
      className="bg-grain relative overflow-hidden bg-ink pt-[clamp(50px,6vw,110px)] pb-[clamp(60px,7vw,130px)] text-center"
    >
      {/* Background solar panels image with matching multi-layer ink overlays and ambient gradient */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <img
          src="/fondo-banner-01.webp"
          alt=""
          className="h-full w-full object-cover object-center scale-105 filter brightness-[0.55] contrast-[1.05]"
        />
        {/* Exact ambient radial glow and multi-layered ink overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(27,49,137,0.4),rgba(0,18,46,0.95))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/90" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1560px] px-[3.2vw]">
        <FadeIn className="mx-auto mb-[clamp(16px,1.8vw,30px)] w-[clamp(58px,5vw,92px)]">
          <img
            src="/__l5e/assets-v1/12096966-ce8a-4439-8944-7bb0169fe93f/cpv-logo.webp"
            alt=""
            className="w-full"
          />
        </FadeIn>

        <FadeIn as="h2" delay={80} className="text-[clamp(26px,3vw,50px)] font-light leading-[1.1] tracking-[1px] text-white uppercase">
          Procesos de
        </FadeIn>

        <FadeIn as="h2" delay={140} className="mb-[26px] text-[clamp(34px,4.4vw,72px)] font-black leading-[1.05] tracking-[0.5px] text-white uppercase">
          Transformación
        </FadeIn>

        <FadeIn as="p" delay={200} className="mx-auto mb-[clamp(44px,5vw,90px)] max-w-[760px] text-[clamp(14px,1.1vw,19px)] font-light leading-[1.9] text-soft text-pretty">
          Articulamos investigación, formación y acción colectiva para generar cambios estructurales en la sociedad.
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(228px,100%),1fr))] gap-[clamp(22px,3vw,54px)] text-left">
          {PROCESSES.map((item) => (
            <FadeIn
              as="article"
              key={item.title}
              from={item.from}
              delay={item.delay}
              className={`rounded-[22px] border ${item.border} p-[clamp(24px,2.6vw,46px)]`}
            >
              <img
                src={item.icon}
                alt=""
                loading="lazy"
                className="mb-[clamp(24px,2.4vw,42px)] w-[clamp(42px,3.4vw,58px)]"
              />
              <h3
                style={{ color: item.color }}
                className="mb-[18px] text-[clamp(15px,1.35vw,24px)] font-extrabold tracking-[0.6px] uppercase"
              >
                {item.title}
              </h3>
              <p className="mb-[26px] text-[clamp(13px,1.02vw,17px)] font-light leading-[1.75] text-soft-dim">
                {item.text}
              </p>
              <a
                href="#noticias"
                style={{ color: item.color }}
                className="text-[clamp(12px,0.95vw,16px)] font-bold transition-opacity duration-200 hover:opacity-70"
              >
                Explorar
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
