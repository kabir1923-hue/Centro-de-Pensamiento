import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { YouTubeIcon } from "./Icons";
import { Play, X } from "lucide-react";

export function Noticias() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        id="noticias"
        className="bg-grain relative overflow-hidden bg-ink pt-[5vw] pb-[5vw] text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#0d0e12] to-ink opacity-95 pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14 px-[3.2vw]">
          <FadeIn from="left" className="lg:col-span-6">
            <div
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/15 shadow-2xl"
              onClick={() => setIsVideoOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setIsVideoOpen(true);
              }}
              aria-label="Reproducir entrevista: ¿Se acabó el neoliberalismo?"
            >
              <img
                src="/__l5e/assets-v1/043cd2e1-9a83-4d68-a1f1-ec768780d934/video-thumb.webp"
                alt="¿Se acabó el neoliberalismo?"
                loading="lazy"
                className="aspect-[16/9.4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity duration-200 group-hover:bg-black/40">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white shadow-xl transition-transform duration-200 group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-current" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn from="right" delay={140} className="lg:col-span-6">
            <div className="flex items-center gap-3 text-[14px] sm:text-[16px] font-medium tracking-[1.4px] uppercase text-white">
              <span>Disponible en</span>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-black tracking-normal text-white hover:opacity-85 transition-opacity"
              >
                <span className="flex h-5 w-7 items-center justify-center rounded bg-brand-red text-white">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
                <span className="font-bold text-lg leading-none">YouTube</span>
              </a>
            </div>

            <div className="my-5 h-px bg-white/20" />

            <h3 className="mb-2 text-[clamp(20px,1.8vw,30px)] font-black leading-[1.2] tracking-[0.3px] uppercase text-white">
              ¿Se acabó el neoliberalismo?
            </h3>

            <div className="mb-4 text-[clamp(13px,1.1vw,16px)] font-bold tracking-[0.4px] uppercase text-white">
              Simón Gómez entrevista al expresidente Ernesto Samper.
            </div>

            <p className="text-[clamp(14px,1.05vw,17px)] font-light leading-[1.8] text-stone-300 text-pretty">
              En esta entrevista, Simón Gómez director del Centro de Pensamiento Vida, conversa con el
              expresidente Ernesto Samper sobre el agotamiento del modelo neoliberal, la propuesta
              de un modelo solidario de desarrollo para América Latina, y el papel estratégico de
              Colombia en el nuevo orden económico internacional.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
              aria-label="Cerrar video"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full bg-stone-900 flex items-center justify-center">
              <div className="p-8 text-center text-white">
                <YouTubeIcon className="mx-auto mb-4 h-16 w-16 text-brand-red" />
                <h4 className="text-xl font-bold uppercase tracking-wider mb-2">
                  ¿Se acabó el neoliberalismo?
                </h4>
                <p className="text-sm text-stone-300 max-w-md mx-auto mb-6">
                  Simón Gómez entrevista al expresidente Ernesto Samper.
                </p>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold tracking-wide uppercase transition hover:opacity-90"
                >
                  <Play className="h-4 w-4 fill-current" /> Ver en YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
