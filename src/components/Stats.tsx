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
    <section className="bg-grain pt-[clamp(55px,6.5vw,120px)] pb-[clamp(50px,6vw,110px)]">
      <div className="mx-auto max-w-[1240px] px-[3.2vw]">
        <FadeIn
          from="left"
          className="mb-[clamp(34px,3.6vw,64px)] flex items-center gap-[clamp(14px,1.6vw,28px)]"
        >
          <div className="font-numeric text-[clamp(46px,6.4vw,108px)] leading-[0.9] tracking-[-1px]">
            <span className="text-brand-yellow">20</span>
            <span className="text-brand-blue">2</span>
            <span className="text-brand-red">4</span>
          </div>
          <div className="origin-left scale-x-[0.92] text-[clamp(19px,2.45vw,42px)] font-black leading-[1.06] tracking-[-0.5px] text-ink-muted uppercase">
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
            className={`flex items-center justify-between gap-5 py-[clamp(16px,1.6vw,26px)] ${
              item.last ? "" : "border-b border-white/[0.16]"
            }`}
          >
            <span className="text-[clamp(12px,1.05vw,18px)] font-extrabold tracking-[1.4px] text-ink-muted uppercase">
              {item.label}
            </span>
            <span className="font-numeric text-[clamp(30px,3.4vw,58px)] leading-none text-brand-yellow">
              {item.value}
            </span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
