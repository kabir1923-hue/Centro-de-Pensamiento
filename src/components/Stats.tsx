import { FadeIn } from "./FadeIn";
import type { StatItem } from "../types";

const STATS: StatItem[] = [
  { label: "Publicaciones", value: "+120", delay: 0 },
  { label: "Alianzas", value: "+35", delay: 90 },
  { label: "Territorios", value: "+18", delay: 180 },
  { label: "Personas formadas", value: "+2,500", delay: 270, last: true },
];

export function Stats() {
  return (
    <section className="bg-grain relative overflow-hidden bg-ink pt-[5vw] pb-[6vw]">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#0d0e12] to-ink opacity-95 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-[3.2vw]">
        <FadeIn
          from="left"
          className="mb-10 sm:mb-14 flex items-center gap-5 sm:gap-7"
        >
          <div className="font-numeric text-[clamp(44px,6vw,96px)] font-black leading-[0.9] tracking-[-1px]">
            <span className="text-brand-yellow">20</span>
            <span className="text-brand-blue">2</span>
            <span className="text-brand-red">4</span>
          </div>
          <div className="text-[clamp(18px,2.2vw,36px)] font-black leading-[1.05] tracking-[-0.3px] text-white uppercase">
            Año de
            <br />
            Consolidación
          </div>
        </FadeIn>

        {STATS.map((item) => (
          <FadeIn
            from="left"
            key={item.label}
            delay={item.delay}
            className={`flex items-center justify-between gap-5 py-4 sm:py-5 ${
              item.last ? "" : "border-b border-white/20"
            }`}
          >
            <span className="text-[13px] sm:text-[17px] font-black tracking-[1.4px] text-white uppercase">
              {item.label}
            </span>
            <span className="font-numeric text-[clamp(28px,3.2vw,52px)] font-black leading-none text-brand-yellow">
              {item.value}
            </span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
