import { useEffect, useRef, useState, type CSSProperties, type ElementType, type Key, type ReactNode } from "react";

const transforms: Record<string, string> = {
  up: "translate3d(0, 34px, 0)",
  down: "translate3d(0, -34px, 0)",
  left: "translate3d(-52px, 0, 0)",
  right: "translate3d(52px, 0, 0)",
};

export interface FadeInProps {
  children: ReactNode;
  from?: "up" | "left" | "right" | "down";
  delay?: number;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
  key?: Key;
}

export function FadeIn({
  children,
  from = "up",
  delay = 0,
  className = "",
  as: Component = "div",
  style = {},
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transforms[from] || transforms.up,
        transitionProperty: "opacity, transform",
        transitionDuration: "0.9s",
        transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
