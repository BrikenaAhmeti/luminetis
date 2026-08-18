"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { pages, type PageKey, type RegionKey } from "../data/site";
import { dictionaries, localeFromCountry, matchLocale, type Locale } from "../i18n/config";
import { AboutPage } from "./pages/AboutPage";
import { CommitmentPage } from "./pages/CommitmentPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { PackagesPage } from "./pages/PackagesPage";
import { PrivacyPage, TermsPage } from "./pages/LegalPages";
import { ServicesPage } from "./pages/ServicesPage";
import { WorkPage } from "./pages/WorkPage";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LocalizedContent } from "./LocalizedContent";

type Theme = "light" | "dark";

function pageFromLocation(): PageKey {
  if (typeof window === "undefined") return "home";
  if (window.location.pathname === "/privacy") return "privacy";
  if (window.location.pathname === "/terms") return "terms";
  const value = window.location.hash.replace("#", "");
  return pages.find((item) => item === value) ?? "home";
}

export function SiteShell({ initialPage = "home" }: { initialPage?: PageKey }) {
  const [page, setPage] = useState<PageKey>(initialPage);
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [region, setRegion] = useState<RegionKey>("eu");
  const localeWasChosen = useRef(false);
  const dictionary = useMemo(() => dictionaries[locale], [locale]);

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const requestedLocale = matchLocale(new URLSearchParams(window.location.search).get("lang"));
    const storedLocale = matchLocale(window.localStorage.getItem("luminetis-locale"));
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
    const browserLocale = browserLanguages.map(matchLocale).find((value): value is Locale => value !== null) ?? null;
    if (requestedLocale) window.localStorage.setItem("luminetis-locale", requestedLocale);
    const initialTimer = window.setTimeout(() => {
      setPage(pageFromLocation());
      setTheme(currentTheme);
      setLocale(requestedLocale ?? storedLocale ?? browserLocale ?? "en");
    }, 0);

    const detect = async () => {
      try {
        const response = await fetch("/api/locale", { headers: { Accept: "application/json" } });
        if (!response.ok) return;
        const data = await response.json() as { locale?: string; country?: string | null };
        if (!requestedLocale && !storedLocale && !browserLocale && !localeWasChosen.current) setLocale(localeFromCountry(data.country) ?? matchLocale(data.locale) ?? "en");
        if (["AL", "XK", "KS"].includes(data.country?.toUpperCase() ?? "")) setRegion("balkans");
      } catch {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone === "Europe/Pristina" || timeZone === "Europe/Tirane") setRegion("balkans");
      }
    };

    void detect();
    const onLocation = () => setPage(pageFromLocation());
    window.addEventListener("hashchange", onLocation);
    window.addEventListener("popstate", onLocation);
    return () => {
      window.clearTimeout(initialTimer);
      window.removeEventListener("hashchange", onLocation);
      window.removeEventListener("popstate", onLocation);
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
    if (target === "privacy" || target === "terms") {
      window.location.assign(`/${target}`);
      return;
    }
    if (window.location.pathname !== "/") {
      window.location.assign(target === "home" ? "/" : `/#${target}`);
      return;
    }
    setPage(target);
    window.history.pushState(null, "", target === "home" ? "/" : `#${target}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const changeTheme = useCallback((value: Theme) => {
    setTheme(value);
    document.documentElement.dataset.theme = value;
    window.localStorage.setItem("luminetis-theme", value);
  }, []);

  const changeLocale = useCallback((value: Locale) => {
    localeWasChosen.current = true;
    setLocale(value);
    window.localStorage.setItem("luminetis-locale", value);
    const url = new URL(window.location.href);
    if (value === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", value);
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <LocalizedContent locale={locale}>
        <Header page={page} locale={locale} dictionary={dictionary} theme={theme} onNavigate={navigate} onLocale={changeLocale} onTheme={changeTheme} />
        <main className="flex-1">
          {page === "home" && <HomePage dictionary={dictionary} region={region} onRegion={setRegion} onNavigate={navigate} />}
          {page === "services" && <ServicesPage onNavigate={navigate} />}
          {page === "packages" && <PackagesPage region={region} onRegion={setRegion} onNavigate={navigate} />}
          {page === "work" && <WorkPage onNavigate={navigate} />}
          {page === "about" && <AboutPage onNavigate={navigate} />}
          {page === "commitment" && <CommitmentPage onNavigate={navigate} />}
          {page === "contact" && <ContactPage />}
          {page === "privacy" && <PrivacyPage />}
          {page === "terms" && <TermsPage />}
        </main>
        <Footer dictionary={dictionary} onNavigate={navigate} />
      </LocalizedContent>
    </div>
  );
}
