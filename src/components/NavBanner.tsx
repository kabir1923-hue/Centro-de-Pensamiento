import { FadeIn } from "./FadeIn";

export function NavBanner() {
  return (
    <section
      className="px-[3.2vw]"
      style={{
        background: "linear-gradient(var(--stone) 0 60%, var(--ink) 60% 100%)",
      }}
    >
      <FadeIn className="mx-auto flex max-w-[1560px] flex-wrap items-center justify-between gap-[clamp(12px,3vw,40px)] rounded-full bg-brand-yellow px-[clamp(30px,4vw,80px)] py-[clamp(16px,1.7vw,28px)] text-[clamp(13px,1.25vw,22px)] tracking-[0.8px] text-ink uppercase">
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
