import { FadeIn } from "./FadeIn";

export function NavBanner() {
  return (
    <section className="bg-grain relative overflow-hidden bg-ink px-[3.2vw] py-[clamp(20px,2.5vw,40px)]">
      {/* Exact background solar panels image with matching multi-layer ink overlays and ambient gradient as in #opinion */}
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

      <FadeIn className="relative z-10 mx-auto flex max-w-[1560px] flex-wrap items-center justify-between gap-[clamp(12px,3vw,40px)] rounded-full bg-brand-yellow px-[clamp(30px,4vw,80px)] py-[clamp(16px,1.7vw,28px)] text-[clamp(13px,1.25vw,22px)] tracking-[0.8px] text-ink uppercase">
        <a href="#opinion" className="border-b-[1.5px] border-ink pb-2 font-extrabold">
          Opiniones y análisis
        </a>
        <a href="#noticias" className="font-light transition-opacity hover:opacity-75">
          Noticias y eventos
        </a>
        <a href="#hablemos" className="font-light transition-opacity hover:opacity-75">
          Hablemos
        </a>
      </FadeIn>
    </section>
  );
}
