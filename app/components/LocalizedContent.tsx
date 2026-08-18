"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { generatedTranslations } from "../i18n/generated";
import { extraTranslations } from "../i18n/extra";
import type { Locale } from "../i18n/config";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

const translatedAttributes = ["aria-label", "aria-description", "title", "placeholder", "alt"];
const translatedFragments: Record<string, Record<string, string>> = {
  fr: { "/ month": "/ mois", "/ mo": "/ mois", "/ glass": "/ verre" },
  de: { "/ month": "/ Monat", "/ mo": "/ Monat", "/ glass": "/ Glas" },
  sq: { "/ month": "/ muaj", "/ mo": "/ muaj", "/ glass": "/ gotë" },
  es: { "/ month": "/ mes", "/ mo": "/ mes", "/ glass": "/ copa" },
  pt: { "/ month": "/ mês", "/ mo": "/ mês", "/ glass": "/ copo" },
  it: { "/ month": "/ mese", "/ mo": "/ mese", "/ glass": "/ bicchiere" },
};

export function LocalizedContent({ locale, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const entries = useMemo(() => Object.entries({ ...generatedTranslations[locale], ...extraTranslations[locale], ...translatedFragments[locale] }).filter(([source, target]) => source !== target && source.length >= 4).sort((a, b) => b[0].length - a[0].length), [locale]);

  useLayoutEffect(() => {
    const root = ref.current;
    const dictionary = { ...generatedTranslations[locale], ...extraTranslations[locale], ...translatedFragments[locale] };
    if (!root || !dictionary) return;

    const translate = (source: string) => {
      const trimmed = source.trim();
      if (!trimmed || !/[A-Za-zÀ-ÿ]/.test(trimmed)) return source;
      const exact = dictionary[trimmed];
      if (exact) return source.replace(trimmed, exact);
      let output = trimmed;
      for (const [english, localized] of entries) {
        if (output.includes(english)) output = output.split(english).join(localized);
      }
      return output === trimmed ? source : source.replace(trimmed, output);
    };

    const translateElement = (element: Element) => {
      if (element.matches("script, style, .material-symbols") || element.closest(".material-symbols")) return;
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          return parent && !parent.matches("script, style, .material-symbols") && !parent.closest(".material-symbols") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        },
      });
      let node = walker.nextNode();
      while (node) {
        const value = node.nodeValue ?? "";
        const localized = translate(value);
        if (localized !== value) node.nodeValue = localized;
        node = walker.nextNode();
      }
      for (const item of [element, ...Array.from(element.querySelectorAll("*"))]) {
        if (item.matches(".material-symbols")) continue;
        for (const attribute of translatedAttributes) {
          const value = item.getAttribute(attribute);
          if (!value) continue;
          const localized = translate(value);
          if (localized !== value) item.setAttribute(attribute, localized);
        }
      }
    };

    translateElement(root);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          const node = mutation.target;
          const parent = node.parentElement;
          if (!parent || parent.matches(".material-symbols") || parent.closest(".material-symbols")) continue;
          const value = node.nodeValue ?? "";
          const localized = translate(value);
          if (localized !== value) node.nodeValue = localized;
          continue;
        }
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) translateElement(node as Element);
          if (node.nodeType === Node.TEXT_NODE && node.parentElement) translateElement(node.parentElement);
        }
      }
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [entries, locale]);

  return <div ref={ref} className="contents">{children}</div>;
}
