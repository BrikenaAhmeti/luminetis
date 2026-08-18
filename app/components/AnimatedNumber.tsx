"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  from?: number;
  suffix?: string;
  locale?: string;
  duration?: number;
};

export function AnimatedNumber({ value, from = 0, suffix = "", locale = "en-GB", duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    setDisplay(from);
    let frame = 0;
    let observer: IntersectionObserver | null = null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (reduced) {
        setDisplay(value);
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(from + (value - from) * eased));
        if (progress < 1) frame = window.requestAnimationFrame(step);
      };
      frame = window.requestAnimationFrame(step);
    };

    observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      observer?.disconnect();
      run();
    }, { threshold: 0.25 });
    observer.observe(element);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [duration, from, value]);

  return <span ref={ref}>{display.toLocaleString(locale)}{suffix}</span>;
}
