import { FadeIn } from "./FadeIn";

export function Proposito() {
  return (
    <section id="proposito" className="bg-grain pt-[2vw] pb-[9vw] text-center">
      <FadeIn className="mx-auto max-w-[1560px] px-[3.2vw]">
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
