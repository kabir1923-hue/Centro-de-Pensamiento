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
        className="bg-stone pt-[clamp(50px,5.5vw,100px)] pb-[clamp(40px,4vw,70px)] text-ink"
      >
        <div className="mx-auto grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] items-start gap-[clamp(30px,3.4vw,64px)] px-[3.2vw]">
          <FadeIn from="left">
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
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
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white shadow-xl transition-transform duration-200 group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-current" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn from="right" delay={140}>
            <div className="flex items-center gap-3.5 text-[clamp(15px,1.3vw,24px)] font-light tracking-[1.2px] uppercase">
              <span>Disponible en</span>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[1em] font-extrabold tracking-normal normal-case hover:opacity-80 transition-opacity"
              >
                <YouTubeIcon className="h-auto w-[1.55em] text-brand-red" />
                YouTube
              </a>
            </div>

            <div className="my-[clamp(18px,1.8vw,30px)] mb-[clamp(24px,2.4vw,42px)] h-px bg-[oklch(0.693_0.003_84.6)]" />

            <h3 className="mb-2 text-[clamp(17px,1.5vw,27px)] font-bold leading-[1.25] tracking-[0.3px] uppercase">
              ¿Se acabó el neoliberalismo?
            </h3>

            <div className="mb-[clamp(18px,1.8vw,30px)] text-[clamp(13px,1.1vw,19px)] font-bold tracking-[0.3px] uppercase">
              Simón Gómez entrevista al expresidente Ernesto Samper.
            </div>

            <p className="text-[clamp(14px,1.12vw,19px)] font-light leading-[1.85] text-stone-ink text-pretty">
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
