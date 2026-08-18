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

type TranslationRecord = {
  source: string;
  applied: string;
};

type TranslationMatch = {
  start: number;
  end: number;
  localized: string;
};

function isProtected(element: Element | null) {
  return Boolean(element?.matches("script, style, .material-symbols, [data-no-translate]") || element?.closest(".material-symbols, [data-no-translate]"));
}

export function LocalizedContent({ locale, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const textRecords = useRef(new WeakMap<Text, TranslationRecord>());
  const attributeRecords = useRef(new WeakMap<Element, Map<string, TranslationRecord>>());
  const dictionary = useMemo(() => ({ ...generatedTranslations[locale], ...extraTranslations[locale], ...translatedFragments[locale] }), [locale]);
  const entries = useMemo(() => Object.entries(dictionary).filter(([source, target]) => source !== target && source.length >= 4 && source.toLowerCase() !== "luminetis").sort((a, b) => b[0].length - a[0].length), [dictionary]);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || !dictionary) return;
    const cache = new Map<string, string>();

    const hasBoundary = (text: string, start: number, end: number, fragment: string) => {
      const word = /[A-Za-zÀ-ÿ0-9]/;
      const before = text[start - 1];
      const after = text[end];
      return (!word.test(fragment[0] ?? "") || !before || !word.test(before)) && (!word.test(fragment.at(-1) ?? "") || !after || !word.test(after));
    };

    const translate = (source: string) => {
      const cached = cache.get(source);
      if (cached !== undefined) return cached;
      const trimmed = source.trim();
      if (!trimmed || !/[A-Za-zÀ-ÿ]/.test(trimmed) || /^(?:luminetis|(?:info@)?luminetis\.com)$/i.test(trimmed)) {
        cache.set(source, source);
        return source;
      }
      const exact = dictionary[trimmed];
      if (exact) {
        const localized = source.replace(trimmed, exact);
        cache.set(source, localized);
        return localized;
      }
      const matches: TranslationMatch[] = [];
      for (const [english, localized] of entries) {
        let start = trimmed.indexOf(english);
        while (start !== -1) {
          const end = start + english.length;
          if (hasBoundary(trimmed, start, end, english)) matches.push({ start, end, localized });
          start = trimmed.indexOf(english, end);
        }
      }
      matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));
      let cursor = 0;
      let output = "";
      for (const match of matches) {
        if (match.start < cursor) continue;
        output += trimmed.slice(cursor, match.start) + match.localized;
        cursor = match.end;
      }
      if (cursor === 0) {
        cache.set(source, source);
        return source;
      }
      output += trimmed.slice(cursor);
      const localized = source.replace(trimmed, output);
      cache.set(source, localized);
      return localized;
    };

    const translateText = (node: Text) => {
      const current = node.nodeValue ?? "";
      const record = textRecords.current.get(node);
      const source = record && current === record.applied ? record.source : current;
      const applied = translate(source);
      textRecords.current.set(node, { source, applied });
      if (current !== applied) node.nodeValue = applied;
    };

    const translateAttribute = (element: Element, attribute: string) => {
      const current = element.getAttribute(attribute);
      if (!current) return;
      let records = attributeRecords.current.get(element);
      if (!records) {
        records = new Map();
        attributeRecords.current.set(element, records);
      }
      const record = records.get(attribute);
      const source = record && current === record.applied ? record.source : current;
      const applied = translate(source);
      records.set(attribute, { source, applied });
      if (current !== applied) element.setAttribute(attribute, applied);
    };

    const translateElement = (element: Element) => {
      if (isProtected(element)) return;
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          return parent && !isProtected(parent) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        },
      });
      let node = walker.nextNode();
      while (node) {
        translateText(node as Text);
        node = walker.nextNode();
      }
      for (const item of [element, ...Array.from(element.querySelectorAll("*"))]) {
        if (isProtected(item)) continue;
        for (const attribute of translatedAttributes) {
          translateAttribute(item, attribute);
        }
      }
    };

    translateElement(root);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          const node = mutation.target as Text;
          const parent = node.parentElement;
          if (!parent || isProtected(parent)) continue;
          translateText(node);
          continue;
        }
        if (mutation.type === "attributes") {
          const element = mutation.target as Element;
          if (!mutation.attributeName || isProtected(element)) continue;
          translateAttribute(element, mutation.attributeName);
          continue;
        }
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) translateElement(node as Element);
          if (node.nodeType === Node.TEXT_NODE && node.parentElement && !isProtected(node.parentElement)) translateText(node as Text);
        }
      }
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: translatedAttributes });
    return () => observer.disconnect();
  }, [dictionary, entries, locale]);

  return <div ref={ref} className="contents">{children}</div>;
}
