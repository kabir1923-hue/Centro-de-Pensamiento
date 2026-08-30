import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowUpRight, BookOpen, Video, Layers, Sparkles } from "lucide-react";
import type { HeroSlide } from "../types";

const SLIDES: HeroSlide[] = [
  {
    id: "slide-evento",
    badge: "Conferencia Internacional • Bogotá",
    title: "Economía Para La Vida",
    highlightText: "Hacia un Nuevo Orden Económico Internacional",
    description:
      "Un encuentro histórico que reúne a economistas, investigadoras, líderes sociales y tomadores de decisión para debatir alternativas estructurales frente al modelo neoliberal y trazar la ruta hacia la justicia social.",
    primaryCta: { label: "Conoce el Propósito", href: "#proposito" },
    secondaryCta: { label: "Ver Publicaciones", href: "#libros" },
    type: "event_banner",
  },
  {
    id: "slide-1",
    badge: "Pensamiento Crítico & Transformación",
    title: "El modelo económico está cambiando",
    highlightText: "Alternativas para la vida digna",
    description:
      "Generamos conocimiento crítico y propuestas económicas situadas para la vida digna, la justicia social y el bienestar colectivo en América Latina.",
    primaryCta: { label: "Nuestra Visión", href: "#proposito" },
    secondaryCta: { label: "Ver Publicaciones", href: "#libros" },
    type: "artwork",
  },
  {
    id: "slide-2",
    badge: "Publicaciones & Investigación 2024 - 2026",
    title: "Economía para la transformación social",
    highlightText: "Lecturas y herramientas pedagógicas",
    description:
      "Nuestras cartillas y libros democratizan el saber económico y brindan insumos clave a comunidades, líderes y tomadores de decisión.",
    primaryCta: { label: "Explorar Libros", href: "#libros" },
    secondaryCta: { label: "Ver Procesos", href: "#opinion" },
    type: "books",
  },
  {
    id: "slide-3",
    badge: "Diálogos & Debate Público",
    title: "¿Se acabó el neoliberalismo?",
    highlightText: "Entrevistas y análisis de coyuntura",
    description:
      "Simón Gómez conversa con el expresidente Ernesto Samper sobre el nuevo modelo solidario y el rol estratégico de Colombia en el escenario internacional.",
    primaryCta: { label: "Ver Entrevista", href: "#noticias" },
    secondaryCta: { label: "Opinión y Análisis", href: "#opinion" },
    type: "video",
  },
  {
    id: "slide-4",
    badge: "Acción en el Territorio",
    title: "Investigación, Formación e Incidencia",
    highlightText: "+2,500 personas formadas en 18 territorios",
    description:
      "Construimos capacidades colectivas, redes de pensamiento y alianzas estratégicas para incidir en políticas públicas de alto impacto.",
    primaryCta: { label: "Sé Parte del Cambio", href: "#hablemos" },
    secondaryCta: { label: "Ver Métricas 2024", href: "#opinion" },
    type: "pillars",
  },
];

const AUTOPLAY_DURATION = 6500;

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const currentSlide = SLIDES[currentIndex];

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        let next = prev + newDirection;
        if (next < 0) next = SLIDES.length - 1;
        if (next >= SLIDES.length) next = 0;
        return next;
      });
      setProgress(0);
      startTimeRef.current = Date.now();
    },
    []
  );

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  // Autoplay loop with smooth progress bar
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * AUTOPLAY_DURATION;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        paginate(1);
      } else {
        timerRef.current = requestAnimationFrame(tick);
      }
    };

    timerRef.current = requestAnimationFrame(tick);

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [currentIndex, isPlaying, paginate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        paginate(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      id="home"
      className="bg-grain relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden pt-[clamp(24px,3.5vw,50px)] pb-6 transition-colors duration-700"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-roledescription="carousel"
      aria-label="Carrusel de bienvenida del Centro de Pensamiento Vida"
    >
      {/* Background Image across the entire Hero screen like Slider 1 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/FONDO_BANNER_01.png"
          alt="Auditorio y Conferencia Centro de Pensamiento Vida"
          className={`h-full w-full object-cover object-center transition-all duration-1000 ${
            currentSlide.type === "event_banner"
              ? "scale-105 filter brightness-[0.85] contrast-[1.05]"
              : "scale-100 filter brightness-[0.5] blur-[1.5px]"
          }`}
        />
        {/* Multi-layer gradient overlays for pristine legibility and contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1560px] px-[3.2vw] flex-1 flex flex-col justify-center">
        {/* Top Header Badge & Slide Counter */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-yellow">
              <Sparkles className="h-3.5 w-3.5" />
              {currentSlide.badge}
            </span>
            <span className="hidden sm:inline-block text-xs font-light tracking-widest text-stone-400 uppercase">
              • Centro de Pensamiento Vida
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="font-numeric text-lg sm:text-xl font-bold tracking-widest text-brand-yellow">
              0{currentIndex + 1} <span className="text-white/40 text-sm font-normal">/ 0{SLIDES.length}</span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-stone-300 transition-colors hover:border-brand-yellow hover:text-brand-yellow cursor-pointer"
              title={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
              aria-label={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
            </button>
          </div>
        </div>

        {/* Dynamic Slide Content */}
        <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden rounded-3xl border border-white/15 bg-black/40 backdrop-blur-md p-6 sm:p-9 lg:p-12 shadow-2xl">
          {/* Background image behind text specifically for the first slide (Economía Para La Vida) */}
          <div
            className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none ${
              currentSlide.type === "event_banner" ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/FONDO_BANNER_01.png"
              alt="Conferencia Economía Para La Vida - Escenario Principal"
              className="h-full w-full object-cover object-center scale-100 filter brightness-[0.78] contrast-[1.12]"
            />
            {/* Cinematic dark scrims to ensure 100% crystal-clear text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/65" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >
              {/* Left Column: Text & CTAs organized vertically */}
              <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start justify-center text-left">
                <div className="mb-2 inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-extrabold uppercase tracking-[2.5px] text-brand-yellow drop-shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-brand-yellow animate-pulse" />
                  {currentSlide.highlightText}
                </div>

                <h1 className="mb-3 text-[clamp(28px,3.6vw,52px)] font-black leading-[1.05] tracking-[-0.5px] text-white uppercase text-balance drop-shadow-lg">
                  {currentSlide.title}
                </h1>

                <p className="mb-6 text-[clamp(14px,1.1vw,18px)] font-light leading-[1.75] text-stone-100 max-w-[620px] text-pretty drop-shadow-md">
                  {currentSlide.description}
                </p>

                {/* CTAs stacked vertically */}
                <div className="flex flex-col items-stretch sm:items-start gap-3 w-full sm:w-auto">
                  <a
                    href={currentSlide.primaryCta.href}
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-yellow px-7 py-3 text-sm sm:text-base font-extrabold uppercase tracking-wider text-ink transition-all duration-200 hover:bg-white hover:scale-[1.02] shadow-xl shadow-brand-yellow/30 cursor-pointer"
                  >
                    {currentSlide.primaryCta.label}
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </a>

                  {currentSlide.secondaryCta && (
                    <a
                      href={currentSlide.secondaryCta.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-black/60 backdrop-blur-md px-6 py-3 text-sm sm:text-base font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:border-brand-yellow hover:bg-brand-yellow/15 hover:text-brand-yellow cursor-pointer"
                    >
                      {currentSlide.secondaryCta.label}
                    </a>
                  )}
                </div>

                {/* Institutional branding row organized vertically */}
                {currentSlide.type === "event_banner" && (
                  <div className="mt-6 flex flex-col items-start gap-1.5 border-t border-white/15 pt-4 text-[11px] font-medium tracking-widest text-stone-300 uppercase w-full">
                    <span className="text-brand-yellow font-bold text-xs">Convocan:</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-stone-300">
                      <span>Cancillería</span>
                      <span className="text-white/30">•</span>
                      <span>MinHacienda</span>
                      <span className="text-white/30">•</span>
                      <span className="text-white font-bold">Centro de Pensamiento Vida</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Visual Artwork / Showcase depending on slide type */}
              <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center">
                {currentSlide.type === "event_banner" && (
                  <div className="relative w-full max-w-[720px] mx-auto group">
                    {/* Decorative ambient glow */}
                    <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-brand-yellow/40 via-brand-red/30 to-brand-blue/40 opacity-75 blur-xl transition duration-500 group-hover:opacity-100" />

                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl border-2 border-brand-yellow/50 bg-ink shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] transition-all duration-300 group-hover:border-brand-yellow">
                      <img
                        src="/FONDO_BANNER_01.png"
                        alt="Conferencia Economía Para La Vida - Delegados y Expositores"
                        className="w-full h-auto aspect-[16/9.5] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                )}

                {currentSlide.type === "artwork" && (
                  <div className="relative w-full max-w-[560px] aspect-[926/938] mx-auto">
                    {/* Background circle */}
                    <img
                      src="/__l5e/assets-v1/6d242dc2-9511-41ad-a53e-c451594784a9/hero-circle.webp"
                      alt=""
                      className="absolute top-[60.1%] left-[43.8%] z-0 mt-[-40.35%] ml-[-40.35%] w-[80.7%] animate-pulse duration-1000"
                    />
                    {/* Typography line 1 */}
                    <img
                      src="/__l5e/assets-v1/810fd2c1-0b74-4ed1-958f-ea80bacd68f0/hero-line1.png"
                      alt="El pensamiento económico"
                      className="absolute top-[29.6%] left-0 z-1 w-full"
                    />
                    {/* Central statue bust */}
                    <img
                      src="/__l5e/assets-v1/4b097883-e93b-4418-b898-1ce8363f9fbf/hero-art.webp"
                      alt=""
                      className="absolute top-0 left-[16.3%] z-2 w-[72%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                    />
                    {/* Line 2 */}
                    <img
                      src="/__l5e/assets-v1/cf6a8775-3fa8-491d-8d99-5313fa7cf1e6/hero-line2.png"
                      alt=""
                      className="absolute top-[29.48%] left-0 z-3 w-full"
                    />
                    {/* Line 3 */}
                    <img
                      src="/__l5e/assets-v1/d50b1e55-350d-4cb7-a840-2c1302d5e842/hero-line3.png"
                      alt=""
                      className="absolute top-[39.5%] left-[0.2%] z-3 w-[99.4%]"
                    />
                    {/* Typography line 4 */}
                    <img
                      src="/__l5e/assets-v1/084bc8eb-1259-47c8-8a50-b7ef0c89ffed/hero-line4.png"
                      alt="está cambiando"
                      className="absolute top-[56.81%] left-0 z-4 w-full"
                    />
                    {/* Hero Bottom text */}
                    <img
                      src="/__l5e/assets-v1/092553cb-b990-405d-ab36-99e31836d859/hero-bottom.webp"
                      alt=""
                      className="absolute top-[80.5%] left-[30%] z-5 w-[38.5%]"
                    />
                    {/* Brand badge */}
                    <div className="absolute top-[8%] left-0 z-10 flex items-center gap-3 rounded-xl bg-ink/70 px-3.5 py-2 backdrop-blur-md border border-white/10">
                      <img
                        src="/__l5e/assets-v1/12096966-ce8a-4439-8944-7bb0169fe93f/cpv-logo.webp"
                        alt=""
                        className="w-9"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                      <div className="font-light leading-[1.05] tracking-[1px] text-white uppercase text-left">
                        <div className="text-xs">Centro</div>
                        <div className="text-[9px] tracking-wider text-brand-yellow">De pensamiento</div>
                        <div className="text-sm font-bold tracking-widest text-brand-red">Vida</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide.type === "books" && (
                  <div className="relative w-full max-w-[620px] flex items-center justify-center gap-3 sm:gap-5 py-6">
                    <div className="group relative w-1/3 transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                      <div className="overflow-hidden rounded-xl border border-white/15 bg-stone-900 shadow-2xl">
                        <img
                          src="/__l5e/assets-v1/c1b62879-3cf2-423b-aec3-7369a9ec3de4/book-1.webp"
                          alt="El modelo económico está cambiando"
                          className="aspect-[54/70] w-full object-cover"
                        />
                        <div className="p-2.5 text-center bg-ink/90">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow">
                            Libro 2026
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="group relative w-1/3 z-10 transform scale-110 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-115">
                      <div className="overflow-hidden rounded-xl border-2 border-brand-yellow/60 bg-stone-900 shadow-2xl">
                        <div className="absolute top-2 right-2 z-20 rounded-full bg-brand-red px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                          Destacado
                        </div>
                        <img
                          src="/__l5e/assets-v1/b259382d-a5e0-4230-b3b6-925c13b98b6f/book-2.webp"
                          alt="Economía para la transformación social"
                          className="aspect-[54/70] w-full object-cover"
                        />
                        <div className="p-2.5 text-center bg-ink">
                          <span className="text-[11px] font-black uppercase tracking-wider text-white">
                            Transformación
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="group relative w-1/3 transform rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                      <div className="overflow-hidden rounded-xl border border-white/15 bg-stone-900 shadow-2xl">
                        <img
                          src="/__l5e/assets-v1/19f5f33e-a69e-4ff9-8784-e8c63ed14c9b/book-3.webp"
                          alt="Manual para defender el cambio"
                          className="aspect-[54/70] w-full object-cover"
                        />
                        <div className="p-2.5 text-center bg-ink/90">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                            Cartilla 2022-2026
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide.type === "video" && (
                  <div className="relative w-full max-w-[640px]">
                    <a
                      href="#noticias"
                      className="group block relative overflow-hidden rounded-2xl border border-white/20 bg-stone-900 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <img
                        src="/__l5e/assets-v1/043cd2e1-9a83-4d68-a1f1-ec768780d934/video-thumb.webp"
                        alt="¿Se acabó el neoliberalismo? Ernesto Samper y Simón Gómez"
                        className="aspect-[16/9.5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                            <Video className="h-3.5 w-3.5" /> Entrevista Especial
                          </span>
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-ink shadow-lg transition-transform group-hover:scale-110">
                            <Play className="ml-1 h-5 w-5 fill-current" />
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                          Simón Gómez entrevista al expresidente Ernesto Samper
                        </h3>
                      </div>
                    </a>
                  </div>
                )}

                {currentSlide.type === "pillars" && (
                  <div className="w-fit max-w-[290px] flex flex-col gap-4 sm:gap-5 py-2 mx-auto lg:mx-0">
                    <div className="flex items-center gap-3 rounded-2xl border border-brand-yellow/40 bg-white/5 px-4 py-8 sm:py-10 min-h-[120px] backdrop-blur-sm transition-all hover:bg-brand-yellow/10 shadow-lg">
                      <img
                        src="/__l5e/assets-v1/3030ac57-7802-48e3-9bb6-37c02e33d664/icon-investigacion.webp"
                        alt=""
                        className="w-10 h-10 shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-yellow mb-1.5">
                          Investigación
                        </h4>
                        <p className="text-[11px] sm:text-xs font-light text-stone-300 leading-snug">
                          Conocimiento crítico y riguroso.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-brand-blue/40 bg-white/5 px-4 py-8 sm:py-10 min-h-[120px] backdrop-blur-sm transition-all hover:bg-brand-blue/10 shadow-lg">
                      <img
                        src="/__l5e/assets-v1/8895a711-b292-4b48-978e-354bb0d9901e/icon-formacion.webp"
                        alt=""
                        className="w-10 h-10 shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-blue mb-1.5">
                          Formación
                        </h4>
                        <p className="text-[11px] sm:text-xs font-light text-stone-300 leading-snug">
                          Capacidades para líderes sociales.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-brand-red/40 bg-white/5 px-4 py-8 sm:py-10 min-h-[120px] backdrop-blur-sm transition-all hover:bg-brand-red/10 shadow-lg">
                      <img
                        src="/__l5e/assets-v1/ecabd28d-74ce-4f75-b714-2597940d2030/icon-incidencia.webp"
                        alt=""
                        className="w-10 h-10 shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-red mb-1.5">
                          Incidencia
                        </h4>
                        <p className="text-[11px] sm:text-xs font-light text-stone-300 leading-snug">
                          Políticas públicas y justicia social.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Carousel Controls & Indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          {/* Navigation Dots / Progress Bars */}
          <div className="flex items-center gap-2.5">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`group relative h-2.5 rounded-full transition-all duration-300 overflow-hidden cursor-pointer ${
                    isActive ? "w-16 bg-white/20" : "w-6 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ir al slide ${idx + 1}: ${slide.title}`}
                >
                  {isActive && (
                    <div
                      className="absolute inset-y-0 left-0 bg-brand-yellow rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Previous / Next Chevrons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => paginate(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-brand-yellow hover:bg-brand-yellow hover:text-ink cursor-pointer"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => paginate(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-brand-yellow hover:bg-brand-yellow hover:text-ink cursor-pointer"
              aria-label="Slide siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
