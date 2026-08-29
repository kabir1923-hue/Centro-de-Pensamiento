export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  highlightText?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  type: "event_banner" | "artwork" | "books" | "video" | "pillars";
}

export interface BookItem {
  src: string;
  kind: string;
  title: string;
  extra?: string | null;
  from: "up" | "left" | "right";
  delay: number;
}

export interface ProcessItem {
  icon: string;
  title: string;
  text: string;
  color: string;
  border: string;
  from: "up" | "left" | "right";
  delay: number;
}

export interface StatItem {
  label: string;
  value: string;
  delay: number;
  last?: boolean;
}
