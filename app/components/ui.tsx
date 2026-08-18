"use client";

import type { PageKey } from "../data/site";
import { AnimatedNumber } from "./AnimatedNumber";
import { Icon } from "./Icon";

type ActionProps = {
  children: React.ReactNode;
  page: PageKey;
  onNavigate: (page: PageKey) => void;
  variant?: "primary" | "outline" | "inverse" | "text";
  icon?: string;
};

export function Action({ children, page, onNavigate, variant = "primary", icon }: ActionProps) {
  const styles = {
    primary: "bg-amber text-on-amber border-amber hover:-translate-y-px",
    outline: "border-line bg-transparent text-ink hover:border-muted",
    inverse: "border-white/30 bg-transparent text-[#F5F2EC] hover:border-white",
    text: "min-h-0 border-transparent bg-transparent px-0 text-link hover:text-amber-text",
  }[variant];
  return (
    <button onClick={() => onNavigate(page)} className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border px-6 font-medium transition ${styles}`}>
      {children}
      {icon && <Icon name={icon} className="text-[18px]" />}
    </button>
  );
}

export function Kicker({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <p className={`mb-4 font-mono text-[12.5px] uppercase tracking-[0.06em] ${inverse ? "text-[#E8A22B]" : "text-amber-text"}`}>{children}</p>;
}

export function CheckList({ items, color = "var(--accent-text)", compact = false }: { items: readonly string[]; color?: string; compact?: boolean }) {
  return (
    <ul className={`grid list-none p-0 ${compact ? "gap-2" : "gap-2.5"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-[1.45]">
          <span className="mt-0.5 shrink-0" style={{ color }}><Icon name="check_small" className="text-[18px]" /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({ kicker, title, body, inverse = false }: { kicker: string; title: string; body?: string; inverse?: boolean }) {
  return (
    <div>
      <Kicker inverse={inverse}>{kicker}</Kicker>
      <h2 className="max-w-[24ch] font-display text-[clamp(25px,3.6vw,39px)] font-medium leading-[1.15] tracking-[-0.015em]">{title}</h2>
      {body && <p className={`mt-3 max-w-[56ch] ${inverse ? "text-[#F5F2EC]/70" : "text-muted"}`}>{body}</p>}
    </div>
  );
}

export function Stat({ value, label, inverse = false }: { value: React.ReactNode; label: string; inverse?: boolean }) {
  const numeric = typeof value === "string" ? value.match(/^([\d,]+)(.*)$/) : null;
  const rendered = numeric ? <AnimatedNumber value={Number(numeric[1].replaceAll(",", ""))} suffix={numeric[2]} /> : value;
  return (
    <span>
      <span className={`block font-mono text-[31px] leading-none ${inverse ? "text-[#E8A22B]" : "text-amber-text"}`}>{rendered}</span>
      <span className={`mt-1.5 block font-mono text-[12.5px] uppercase tracking-[0.06em] ${inverse ? "text-[#F5F2EC]/60" : "text-muted"}`}>{label}</span>
    </span>
  );
}

export function LocationCard({ city, note, detail }: { city: string; note: string; detail: string }) {
  return (
    <div className="rounded-[18px] border border-line bg-card p-[26px]">
      <div className="flex items-center gap-3">
        <Icon name="place" className="text-[22px] text-link" />
        <h2 className="font-display text-[25px] font-medium leading-[1.2]">{city}</h2>
      </div>
      <p className="mt-3.5 text-sm leading-[1.6] text-muted">{note}</p>
      <p className="mt-3 font-mono text-[12.5px] text-muted">{detail}</p>
    </div>
  );
}
