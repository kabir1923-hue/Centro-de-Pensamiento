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
      className="bg-grain relative overflow-hidden bg-ink pt-[6vw] pb-[7vw] text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#0d0e12] to-ink opacity-95 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-[3.2vw]">
        {/* Colorful Butterfly Mark */}
        <FadeIn className="mx-auto mb-4 w-12 sm:w-14">
          <img
            src="/__l5e/assets-v1/12096966-ce8a-4439-8944-7bb0169fe93f/cpv-logo.webp"
            alt="Isotipo CPV"
            className="w-full h-auto object-contain"
          />
        </FadeIn>

        <FadeIn as="h2" delay={80} className="text-[clamp(22px,2.6vw,38px)] font-medium leading-[1.1] tracking-[2px] text-white uppercase">
          Procesos de
        </FadeIn>

        <FadeIn as="h2" delay={140} className="mb-5 text-[clamp(32px,4.2vw,66px)] font-black leading-[1.05] tracking-[0.5px] text-white uppercase">
          Transformación
        </FadeIn>

        <FadeIn as="p" delay={200} className="mx-auto mb-14 max-w-[700px] text-[clamp(14px,1.05vw,17px)] font-light leading-[1.8] text-stone-300 text-pretty">
          Articulamos investigación, formación y acción colectiva para generar cambios estructurales en la sociedad.
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {PROCESSES.map((item) => (
            <FadeIn
              as="article"
              key={item.title}
              from={item.from}
              delay={item.delay}
              className={`rounded-[20px] border ${item.border} bg-black/40 p-8 sm:p-9 flex flex-col justify-between shadow-xl backdrop-blur-xs`}
            >
              <div>
                <img
                  src={item.icon}
                  alt=""
                  loading="lazy"
                  className="mb-7 w-12 h-12 object-contain"
                />
                <h3
                  style={{ color: item.color }}
                  className="mb-3 text-[17px] sm:text-[20px] font-black tracking-[0.5px] uppercase"
                >
                  {item.title}
                </h3>
                <p className="mb-6 text-[13px] sm:text-[14px] font-light leading-[1.75] text-stone-300">
                  {item.text}
                </p>
              </div>
              <a
                href="#noticias"
                style={{ color: item.color }}
                className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase transition-opacity duration-200 hover:underline"
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
