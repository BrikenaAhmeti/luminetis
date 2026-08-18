"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { capabilities, locations, mapSteps, orbitItems, plans, prices, processSteps, tierDefinitions, type PageKey, type RegionKey } from "../../data/site";
import type { Dictionary } from "../../i18n/config";
import { AnimatedNumber } from "../AnimatedNumber";
import { DemoShowcase } from "../DemoShowcase";
import { Icon } from "../Icon";
import { QuantumCanvas } from "../QuantumCanvas";
import { Action, CheckList, Kicker, SectionHeading } from "../ui";

type Props = {
  dictionary: Dictionary;
  region: RegionKey;
  onRegion: (region: RegionKey) => void;
  onNavigate: (page: PageKey) => void;
};

const messages = [
  { text: "Do you deliver to Merl?", time: "09:12" },
  { text: "Table for four tonight?", time: "11:40" },
  { text: "Are you open on Sunday?", time: "14:03" },
  { text: "Can I get a quote for 20 pieces?", time: "17:26" },
];

function ResultsSection() {
  const bars = [14, 19, 26, 30, 38, 44, 52, 61, 68, 78, 88, 100];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const targets = Array.from(section.querySelectorAll(".metric-animate"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-active"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-active");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.25 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="reveal bg-[#0E1317] text-[#F5F2EC]">
      <div className="mx-auto max-w-[1200px] px-5 py-[clamp(56px,8vw,112px)] sm:px-8 lg:px-12">
        <SectionHeading inverse kicker="From nowhere to found" title="Watch it happen, screen by screen." body="Scroll and each panel fills in. This is the shape of a first year: found on the map, found in search, and a phone that rings." />
        <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(272px,100%),1fr))] gap-5">
          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full border border-white/15 bg-[repeating-linear-gradient(135deg,rgba(245,242,236,0.16)_0_1px,transparent_1px_7px)]" />
              <span><span className="block font-mono text-[12.5px]">@atelier.mira</span><span className="block font-mono text-[12.5px] text-white/50">Instagram · TikTok</span></span>
            </div>
            <p className="mb-0.5 mt-5 font-mono text-[39px] leading-none"><AnimatedNumber value={3200} /></p>
            <p className="text-[12.5px] text-white/60">followers, from zero</p>
            <svg viewBox="0 0 260 60" preserveAspectRatio="none" aria-hidden="true" className="mt-4 block h-14 w-full overflow-visible">
              <polyline points="0,54 20,50 40,52 62,44 84,40 106,42 128,31 150,27 172,29 196,18 218,13 240,15 260,4" fill="none" stroke="#E8A22B" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="metric-animate metric-line" />
            </svg>
            <div className="mt-3.5 grid grid-cols-3 gap-1.5">{[0, 1, 2].map((item) => <span key={item} className="aspect-square bg-[repeating-linear-gradient(135deg,rgba(245,242,236,0.14)_0_1px,transparent_1px_8px)]" />)}</div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <div className="flex items-center justify-between gap-3"><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">Local search</span><span className="font-mono text-[12.5px] text-[#E8A22B]">position <AnimatedNumber value={1} from={47} /></span></div>
            <div className="mt-[18px] grid gap-2">
              <div className="metric-animate metric-pin metric-search-pin flex items-center gap-3 rounded-[10px] border border-[#E8A22B]/50 bg-[#E8A22B]/10 p-3"><span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-[#E8A22B] font-mono text-[12.5px] text-[#0E1317]">1</span><span><span className="block text-sm font-medium">Your business</span><span className="block font-mono text-[12.5px] text-white/60">4.8 · open now · 300 m</span></span></div>
              {[62, 48, 56, 44].map((width, index) => <div key={width} className="flex items-center gap-3 rounded-[10px] border border-white/10 p-3"><span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full border border-white/15 font-mono text-[12.5px] text-white/50">{index + 2}</span><span className="grid flex-1 gap-1.5"><span className="block h-2 rounded bg-white/15" style={{ width: `${width}%` }} /><span className="block h-2 w-[38%] rounded bg-white/8" /></span></div>)}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#F5F2EC]/60">Messages</span>
              <span className="rounded-full bg-[#E8A22B] px-2.5 py-0.5 font-mono text-[12.5px] text-[#0E1317]"><AnimatedNumber value={1000} /></span>
            </div>
            <div className="mt-[18px] grid gap-2.5">{messages.map((message, index) => <div key={message.time} className="metric-animate metric-message max-w-[88%] rounded-[14px_14px_14px_4px] bg-white/7 px-3.5 py-3" style={{ transitionDelay: `${index * 160}ms` }}><p className="text-sm leading-[1.45]">{message.text}</p><p className="mt-1.5 font-mono text-[12.5px] text-[#F5F2EC]/50">{message.time}</p></div>)}</div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <div className="flex items-center justify-between gap-3"><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">Calls from Maps</span><span className="font-mono text-xl"><AnimatedNumber value={420} /></span></div>
            <div className="mt-[18px] grid gap-2.5">{[["+352 621 •• •• ••", "2 min · Maps"], ["+383 44 ••• •••", "5 min · Maps"], ["+352 691 •• •• ••", "1 min · Maps"]].map(([number, detail], index) => <div key={number} className="metric-animate metric-call flex items-center gap-3 border-b border-white/10 p-3" style={{ transitionDelay: `${index * 150}ms` }}><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E8A22B]" /><span className="flex-1 font-mono text-sm">{number}</span><span className="font-mono text-[12.5px] text-white/55">{detail}</span></div>)}</div>
            <p className="mt-3 text-[12.5px] leading-[1.5] text-white/55">Tap-to-call from the listing, before anyone opens the site.</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <div className="flex items-center justify-between gap-3"><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">Website visits</span><span className="font-mono text-xl"><AnimatedNumber value={8400} /></span></div>
            <div className="mt-5 flex h-[120px] items-end gap-1.5">{bars.map((height, index) => <span key={`${height}-${index}`} className="metric-animate metric-bar block flex-1 origin-bottom rounded-t-[3px]" style={{ height: `${height}%`, background: index > 8 ? "#E8A22B" : "rgba(232,162,43,0.45)", transitionDelay: `${index * 60}ms` }} />)}</div>
            <div className="mt-2.5 flex justify-between font-mono text-[12.5px] text-white/50"><span>month 1</span><span>month 12</span></div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">Google Search impressions</span>
            <p className="mt-[18px] flex items-baseline gap-2"><Icon name="trending_up" className="text-[26px] text-[#8FC46B]" /><span className="font-mono text-[39px] leading-none text-[#8FC46B]">+<AnimatedNumber value={300} suffix="%" /></span></p>
            <p className="mb-5 mt-2.5 text-sm leading-[1.5] text-white/70">People who saw you in search results, month twelve against month one.</p>
            <div className="grid gap-3">{[["wine bar near me", "1,900 / mo", 92], ["wine bar luxembourg gare", "820 / mo", 62], ["natural wine luxembourg", "410 / mo", 34]].map(([label, value, width]) => <div key={String(label)}><div className="flex justify-between gap-3 font-mono text-[12.5px] text-white/65"><span>{label}</span><span>{value}</span></div><div className="mt-1.5 h-[5px] rounded bg-white/8"><span className="metric-animate metric-growth block h-full rounded bg-[#E8A22B]" style={{ "--metric-width": `${width}%` } as CSSProperties} /></div></div>)}</div>
          </article>

          <article className="grain relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#151B20] sm:col-span-2 lg:col-span-3">
            <div className="absolute inset-x-0 top-[44%] h-4 bg-white/[0.06]" />
            <div className="absolute inset-y-0 left-[32%] w-3 bg-white/[0.06]" />
            <div className="absolute inset-y-0 left-[71%] w-2 rotate-12 bg-white/[0.04]" />
            <div className="absolute inset-x-5 top-5 flex flex-wrap items-center gap-2.5">
              <span className="flex items-center gap-2.5 rounded-full bg-[#F5F2EC] px-4 py-2.5 text-[#0E1317] shadow-lg"><Icon name="search" className="text-[18px] text-[#3B454D]" /><span className="font-mono text-[12.5px]">wine bar near me</span></span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 font-mono text-[12.5px] text-[#F5F2EC]/75">Open now</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 font-mono text-[12.5px] text-[#F5F2EC]/75">Top rated</span>
            </div>
            {[["12%", "34%"], ["74%", "30%"], ["26%", "76%"], ["62%", "84%"], ["86%", "62%"]].map(([left, top]) => <span key={`${left}${top}`} className="absolute h-[7px] w-[7px] rounded-full bg-white/30" style={{ left, top }} />)}
            {[['14%', '38%', 'Café Ost · 3.9'], ['76%', '34%', 'Bar Nord · 4.1'], ['28%', '80%', 'Weinhaus · 4.0']].map(([left, top, name]) => <span key={name} className="absolute font-mono text-[12.5px] text-white/40" style={{ left, top }}>{name}</span>)}
            <div className="metric-animate metric-map-pin absolute left-[44%] top-[52%]">
              <span className="absolute -left-[27px] -top-[27px] h-[72px] w-[72px] animate-[lum-pulse_2600ms_ease-out_infinite] rounded-full border border-[#E8A22B]" />
              <span className="relative block h-[18px] w-[18px] rounded-full bg-[#E8A22B] shadow-[0_4px_14px_rgba(232,162,43,0.28)]" />
              <span className="absolute left-[30px] top-[-16px] whitespace-nowrap rounded-[10px] bg-[#F5F2EC] px-[13px] py-2.5 text-[#0E1317] shadow-xl">
                <span className="block font-display text-[15px] font-medium">Vinera, your business</span>
                <span className="mt-1 block font-mono text-[12.5px] text-[#3B454D]">4.8 ★ · open until 01:00 · 300 m</span>
                <span className="mt-2 flex gap-2"><span className="rounded-md bg-[#E8A22B] px-2.5 py-1 font-mono text-[12.5px]">Call</span><span className="rounded-md border border-[#D8D4CB] px-2.5 py-1 font-mono text-[12.5px]">Directions</span></span>
              </span>
            </div>
            <p className="absolute bottom-5 left-[22px] font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#F5F2EC]/55">The map result · you first, competitors grey</p>
          </article>
        </div>
        <p className="mt-6 max-w-[70ch] font-mono text-[12.5px] leading-[1.7] text-[#F5F2EC]/50">Illustrative figures showing the shape of a first year, not a client result. We do not publish numbers we did not measure.</p>
      </div>
    </section>
  );
}

function CapabilitySection({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const item = capabilities[active];
  const positions = [[50, 8], [86.4, 29], [86.4, 71], [50, 92], [13.6, 71], [13.6, 29]];
  const durations = [7, 8, 9, 7.5, 8.5, 9.5];
  return (
    <section className="reveal bg-[#0E1317] text-[#F5F2EC]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(32px,5vw,64px)] px-5 py-[clamp(56px,8vw,112px)] sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <SectionHeading inverse kicker="What we do" title="Six capabilities, one team around them." body="Hover any of the six. The same people scope, build, launch and maintain all of it." />
          <div className="mt-8 min-h-[190px] border-l-[3px] bg-white/[0.04] p-6" style={{ borderColor: item.color }}><p className="font-mono text-[12.5px] uppercase tracking-[0.06em]" style={{ color: item.color }}>{item.kicker}</p><h3 className="mt-2 font-display text-[25px] font-medium">{item.title}</h3><p className="mt-2.5 text-sm leading-[1.6] text-white/80">{item.desc}</p></div>
          <button onClick={() => onNavigate("services")} className="mt-6 cursor-pointer border-0 bg-transparent p-0 font-medium text-[#E8A22B]">Everything we do, in detail</button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:relative lg:mx-auto lg:aspect-square lg:w-[min(100%,440px)] lg:grid-cols-none">
          <svg viewBox="0 0 100 100" aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
            <g className="orbit-spin-forward">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(245,242,236,0.14)" strokeWidth="0.25" strokeDasharray="1.6 2.4" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(245,242,236,0.08)" strokeWidth="0.25" />
            </g>
          </svg>
          <svg viewBox="0 0 100 100" aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
            {positions.map(([x, y], index) => <line key={`${x}-${y}`} x1="50" y1="50" x2={x} y2={y} stroke={`${capabilities[index].color}47`} strokeWidth="0.3" />)}
          </svg>
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#151B20] lg:grid"><Image src="/logos/logomark-colour-reversed.svg" alt="Luminetis" width={114} height={138} className="h-[44%] w-auto" /></div>
          {capabilities.map((capability, index) => <button key={capability.title} onMouseEnter={() => { setActive(index); setHovered(index); }} onMouseLeave={() => setHovered(null)} onFocus={() => { setActive(index); setHovered(index); }} onBlur={() => setHovered(null)} onClick={() => onNavigate("services")} className="capability-orbit flex min-h-[76px] cursor-pointer flex-col items-center justify-center rounded-[14px] border bg-[#151B20] px-2 py-3 text-center text-sm font-medium leading-[1.65] text-[#F5F2EC] transition-[border-color,background] duration-200 lg:absolute lg:min-h-0 lg:w-28 lg:-translate-x-1/2 lg:-translate-y-1/2" style={{ borderColor: hovered === index ? capability.color : `${capability.color}73`, background: hovered === index ? `${capability.color}24` : "#151B20", left: `${positions[index][0]}%`, top: `${positions[index][1]}%`, animationDuration: `${durations[index]}s` }}><Icon name={capability.icon} className="text-[24px]" style={{ color: capability.color }} /><span className="mt-1.5">{capability.title}</span></button>)}
        </div>
      </div>
    </section>
  );
}

function PackagePreview({ region, onRegion, onNavigate }: Props) {
  const money = (value: number) => `€${value.toLocaleString("en-GB")}`;
  return (
    <section className="reveal border-y border-line bg-card">
      <div className="mx-auto max-w-[1200px] px-5 py-[clamp(56px,8vw,112px)] sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading kicker="Packages" title="One build fee. Then the plan that keeps you found." /><div className="flex gap-1.5 rounded-full border border-line p-1">{(["eu", "balkans"] as RegionKey[]).map((item) => <button key={item} onClick={() => onRegion(item)} className={`min-h-10 cursor-pointer rounded-full border-0 px-4 font-mono text-[12.5px] uppercase tracking-[0.06em] ${region === item ? "bg-amber text-on-amber" : "bg-transparent text-muted"}`}>{item === "eu" ? "EU list" : "Balkans list"}</button>)}</div></div>
        <p className="mb-10 mt-3 font-mono text-[12.5px] text-muted">Hover a tier to see what is in it.</p>
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-3">{tierDefinitions.map((tier) => <article key={tier.name} className={`cut-card card-lift relative overflow-hidden rounded-[18px] border p-7 ${tier.recommended ? "border-amber/35 bg-[#0E1317] text-[#F5F2EC]" : "border-line bg-page text-ink"}`}><div className="flex items-center gap-2.5"><Icon name={tier.icon} className={tier.recommended ? "text-[#E8A22B]" : "text-amber-text"} /><h3 className="font-display text-[25px] font-medium">{tier.name}</h3>{tier.recommended && <span className="ml-auto rounded-full bg-amber px-2.5 py-1 font-mono text-xs uppercase text-on-amber">Pick this</span>}</div><p className="mt-[22px] flex items-baseline gap-2"><span className="font-mono text-[12.5px] opacity-70">{tier.prefix}</span><span className="font-mono text-[clamp(34px,4.4vw,49px)] leading-none">€<AnimatedNumber value={prices[tier.key][region]} /></span></p><p className="mb-[22px] mt-2 font-mono text-[12.5px] uppercase tracking-[0.06em] opacity-65">{tier.key === "custom" ? "quoted per project" : `then Care from ${money(prices.care[region])} / month`}</p><p className="text-sm leading-[1.55] opacity-80">{tier.who}</p><div className={`mt-[18px] ${tier.recommended ? "text-[#E8A22B]" : "text-amber-text"}`}><CheckList items={tier.items.slice(0, 3)} compact /></div><button onClick={() => onNavigate("packages")} className="mt-6 flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 font-medium" style={{ color: tier.recommended ? "#E8A22B" : "var(--accent-text)" }}>{tier.cta}<Icon name="arrow_forward" className="text-[18px]" /></button></article>)}</div>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">{plans.map((plan) => <div key={plan.name} className="cut-card-reverse flex flex-wrap items-center gap-4 rounded-[18px] border border-line bg-page px-6 py-[22px]"><Icon name={plan.icon} className="text-[26px] text-amber-text" /><span className="flex-1"><span className="block font-display text-xl font-medium">{plan.name}</span><span className="mt-1 block text-sm text-muted">{plan.summary}</span></span><span className="whitespace-nowrap font-mono text-xl">€<AnimatedNumber value={prices[plan.key][region]} /> / mo</span></div>)}</div>
      </div>
    </section>
  );
}

function ExperienceOrbit({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  const positioned = orbitItems.map((item, index) => {
    const inner = index < 6;
    const orbitIndex = inner ? index : index - 6;
    const total = inner ? 6 : 10;
    const radius = inner ? 25 : 45;
    const offset = inner ? -Math.PI / 2 : -Math.PI / 2 + Math.PI / 10;
    const angle = (orbitIndex / total) * Math.PI * 2 + offset;
    return { ...item, inner, left: 50 + Math.cos(angle) * radius * 1.18, top: 50 + Math.sin(angle) * radius };
  });
  return (
    <section className="reveal overflow-hidden bg-[#0E1317] text-[#F5F2EC]">
      <div className="mx-auto max-w-[1200px] px-5 py-[clamp(56px,8vw,112px)] sm:px-8 lg:px-12">
        <SectionHeading inverse kicker="Ten years, mapped" title="Everything we have shipped, orbiting one team." body="Nearer the centre is what we do most weeks. Further out is work we have done and would take again. Hover any of them." />
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:relative lg:min-h-[clamp(480px,50vw,620px)] lg:block lg:overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[min(96%,760px)] -translate-x-1/2 -translate-y-1/2 lg:block">
            <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 h-full w-full">
              <g className="orbit-spin-slow"><circle cx="50" cy="50" r="46" fill="none" stroke="rgba(245,242,236,0.07)" strokeWidth="0.2" strokeDasharray="1.4 3" /><circle cx="50" cy="50" r="33" fill="none" stroke="rgba(232,162,43,0.12)" strokeWidth="0.2" strokeDasharray="0.8 4" /></g>
              <g className="orbit-spin-reverse"><circle cx="50" cy="50" r="20" fill="none" stroke="rgba(245,242,236,0.09)" strokeWidth="0.2" strokeDasharray="2 5" /></g>
              <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(232,162,43,0.14)" strokeWidth="0.15" /><circle cx="50" cy="50" r="42" fill="none" stroke="rgba(232,162,43,0.08)" strokeWidth="0.15" />
            </svg>
            <div className="absolute left-1/2 top-1/2 aspect-square w-[56%] -translate-x-1/2 -translate-y-1/2 animate-[lum-breathe_9s_ease-in-out_infinite] rounded-full bg-[radial-gradient(closest-side,rgba(232,162,43,0.12),rgba(232,162,43,0))]" />
          </div>
          <div className="col-span-full grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:absolute lg:inset-y-0 lg:left-[clamp(120px,13vw,190px)] lg:right-[clamp(120px,13vw,190px)] lg:block">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block">{positioned.map((item) => <line key={item.label} x1="50" y1="50" x2={item.left} y2={item.top} stroke={`${item.color}${item.inner ? "66" : "33"}`} strokeWidth={item.inner ? "0.3" : "0.16"} vectorEffect="non-scaling-stroke" />)}</svg>
            <div className="absolute left-1/2 top-1/2 z-[2] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-amber/45 bg-[#151B20] shadow-[0_0_0_16px_rgba(232,162,43,0.05)] lg:grid"><span className="text-center"><span className="block font-mono text-[31px] leading-none text-[#E8A22B]"><AnimatedNumber value={10} /></span><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">years</span></span></div>
            {positioned.map((item, index) => <button key={item.label} onClick={() => onNavigate(index % 3 === 0 ? "work" : "services")} className={`experience-node flex min-h-[52px] cursor-pointer items-center gap-2 rounded-xl border bg-[#151B20] p-3.5 text-left text-sm leading-[1.3] transition hover:bg-[#20272E] hover:text-white lg:absolute lg:min-h-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:whitespace-nowrap lg:rounded-full lg:px-[15px] lg:py-[9px] lg:leading-[1.2] ${item.inner ? "text-white/95 lg:text-[15px]" : "text-white/70 lg:text-[13px]"}`} style={{ borderColor: `${item.color}55`, left: `${item.left}%`, top: `${item.top}%`, animationDuration: `${7 + (index % 4)}s`, animationDelay: `${(index % 5) * 0.4}s` }}><Icon name={item.icon} className={`text-xl leading-none ${item.inner ? "" : "lg:text-lg"}`} style={{ color: item.color }} /><span>{item.label}</span></button>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage({ dictionary, region, onRegion, onNavigate }: Props) {
  return (
    <div>
      <section className="reveal relative overflow-hidden border-b border-amber/35 bg-[#0E1317] text-[#F5F2EC]">
        <QuantumCanvas />
        <div data-no-translate className="relative mx-auto max-w-[1200px] px-5 py-[clamp(72px,11vw,144px)] sm:px-8 lg:px-12">
          <p className="mb-5 font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#E8A22B]">{dictionary.hero.kicker}</p>
          <h1 className="max-w-[20ch] font-display text-[clamp(34px,6.4vw,61px)] font-medium leading-[1.05] tracking-[-0.02em]">{dictionary.hero.title}</h1>
          <p className="mt-7 max-w-[52ch] text-[clamp(16px,1.7vw,20px)] leading-[1.6] text-[#F5F2EC]/80">{dictionary.hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3"><Action page="packages" onNavigate={onNavigate}>{dictionary.hero.primary}</Action><Action page="contact" onNavigate={onNavigate} variant="inverse">{dictionary.hero.secondary}</Action></div>
          <p className="mt-14 max-w-[44ch] font-mono text-[12.5px] leading-[1.7] text-[#F5F2EC]/55">{dictionary.hero.note}</p>
        </div>
      </section>

      <section className="reveal border-y border-line bg-card">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-[clamp(56px,7vw,96px)] sm:px-8 md:grid-cols-2 lg:gap-16 lg:px-12">
          <div><Kicker>Get on the map</Kicker><h2 className="font-display text-[clamp(25px,3.4vw,39px)] font-medium leading-[1.15] tracking-[-0.015em]">Someone searches for what you sell, near where you are, and you are there.</h2><p className="mt-6 max-w-[52ch] text-muted">Most small businesses do not want a website. They want the phone to ring. That happens in the map result above the search results, and it only happens if the listing exists, is verified, and is complete.</p><div className="mt-8 flex flex-wrap gap-5"><Action page="services" onNavigate={onNavigate} variant="text">Local visibility, in detail</Action><Action page="packages" onNavigate={onNavigate} variant="text">The Found plan</Action></div></div>
          <ul className="grid list-none gap-0.5 p-0">{mapSteps.map((step) => <li key={step} className="flex gap-3.5 border-b border-line py-3.5"><span className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-amber" /><span>{step}</span></li>)}</ul>
        </div>
      </section>

      <ResultsSection />
      <DemoShowcase />
      <CapabilitySection onNavigate={onNavigate} />
      <PackagePreview dictionary={dictionary} region={region} onRegion={onRegion} onNavigate={onNavigate} />

      <section className="reveal mx-auto max-w-[1200px] px-5 py-[clamp(56px,7vw,96px)] sm:px-8 lg:px-12">
        <h2 className="mb-10 font-display text-[clamp(25px,3vw,31px)] font-medium">How we work</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">{processSteps.map((step) => <div key={step.n} className="border-t-2 border-amber pt-5"><p className="font-mono text-[12.5px] tracking-[0.06em] text-muted">{step.n}</p><h3 className="mt-2 font-display text-xl font-medium">{step.title}</h3><p className="mt-3 text-sm leading-[1.55] text-muted">{step.body}</p></div>)}</div>
      </section>

      <ExperienceOrbit onNavigate={onNavigate} />

      <section className="reveal border-t border-line bg-card">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-[clamp(56px,7vw,96px)] sm:px-8 md:grid-cols-2 lg:gap-16 lg:px-12"><div><Kicker>Sectors and systems</Kicker><p className="max-w-[42ch] font-display text-[clamp(20px,2.4vw,25px)] leading-[1.45]">Ten years of commercial work. Some of it we had to go back through invoices to remember.</p><p className="mt-6 max-w-[44ch] text-muted">Not a complete list, and not the limit. If your problem is not on it, ask. We will tell you plainly whether it is ours to take or someone else&apos;s.</p></div><div><Kicker>Where we are</Kicker>{locations.map((location) => <div key={location.city} className="border-b border-line py-4"><h3 className="font-display text-xl font-medium">{location.city}</h3><p className="mt-1 text-sm text-muted">{location.note}</p></div>)}</div></div>
      </section>

      <section className="reveal border-b border-amber/35 bg-inverse text-on-inverse">
        <div className="mx-auto max-w-[1200px] px-5 py-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"><Kicker inverse>The quantum commitment</Kicker><div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16"><div><h2 className="max-w-[20ch] font-display text-[clamp(31px,5.4vw,61px)] font-medium leading-[1.05]">When quantum arrives, you move onto it for free.</h2><p className="mt-6 max-w-[46ch] text-[clamp(16px,1.7vw,20px)] leading-[1.6] opacity-85">One of us is a PhD candidate in quantum computing. That is the reason this studio exists and where the name comes from. Light is how quantum machines will carry information, and it is how people find you today.</p></div><div className="cut-card border border-amber/40 p-7">{[["No additional build fee", "Clients on an active care plan get their existing services migrated and pay nothing to build it."], ["Told in advance, in plain language", "What changes, what it improves, and what it costs to run."], ["You keep up without paying to keep up", "The research happens on our time. You get the result as part of your existing plan."]].map(([title, body]) => <div key={title} className="border-b border-white/15 py-4"><h3 className="font-display text-xl font-medium text-[#E8A22B]">{title}</h3><p className="mt-1.5 text-sm opacity-85">{body}</p></div>)}<button onClick={() => onNavigate("packages")} className="mt-5 cursor-pointer border-0 bg-transparent p-0 font-medium text-[#E8A22B]">How the commitment is written</button></div></div></div>
      </section>

      <section className="reveal bg-inverse text-on-inverse"><div className="mx-auto max-w-[1200px] px-5 py-[clamp(56px,7vw,96px)] sm:px-8 lg:px-12"><div className="grid grid-cols-1 gap-8 md:grid-cols-3">{[["You own everything", "Code in your repository, domain in your registrar account, every third-party account in your name with you as owner."], ["Fixed price means fixed price", "If we underestimated, that is ours to absorb. Scope changes are quoted and approved before any work starts."], ["A named person owns your project", "You email a person, not a queue, and you are told who covers when they are away."]].map(([title, body]) => <div key={title}><h3 className="font-display text-xl font-medium text-[#E8A22B]">{title}</h3><p className="mt-3 text-sm opacity-85">{body}</p></div>)}</div><button onClick={() => onNavigate("commitment")} className="mt-10 cursor-pointer border-0 bg-transparent p-0 font-medium text-[#E8A22B]">Read what we are accountable for</button></div></section>

      <section className="reveal mx-auto max-w-[1200px] px-5 py-[clamp(56px,7vw,96px)] text-center sm:px-8 lg:px-12"><h2 className="mx-auto max-w-[22ch] font-display text-[clamp(25px,3.4vw,39px)] font-medium leading-[1.15]">Tell us what you sell and where you are.</h2><p className="mx-auto mb-8 mt-5 max-w-[48ch] text-muted">We will tell you what we would do, what it costs, and whether you need us at all.</p><Action page="contact" onNavigate={onNavigate}>Talk to us</Action></section>
    </div>
  );
}
