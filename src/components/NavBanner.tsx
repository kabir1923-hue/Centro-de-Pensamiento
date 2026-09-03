import { FadeIn } from "./FadeIn";

export function NavBanner() {
  return (
    <section className="bg-grain relative overflow-hidden bg-ink px-[3.2vw] py-8">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#0d0e12] to-ink opacity-95 pointer-events-none" />

      <FadeIn className="relative z-10 mx-auto flex max-w-[1340px] flex-wrap items-center justify-around sm:justify-between gap-4 rounded-full bg-brand-yellow px-8 sm:px-16 py-3.5 sm:py-4 text-[12px] sm:text-[14px] font-black tracking-[1.4px] text-ink uppercase shadow-2xl">
        <a href="#opinion" className="transition-opacity hover:opacity-75">
          Opiniones y análisis
        </a>
        <a href="#noticias" className="transition-opacity hover:opacity-75">
          Noticias y eventos
        </a>
        <a href="#hablemos" className="transition-opacity hover:opacity-75">
          Hablemos
        </a>
      </FadeIn>
    </section>
  );
}
