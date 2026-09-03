import { FadeIn } from "./FadeIn";

export function Proposito() {
  return (
    <section id="proposito" className="bg-grain relative overflow-hidden bg-ink pt-[7vw] pb-[8vw] text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#0d0e12] to-ink opacity-95 pointer-events-none" />

      <FadeIn className="relative z-10 mx-auto max-w-[1560px] px-[3.2vw]">
        <h2 className="text-[clamp(24px,2.8vw,44px)] font-medium leading-[1.15] tracking-[2px] text-white uppercase">
          Un centro
        </h2>
        <h2 className="mb-[30px] text-[clamp(36px,4.5vw,70px)] font-black leading-[1.05] tracking-[0.5px] text-white uppercase">
          Con propósito
        </h2>
        <p className="mx-auto max-w-[830px] text-[clamp(14px,1.1vw,18px)] font-light leading-[1.8] text-stone-300 text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sagittis odio. Donec et auctor est, eget cursus turpis. Phasellus nec velit non erat gravida elementum. Aenean sodales gravida quam, a convallis metus. Sed varius porttitor lacus, sed varius massa feugiat sit amet. Ut semper cursus ex scelerisque ultricies. In vel gravida enim. Phasellus scelerisque egestas enim, et volutpat elit lacinia vitae. Suspendisse ut semper dolor. Donec interdum pharetra sollicitudin.
        </p>
      </FadeIn>
    </section>
  );
}
