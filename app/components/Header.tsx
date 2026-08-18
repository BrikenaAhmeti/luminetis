"use client";

import { useEffect, useRef, useState } from "react";
import { pages, type PageKey } from "../data/site";
import { type Dictionary, type Locale, locales } from "../i18n/config";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

type HeaderProps = {
  page: PageKey;
  locale: Locale;
  dictionary: Dictionary;
  theme: "light" | "dark";
  onNavigate: (page: PageKey) => void;
  onLocale: (locale: Locale) => void;
  onTheme: (theme: "light" | "dark") => void;
};

export function Header({ page, locale, dictionary, theme, onNavigate, onLocale, onTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const activeLocale = locales.find((item) => item.code === locale) ?? locales[0];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLanguageOpen(false);
      }
    };
    const onClick = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) setLanguageOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onClick);
    };
  }, []);

  const navigate = (target: PageKey) => {
    onNavigate(target);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-page/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-3 px-4 sm:px-8 lg:gap-8 lg:px-12">
        <button onClick={() => navigate("home")} aria-label="Luminetis home" className="shrink-0 cursor-pointer border-0 bg-transparent p-0 text-ink">
          <span className="hidden sm:block"><Logo /></span>
          <span className="sm:hidden"><Logo compact /></span>
        </button>
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          {pages.map((item, index) => (
            <button key={item} onClick={() => navigate(item)} aria-current={page === item ? "page" : undefined} className={`cursor-pointer rounded-md border-0 bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-card ${page === item ? "text-amber-text" : "text-ink"}`}>
              {dictionary.nav[index]}
            </button>
          ))}
        </nav>
        <button onClick={() => setMenuOpen(true)} aria-label={dictionary.menu} aria-expanded={menuOpen} className="ml-auto flex h-11 cursor-pointer items-center gap-2 rounded-lg border border-line bg-transparent px-3 font-mono text-[12.5px] uppercase tracking-[0.06em] lg:hidden">
          <Icon name="menu" className="text-[20px]" />
          <span className="hidden min-[430px]:inline">{dictionary.menu}</span>
        </button>
        <div role="group" aria-label={dictionary.theme} className="flex shrink-0 gap-1 rounded-lg border border-line p-1">
          <button onClick={() => onTheme("light")} aria-label={dictionary.light} aria-pressed={theme === "light"} className={`grid h-9 w-9 cursor-pointer place-items-center rounded-md border-0 ${theme === "light" ? "bg-amber text-on-amber" : "bg-transparent text-muted"}`}><Icon name="light_mode" className="text-[18px]" /></button>
          <button onClick={() => onTheme("dark")} aria-label={dictionary.dark} aria-pressed={theme === "dark"} className={`grid h-9 w-9 cursor-pointer place-items-center rounded-md border-0 ${theme === "dark" ? "bg-amber text-on-amber" : "bg-transparent text-muted"}`}><Icon name="dark_mode" className="text-[18px]" /></button>
        </div>
        <div ref={languageRef} className="relative shrink-0">
          <button onClick={() => setLanguageOpen((value) => !value)} aria-label={dictionary.language} aria-haspopup="listbox" aria-expanded={languageOpen} className="flex h-11 cursor-pointer items-center gap-2 rounded-lg border border-line bg-transparent px-2.5 font-mono text-[12.5px] tracking-[0.04em] sm:px-3.5">
            <span className="text-base leading-none">{activeLocale.flag}</span>
            <span className="hidden xl:inline">{activeLocale.name}</span>
            <Icon name="expand_more" className="hidden text-[18px] text-muted sm:inline" />
          </button>
          {languageOpen && (
            <div role="listbox" className="absolute right-0 top-[52px] z-50 w-[200px] rounded-[10px] border border-line bg-card p-1.5 shadow-[var(--shadow-md)]">
              {locales.map((item) => (
                <button key={item.code} onClick={() => { onLocale(item.code); setLanguageOpen(false); }} role="option" aria-selected={item.code === locale} className={`flex min-h-10 w-full cursor-pointer items-center gap-2.5 rounded-md border-0 px-2.5 text-left font-mono text-[12.5px] text-ink hover:bg-page ${item.code === locale ? "bg-page" : "bg-transparent"}`}>
                  <span className="text-base">{item.flag}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 top-0 z-40">
          <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="absolute inset-0 cursor-default border-0 bg-[#0E1317]/55" />
          <nav aria-label="Mobile" className="absolute right-0 top-0 flex h-dvh w-[min(88vw,360px)] flex-col gap-1 overflow-y-auto border-l border-line bg-page p-6">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="mb-3 grid h-11 w-11 cursor-pointer place-items-center self-end rounded-lg border border-line bg-transparent text-xl"><Icon name="close" /></button>
            {pages.map((item, index) => (
              <button key={item} onClick={() => navigate(item)} aria-current={page === item ? "page" : undefined} className={`cursor-pointer border-0 border-b border-line bg-transparent px-3 py-3.5 text-left font-display text-xl font-medium ${page === item ? "text-amber-text" : "text-ink"}`}>
                {dictionary.nav[index]}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
