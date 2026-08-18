"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { pages, type PageKey, type RegionKey } from "../data/site";
import { dictionaries, localeCodes, localeFromCountry, resolveLocale, type Locale } from "../i18n/config";
import { AboutPage } from "./pages/AboutPage";
import { CommitmentPage } from "./pages/CommitmentPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { PackagesPage } from "./pages/PackagesPage";
import { ServicesPage } from "./pages/ServicesPage";
import { WorkPage } from "./pages/WorkPage";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Theme = "light" | "dark";

function pageFromHash(): PageKey {
  if (typeof window === "undefined") return "home";
  const value = window.location.hash.replace("#", "") as PageKey;
  return pages.includes(value) ? value : "home";
}

export function SiteShell() {
  const [page, setPage] = useState<PageKey>("home");
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [region, setRegion] = useState<RegionKey>("eu");
  const dictionary = useMemo(() => dictionaries[locale], [locale]);

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const storedLocale = window.localStorage.getItem("luminetis-locale");
    const browserLocale = navigator.languages.map(resolveLocale).find((value) => localeCodes.includes(value)) ?? "en";
    const initialTimer = window.setTimeout(() => {
      setPage(pageFromHash());
      setTheme(currentTheme);
      setLocale(storedLocale ? resolveLocale(storedLocale) : browserLocale);
    }, 0);

    const detect = async () => {
      try {
        const response = await fetch("/api/locale", { headers: { Accept: "application/json" } });
        if (!response.ok) return;
        const data = await response.json() as { locale?: string; country?: string | null };
        if (!storedLocale && !navigator.languages.some((value) => localeCodes.includes(resolveLocale(value)))) setLocale(localeFromCountry(data.country) ?? resolveLocale(data.locale));
        if (["AL", "XK", "KS"].includes(data.country?.toUpperCase() ?? "")) setRegion("balkans");
      } catch {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone === "Europe/Pristina" || timeZone === "Europe/Tirane") setRegion("balkans");
      }
    };

    void detect();
    const onHash = () => setPage(pageFromHash());
    window.addEventListener("hashchange", onHash);
    return () => {
      window.clearTimeout(initialTimer);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      elements.forEach((element) => element.dataset.visible = "true");
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.visible = "true";
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });
    elements.forEach((element) => observer.observe(element));
    const timer = window.setTimeout(() => elements.filter((element) => element.getBoundingClientRect().top < window.innerHeight).forEach((element) => element.dataset.visible = "true"), 900);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [page]);

  const navigate = useCallback((target: PageKey) => {
    setPage(target);
    window.history.pushState(null, "", target === "home" ? `${window.location.pathname}${window.location.search}` : `#${target}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const changeTheme = useCallback((value: Theme) => {
    setTheme(value);
    document.documentElement.dataset.theme = value;
    window.localStorage.setItem("luminetis-theme", value);
  }, []);

  const changeLocale = useCallback((value: Locale) => {
    setLocale(value);
    window.localStorage.setItem("luminetis-locale", value);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Header page={page} locale={locale} dictionary={dictionary} theme={theme} onNavigate={navigate} onLocale={changeLocale} onTheme={changeTheme} />
      <main className="flex-1">
        {page === "home" && <HomePage dictionary={dictionary} region={region} onRegion={setRegion} onNavigate={navigate} />}
        {page === "services" && <ServicesPage onNavigate={navigate} />}
        {page === "packages" && <PackagesPage region={region} onRegion={setRegion} onNavigate={navigate} />}
        {page === "work" && <WorkPage onNavigate={navigate} />}
        {page === "about" && <AboutPage onNavigate={navigate} />}
        {page === "commitment" && <CommitmentPage onNavigate={navigate} />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer dictionary={dictionary} onNavigate={navigate} />
    </div>
  );
}
