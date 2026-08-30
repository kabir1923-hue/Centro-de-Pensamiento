import type { CSSProperties, ElementType, Key, ReactNode } from "react";

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
  className = "",
  as: Component = "div",
  style = {},
}: FadeInProps) {
  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}

