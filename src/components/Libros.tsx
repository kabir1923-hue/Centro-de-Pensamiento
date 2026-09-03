import { FadeIn } from "./FadeIn";
import type { BookItem } from "../types";

const BOOKS: BookItem[] = [
  {
    src: "/__l5e/assets-v1/c1b62879-3cf2-423b-aec3-7369a9ec3de4/book-1.webp",
    kind: "Libro",
    title: "El modelo econónico está cambiando",
    extra: "2026",
    from: "left",
    delay: 0,
  },
  {
    src: "/__l5e/assets-v1/b259382d-a5e0-4230-b3b6-925c13b98b6f/book-2.webp",
    kind: "Libro",
    title: "Economía para la transformación social",
    extra: null,
    from: "up",
    delay: 110,
  },
  {
    src: "/__l5e/assets-v1/19f5f33e-a69e-4ff9-8784-e8c63ed14c9b/book-3.webp",
    kind: "Cartilla",
    title: "Manual para defender el cambio",
    extra: "2022 . 2026",
    from: "right",
    delay: 220,
  },
];

export function Libros() {
  return (
    <section
      id="libros"
      className="bg-grain relative overflow-hidden bg-ink pt-[2vw] pb-[6vw]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#0d0e12] to-ink opacity-95 pointer-events-none" />

      <div className="relative z-10">
        {/* Clean Red Badge as shown in VENTANA_HOME.svg */}
        <div className="flex justify-center px-[3.2vw] mb-2">
          <FadeIn className="inline-block bg-[#7A1118] px-10 py-2.5 text-[clamp(12px,1vw,16px)] font-bold tracking-[2px] text-white uppercase shadow-lg">
            Ediciones Digitales
          </FadeIn>
        </div>

        <div className="mx-auto grid max-w-[1340px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 px-[3.2vw] pt-12">
          {BOOKS.map((book) => (
            <FadeIn as="article" key={book.title} from={book.from} delay={book.delay} className="flex flex-col items-center text-center">
              <div className="group relative overflow-hidden rounded-md shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:scale-[1.03]">
                <img
                  src={book.src}
                  alt={book.title}
                  loading="lazy"
                  className="aspect-[54/70] w-full max-w-[330px] object-cover"
                />
              </div>
              <div className="mt-4 sm:mt-5 text-[11px] sm:text-[13px] font-bold leading-[1.35] tracking-[0.5px] text-white uppercase max-w-[300px]">
                {book.title}
                {book.extra && (
                  <span className="block mt-0.5 font-bold text-white">
                    {book.extra}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
