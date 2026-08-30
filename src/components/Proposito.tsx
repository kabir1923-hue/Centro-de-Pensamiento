import { FadeIn } from "./FadeIn";

export function Proposito() {
  return (
    <section id="proposito" className="bg-grain relative overflow-hidden bg-ink pt-[6vw] pb-[10vw] text-center">
      {/* Background solar panels image with matching multi-layer ink overlays and ambient gradient */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <img
          src="/fondo-banner-01.webp"
          alt=""
          className="h-full w-full object-cover object-center scale-105 filter brightness-[0.55] contrast-[1.05]"
        />
        {/* Exact ambient radial glow and multi-layered ink overlays identical to #home */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(27,49,137,0.4),rgba(0,18,46,0.95))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/90" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-[1560px] px-[3.2vw]">
        <h2 className="text-[clamp(28px,3.2vw,52px)] font-light leading-[1.1] tracking-[1px] text-white uppercase">
          Un centro
        </h2>
        <h2 className="mb-[34px] text-[clamp(38px,4.6vw,74px)] font-black leading-[1.05] tracking-[0.5px] text-white uppercase">
          Con propósito
        </h2>
        <p className="mx-auto max-w-[830px] text-[clamp(15px,1.15vw,20px)] font-light leading-[1.75] text-soft text-pretty">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat.
        </p>
      </FadeIn>
    </section>
  );
}
