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
      className="pb-[4vw]"
      style={{
        background: "linear-gradient(var(--ink) 0 42%, var(--stone) 42% 100%)",
      }}
    >
      <div className="relative flex items-center justify-center px-[3.2vw]">
        <div className="absolute inset-x-0 h-px bg-brand-red" />
        <FadeIn className="relative rounded-full bg-brand-red px-11 py-[11px] text-[clamp(13px,1.05vw,18px)] font-light tracking-[1.4px] text-white uppercase">
          Publicaciones
        </FadeIn>
      </div>

      <div className="mx-auto grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-[clamp(24px,4vw,70px)] px-[3.2vw] pt-[clamp(40px,5vw,90px)]">
        {BOOKS.map((book) => (
          <FadeIn as="article" key={book.title} from={book.from} delay={book.delay}>
            <img
              src={book.src}
              alt={book.title}
              loading="lazy"
              className="aspect-[54/70] w-full object-cover shadow-[0_22px_40px_-20px_rgba(0,0,0,0.5)]"
            />
            <div className="mt-[22px] mb-1.5 text-[clamp(12px,1vw,17px)] font-light tracking-[0.8px] text-ink-soft uppercase">
              {book.kind}
            </div>
            <div className="text-[clamp(13px,1.05vw,18px)] font-bold leading-[1.4] tracking-[0.4px] text-ink uppercase">
              {book.title}
              {book.extra && (
                <>
                  <br />
                  {book.extra}
                </>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
