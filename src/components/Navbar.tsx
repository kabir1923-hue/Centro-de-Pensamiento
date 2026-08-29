import { useEffect, useState } from "react";
import type { NavItem } from "../types";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Quiénes somos", href: "#proposito" },
  { label: "Opinión y analisis", href: "#opinion" },
  { label: "Noticias y eventos", href: "#noticias" },
  { label: "Hablemos", href: "#hablemos" },
  { label: "Dona aquí", href: "#hablemos" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "proposito", "opinion", "noticias", "hablemos"];
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
    <header className="sticky top-0 z-50 flex justify-center bg-gradient-to-b from-ink/90 via-ink/40 to-transparent px-4 pt-[18px] backdrop-blur-[2px]">
      <nav
        aria-label="Principal"
        className="flex max-w-full items-center justify-center gap-5 sm:gap-7 md:gap-9 overflow-x-auto rounded-full border border-brand-yellow/35 bg-[#141414]/90 px-6 sm:px-8 py-3 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] [scrollbar-width:none]"
      >
        <a
          href="#home"
          className="shrink-0 transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none"
          aria-label="Inicio Centro de Pensamiento Vida"
        >
          <img
            src="/__l5e/assets-v1/12096966-ce8a-4439-8944-7bb0169fe93f/cpv-logo.webp"
            alt="Centro de Pensamiento Vida"
            className="w-[32px] sm:w-[36px] h-auto drop-shadow-md"
          />
        </a>

        <ul className="flex items-center justify-center gap-5 sm:gap-7 md:gap-9 text-[13px] sm:text-[14px] font-medium tracking-[1.2px] whitespace-nowrap uppercase">
          {NAV_ITEMS.map((item) => {
            const isActive =
              (item.href === "#home" && activeSection === "home") ||
              (item.href === `#${activeSection}` && item.label !== "Dona aquí");

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "border-b-2 border-brand-yellow pb-[4px] text-brand-yellow font-bold"
                      : "text-stone-200 hover:text-brand-yellow"
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
