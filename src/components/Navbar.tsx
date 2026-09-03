import { useEffect, useState } from "react";
import type { NavItem } from "../types";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Quiénes somos", href: "#proposito" },
  { label: "Publicaciones", href: "#libros" },
  { label: "Noticias y eventos", href: "#noticias" },
  { label: "Hablemos", href: "#hablemos" },
  { label: "Dona aquí", href: "#hablemos" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "proposito", "libros", "opinion", "noticias", "hablemos"];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center bg-gradient-to-b from-ink/90 via-ink/40 to-transparent px-4 pt-4 sm:pt-5 backdrop-blur-[2px]">
      <nav
        aria-label="Principal"
        className="flex max-w-full items-center justify-center gap-4 sm:gap-7 md:gap-8 overflow-x-auto rounded-full border border-white/10 bg-[#1e1e1e]/80 px-5 sm:px-8 py-2.5 sm:py-3 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] [scrollbar-width:none]"
      >
        {/* Brand Butterfly Icon inside the pill as shown in VENTANA_HOME.svg */}
        <a href="#home" className="flex items-center shrink-0 pr-1 hover:opacity-85 transition-opacity" aria-label="Centro de Pensamiento Vida">
          <img
            src="/LOGO.svg"
            alt="Centro de Pensamiento Vida"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </a>

        <ul className="flex items-center justify-center gap-4 sm:gap-6 md:gap-7 text-[12px] sm:text-[13px] font-semibold tracking-[1px] whitespace-nowrap uppercase">
          {NAV_ITEMS.map((item) => {
            const isDona = item.label.toLowerCase().includes("dona");
            const isHome = item.label.toLowerCase() === "home";
            const isActive =
              (isHome && activeSection === "home") ||
              item.href === `#${activeSection}`;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isDona
                      ? "text-brand-yellow font-bold hover:brightness-125"
                      : isActive || isHome
                      ? "text-brand-yellow hover:text-brand-yellow"
                      : "text-stone-300 hover:text-brand-yellow"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
