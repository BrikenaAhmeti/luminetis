"use client";

import { useEffect, useRef, useState } from "react";
import { capabilities, demos, locations, mapSteps, orbitItems, plans, prices, processSteps, tierDefinitions, type PageKey, type RegionKey } from "../../data/site";
import type { Dictionary } from "../../i18n/config";
import { AnimatedNumber } from "../AnimatedNumber";
import { Icon } from "../Icon";
import { Logo } from "../Logo";
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
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      setActive(true);
      observer.disconnect();
    }, { threshold: 0.12 });
    observer.observe(section);
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
              <polyline points="0,54 20,50 40,52 62,44 84,40 106,42 128,31 150,27 172,29 196,18 218,13 240,15 260,4" fill="none" stroke="#E8A22B" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className={`metric-line ${active ? "is-active" : ""}`} />
            </svg>
            <div className="mt-3.5 grid grid-cols-3 gap-1.5">{[0, 1, 2].map((item) => <span key={item} className="aspect-square bg-[repeating-linear-gradient(135deg,rgba(245,242,236,0.14)_0_1px,transparent_1px_8px)]" />)}</div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <div className="flex items-center justify-between gap-3"><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">Local search</span><span className="font-mono text-[12.5px] text-[#E8A22B]">position <AnimatedNumber value={1} from={47} /></span></div>
            <div className="mt-[18px] grid gap-2">
              <div className={`metric-pin flex items-center gap-3 rounded-[10px] border border-[#E8A22B]/50 bg-[#E8A22B]/10 p-3 ${active ? "is-active" : ""}`}><span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-[#E8A22B] font-mono text-[12.5px] text-[#0E1317]">1</span><span><span className="block text-sm font-medium">Your business</span><span className="block font-mono text-[12.5px] text-white/60">4.8 · open now · 300 m</span></span></div>
              {[62, 48, 56, 44].map((width, index) => <div key={width} className="flex items-center gap-3 rounded-[10px] border border-white/10 p-3"><span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full border border-white/15 font-mono text-[12.5px] text-white/50">{index + 2}</span><span className="grid flex-1 gap-1.5"><span className="block h-2 rounded bg-white/15" style={{ width: `${width}%` }} /><span className="block h-2 w-[38%] rounded bg-white/8" /></span></div>)}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#F5F2EC]/60">Messages</span>
              <span className="rounded-full bg-[#E8A22B] px-2.5 py-0.5 font-mono text-[12.5px] text-[#0E1317]"><AnimatedNumber value={1000} /></span>
            </div>
            <div className="mt-[18px] grid gap-2.5">{messages.map((message, index) => <div key={message.time} className={`metric-message max-w-[88%] rounded-[14px_14px_14px_4px] bg-white/7 px-3.5 py-3 ${active ? "is-active" : ""}`} style={{ transitionDelay: `${index * 160}ms` }}><p className="text-sm leading-[1.45]">{message.text}</p><p className="mt-1.5 font-mono text-[12.5px] text-[#F5F2EC]/50">{message.time}</p></div>)}</div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <div className="flex items-center justify-between gap-3"><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">Calls from Maps</span><span className="font-mono text-xl"><AnimatedNumber value={420} /></span></div>
            <div className="mt-[18px] grid gap-2.5">{[["+352 621 •• •• ••", "2 min · Maps"], ["+383 44 ••• •••", "5 min · Maps"], ["+352 691 •• •• ••", "1 min · Maps"]].map(([number, detail], index) => <div key={number} className={`metric-call flex items-center gap-3 border-b border-white/10 p-3 ${active ? "is-active" : ""}`} style={{ transitionDelay: `${index * 150}ms` }}><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E8A22B]" /><span className="flex-1 font-mono text-sm">{number}</span><span className="font-mono text-[12.5px] text-white/55">{detail}</span></div>)}</div>
            <p className="mt-3 text-[12.5px] leading-[1.5] text-white/55">Tap-to-call from the listing, before anyone opens the site.</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <div className="flex items-center justify-between gap-3"><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">Website visits</span><span className="font-mono text-xl"><AnimatedNumber value={8400} /></span></div>
            <div className="mt-5 flex h-[120px] items-end gap-1.5">{bars.map((height, index) => <span key={`${height}-${index}`} className={`metric-bar block flex-1 origin-bottom rounded-t-[3px] ${active ? "is-active" : ""}`} style={{ height: `${height}%`, background: index > 8 ? "#E8A22B" : "rgba(232,162,43,0.45)", transitionDelay: `${index * 60}ms` }} />)}</div>
            <div className="mt-2.5 flex justify-between font-mono text-[12.5px] text-white/50"><span>month 1</span><span>month 12</span></div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151B20] p-[22px]">
            <span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">Google Search impressions</span>
            <p className="mt-[18px] flex items-baseline gap-2"><Icon name="trending_up" className="text-[26px] text-[#8FC46B]" /><span className="font-mono text-[39px] leading-none text-[#8FC46B]">+<AnimatedNumber value={300} suffix="%" /></span></p>
            <p className="mb-5 mt-2.5 text-sm leading-[1.5] text-white/70">People who saw you in search results, month twelve against month one.</p>
            <div className="grid gap-3">{[["wine bar near me", "1,900 / mo", 92], ["wine bar luxembourg gare", "820 / mo", 62], ["natural wine luxembourg", "410 / mo", 34]].map(([label, value, width]) => <div key={String(label)}><div className="flex justify-between gap-3 font-mono text-[12.5px] text-white/65"><span>{label}</span><span>{value}</span></div><div className="mt-1.5 h-[5px] rounded bg-white/8"><span className={`metric-growth block h-full rounded bg-[#E8A22B] ${active ? "is-active" : ""}`} style={{ width: active ? `${width}%` : "3%" }} /></div></div>)}</div>
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
            <div className={`metric-map-pin absolute left-[44%] top-[52%] ${active ? "is-active" : ""}`}>
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

function DemoFrame({ demo }: { demo: (typeof demos)[number]["key"] }) {
  if (demo === "boutique") return (
    <div className="bg-[#EEE8E4] text-[#211C1A]">
      <div className="flex items-center gap-6 border-b border-black/10 px-[clamp(20px,3vw,40px)] py-[18px]"><span className="font-display text-xl font-medium tracking-[0.18em]">MIRA</span><span className="text-sm text-black/60">New · Collections · Journal</span><span className="ml-auto rounded-full bg-[#211C1A] px-[18px] py-2.5 text-sm text-white">Shop the edit</span></div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-[clamp(28px,4vw,56px)]"><p className="font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#7B4D42]">Made in small runs</p><h3 className="mt-5 max-w-[16ch] font-display text-[clamp(31px,4vw,49px)] leading-[1.02]">Clothes with enough room to live in.</h3><p className="mt-5 max-w-[36ch] text-black/65">Cut in Europe, numbered by hand, and made again only when it sells through.</p></div>
        <div className="grid min-h-[320px] grid-cols-2 gap-px bg-black/10 p-px">{["checkroom", "apparel", "dry_cleaning", "style"].map((icon, index) => <div key={icon} className="grid place-items-center bg-[#DCD2CC]"><span className="text-center"><Icon name={icon} className="text-5xl text-[#7B4D42]" /><span className="mt-3 block font-mono text-xs">No. {String(index * 3 + 3).padStart(2, "0")}</span></span></div>)}</div>
      </div>
    </div>
  );
  if (demo === "clinic") return (
    <div className="bg-[#F4FAF9] text-[#14342F]">
      <div className="flex items-center gap-6 border-b border-[#0F6E63]/15 px-[clamp(20px,3vw,40px)] py-[18px]"><span className="flex items-center gap-2 font-display text-xl font-medium"><Icon name="local_hospital" className="text-[#0F6E63]" />Clinique Nord</span><span className="ml-auto rounded-lg bg-[#0F6E63] px-[18px] py-2.5 text-sm text-white">Book a visit</span></div>
      <div className="grid grid-cols-1 gap-6 p-[clamp(28px,4vw,52px)] lg:grid-cols-2"><div><p className="font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#0F6E63]">Open today · 08:00 to 18:00</p><h3 className="mt-5 max-w-[19ch] font-display text-[clamp(31px,4vw,44px)] leading-[1.04]">A doctor, a time, and directions before you need to call.</h3><p className="mt-5 text-[#14342F]/65">General medicine, blood tests and dermatology in French, German and Luxembourgish.</p></div><div className="rounded-2xl border border-[#0F6E63]/20 bg-white p-5"><p className="font-mono text-xs uppercase tracking-wider text-[#0F6E63]">Next appointments</p>{["Today 16:20", "Today 17:05", "Tomorrow 08:00", "Thu 11:45"].map((time) => <div key={time} className="flex justify-between border-b border-[#0F6E63]/10 py-3 text-sm"><span>General consultation</span><span className="font-mono text-[#0F6E63]">{time}</span></div>)}</div></div>
    </div>
  );
  if (demo === "blog") return (
    <div className="bg-[#FFFDF9] text-[#151312]">
      <div className="flex items-center gap-7 border-b border-black/10 px-[clamp(20px,3vw,40px)] py-[18px]"><span className="font-display text-[22px] font-medium">Le Courant</span><span className="font-mono text-[12.5px] uppercase tracking-[0.08em] text-black/60">Culture · Food · City</span><span className="ml-auto rounded-lg bg-[#151312] px-[18px] py-2.5 text-sm text-white">Subscribe</span></div>
      <div className="grid grid-cols-1 gap-8 p-[clamp(28px,4vw,48px)] lg:grid-cols-2"><div><div className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-xl bg-[#20302B]"><span className="absolute -bottom-[30%] -left-[8%] aspect-square w-[58%] rounded-full bg-[#8FC46B]/30" /><Icon name="agriculture" className="relative text-[clamp(56px,8vw,96px)] text-white/90" /></div><p className="mt-[18px] font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#0F6E63]">Long read · 12 min</p><h3 className="mt-2 max-w-[22ch] font-display text-[clamp(25px,3vw,34px)] leading-[1.1]">The last vineyards on the Moselle bend</h3></div><div className="grid content-start">{[["tram", "Where the tram actually helps"], ["restaurant", "Nine kitchens open past midnight"], ["photo_camera", "A studio inside a water tower"], ["apartment", "What rent looks like in 2026"]].map(([icon, title]) => <div key={title} className="flex gap-3.5 border-t border-black/10 py-4"><span className="grid h-14 w-14 place-items-center rounded-lg bg-[#2C3A34] text-white"><Icon name={icon} /></span><span><span className="font-mono text-[12.5px] uppercase tracking-[0.08em] text-black/50">City</span><span className="mt-1 block font-display text-lg font-medium">{title}</span></span></div>)}</div></div>
    </div>
  );
  if (demo === "shop") return (
    <div className="bg-[#F6F7F9] text-[#131A22]">
      <div className="flex items-center gap-6 border-b border-black/10 bg-white px-[clamp(20px,3vw,40px)] py-[18px]"><span className="font-display text-[19px] font-medium">Ferrum Supply</span><span className="hidden flex-1 rounded-full bg-[#F1F3F6] px-3.5 py-2 font-mono text-xs text-black/50 sm:block">Search 4,200 parts</span><span className="ml-auto rounded-lg bg-[#2F6D9E] px-3.5 py-2 text-sm text-white">Bag · 3</span></div>
      <div className="p-[clamp(24px,4vw,44px)]"><div className="mb-5 flex items-baseline justify-between gap-3"><h3 className="font-display text-[clamp(25px,3vw,31px)] font-medium">Fixings and fasteners</h3><span className="font-mono text-xs text-black/55">4,200 lines · next-day to site</span></div><div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">{[["hardware", "Hex bolt, M12 × 80", "€0.84"], ["construction", "Anchor sleeve, 10 mm", "€1.20"], ["donut_large", "Washer, DIN 125", "€0.09"], ["straighten", "Threaded rod, 1 m", "€3.40"]].map(([icon, name, value]) => <div key={name} className="overflow-hidden rounded-xl border border-black/10 bg-white"><div className="grid aspect-[4/3] place-items-center bg-[#E7EAEE]"><Icon name={icon} className="text-[52px] text-[#2F6D9E]" /></div><div className="p-3.5"><p className="text-sm font-medium">{name}</p><p className="mt-2 font-mono">{value}</p></div></div>)}</div></div>
    </div>
  );
  if (demo === "auto") return (
    <div className="bg-[#0A0D10] text-[#EAF0F4]">
      <div className="flex items-center gap-6 border-b border-white/10 px-[clamp(20px,3vw,40px)] py-[18px]"><span className="flex items-center gap-2 font-display text-[19px] font-medium"><Icon name="local_car_wash" className="text-[#5AC8F5]" />AutoWaxon</span><span className="ml-auto rounded-full bg-[#5AC8F5] px-[18px] py-2.5 text-sm text-[#06212E]">Book a slot</span></div>
      <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden p-[clamp(28px,4vw,56px)]"><div className="absolute right-[4%] top-1/2 aspect-square w-[46%] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(90,200,245,0.28),rgba(90,200,245,0))]" /><Icon name="directions_car" className="absolute right-[14%] top-[46%] -translate-y-1/2 text-[clamp(72px,12vw,168px)] text-white/90" /><div className="absolute inset-y-0 w-[22%] animate-[lum-sheen_7s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/15 to-transparent" /><p className="relative font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#5AC8F5]">Detailing studio · Luxembourg</p><h3 className="relative mt-4 max-w-[18ch] font-display text-[clamp(31px,4.4vw,49px)] leading-[1.02]">Paint that looks better than the day it left the factory.</h3></div>
    </div>
  );
  if (demo === "agent") return (
    <div className="bg-[#0C0A14] text-[#EFEBF7]">
      <div className="flex items-center gap-6 border-b border-white/10 px-[clamp(20px,3vw,40px)] py-[18px]"><span className="flex items-center gap-2 font-display text-[19px] font-medium"><Icon name="smart_toy" className="text-[#C08BE0]" />Orbit Agents</span><span className="ml-auto rounded-lg bg-[#C08BE0] px-[18px] py-2.5 text-sm text-[#170F22]">See a demo</span></div>
      <div className="grid grid-cols-1 gap-8 p-[clamp(28px,4vw,52px)] lg:grid-cols-2"><div><p className="font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#C08BE0]">AI agents for small teams</p><h3 className="mt-4 max-w-[20ch] font-display text-[clamp(31px,4vw,44px)] leading-[1.04]">An agent that answers, checks stock, and books the job.</h3><p className="mt-4 max-w-[36ch] text-white/70">It reads your catalogue, your calendar and your inbox. When it does not know, it says so and hands over.</p></div><div className="grid gap-3 rounded-2xl border border-white/15 bg-[#140F1E] p-[22px]">{[["Customer", "Do you have the M12 bolt in stock for tomorrow?"], ["Agent", "Yes, 340 in Ettelbruck. Shall I reserve 50?"], ["Customer", "Reserve 50 and send the invoice to accounts."], ["Agent", "Reserved. Invoice sent, delivery Thursday 08:00."]].map(([who, text], index) => <div key={text} className={`max-w-[90%] rounded-[14px] border px-3.5 py-3 text-sm ${index % 2 ? "justify-self-end border-[#C08BE0]/40 bg-[#C08BE0]/15" : "border-white/10 bg-white/[0.06]"}`}><span className="block font-mono text-[12.5px] uppercase tracking-wider text-white/50">{who}</span><span className="mt-1.5 block">{text}</span></div>)}</div></div>
    </div>
  );
  return (
    <div className="bg-[#FBF7F0] text-[#221A17]">
      <div className="flex items-center gap-7 border-b border-black/10 px-[clamp(20px,3vw,40px)] py-[18px]"><span className="font-display text-xl font-medium tracking-[0.22em]">VINERA</span><span className="hidden text-sm text-black/65 sm:block">Wine list · Kitchen · Events · Find us</span><span className="ml-auto rounded-full bg-[#7A2233] px-[18px] py-2.5 text-sm text-white">Book a table</span></div>
      <div className="grid grid-cols-1 lg:grid-cols-2"><div className="p-[clamp(28px,4vw,56px)]"><p className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#7A2233]">Open until 01:00 · Luxembourg-Gare</p><h3 className="mt-5 max-w-[18ch] font-display text-[clamp(31px,4vw,49px)] leading-[1.02]">Forty wines by the glass, two streets from the station.</h3><p className="mt-[18px] max-w-[34ch] text-black/70">Small plates until midnight. Walk in, or hold a table for two minutes past closing.</p></div><div className="grid min-h-[300px] content-center gap-px bg-[#7A2233] p-7">{[["Riesling, dry", "Wormeldange", "€7"], ["Pinot noir", "Remich", "€8"], ["Orange, skin contact", "Rahovec", "€9"]].map(([name, place, value]) => <div key={name} className="flex items-center justify-between gap-4 border-b border-white/20 py-4 text-white"><span><span className="font-display text-xl">{name}</span><span className="block text-sm text-white/60">{place}</span></span><span className="font-mono">{value} / glass</span></div>)}</div></div>
    </div>
  );
}

function DemoShowcase() {
  const [demo, setDemo] = useState<(typeof demos)[number]["key"]>("wine");
  const active = demos.find((item) => item.key === demo) ?? demos[0];
  return (
    <section className="reveal border-y border-line bg-card">
      <div className="mx-auto max-w-[1200px] px-5 py-[clamp(56px,7vw,96px)] sm:px-8 lg:px-12">
        <SectionHeading kicker="How it could look" title="Seven directions, drawn for this page." body="Seven directions, invented businesses rather than clients. Switch between them." />
        <div className="my-7 flex flex-wrap gap-2">{demos.map((item) => <button key={item.key} onClick={() => setDemo(item.key)} className={`min-h-11 cursor-pointer rounded-full border border-line px-[18px] text-sm font-medium ${demo === item.key ? "bg-inverse text-on-inverse" : "bg-transparent text-ink"}`}>{item.label}</button>)}</div>
        <div className="overflow-hidden rounded-[14px] border border-line shadow-[var(--shadow-md)]">
          <div className="flex items-center gap-2 border-b border-line bg-page px-4 py-3"><span className="h-[9px] w-[9px] rounded-full bg-line" /><span className="h-[9px] w-[9px] rounded-full bg-line" /><span className="h-[9px] w-[9px] rounded-full bg-line" /><span className="ml-3 rounded-full border border-line bg-card px-3.5 py-1 font-mono text-[12.5px] text-muted">{active.url}</span></div>
          <DemoFrame demo={demo} />
        </div>
      </div>
    </section>
  );
}

function CapabilitySection({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  const [active, setActive] = useState(0);
  const item = capabilities[active];
  const positions = [[50, 8], [86.4, 29], [86.4, 71], [50, 92], [13.6, 71], [13.6, 29]];
  const durations = [7, 8, 9, 7.5, 8.5, 9.5];
  return (
    <section className="reveal bg-[#0E1317] text-[#F5F2EC]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 py-[clamp(56px,8vw,112px)] sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <SectionHeading inverse kicker="What we do" title="Six capabilities, one team around them." body="Hover any of the six. The same people scope, build, launch and maintain all of it." />
          <div className="mt-8 min-h-[190px] border-l-[3px] bg-white/[0.04] p-6" style={{ borderColor: item.color }}><p className="font-mono text-[12.5px] uppercase tracking-[0.06em]" style={{ color: item.color }}>{item.kicker}</p><h3 className="mt-2 font-display text-[25px] font-medium">{item.title}</h3><p className="mt-2.5 text-sm leading-[1.6] text-white/80">{item.desc}</p></div>
          <button onClick={() => onNavigate("services")} className="mt-6 cursor-pointer border-0 bg-transparent p-0 font-medium text-[#E8A22B]">Everything we do, in detail</button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:relative lg:mx-auto lg:aspect-square lg:w-[min(100%,440px)] lg:grid-cols-none">
          <svg viewBox="0 0 100 100" aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
            <g className="origin-center animate-[lum-spin_90s_linear_infinite]">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(245,242,236,0.14)" strokeWidth="0.25" strokeDasharray="1.6 2.4" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(245,242,236,0.08)" strokeWidth="0.25" />
            </g>
          </svg>
          <svg viewBox="0 0 100 100" aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
            {positions.map(([x, y], index) => <line key={`${x}-${y}`} x1="50" y1="50" x2={x} y2={y} stroke={`${capabilities[index].color}${active === index ? "88" : "47"}`} strokeWidth={active === index ? "0.5" : "0.3"} className="transition-all duration-300" />)}
          </svg>
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#151B20] lg:grid"><Logo compact inverse /></div>
          {capabilities.map((capability, index) => <button key={capability.title} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => onNavigate("services")} className={`capability-orbit flex min-h-[92px] cursor-pointer flex-col items-center justify-center rounded-[14px] border bg-[#151B20] p-2 text-center text-sm font-medium text-[#F5F2EC] transition-[border-color,background,box-shadow] duration-200 lg:absolute lg:w-28 lg:-translate-x-1/2 lg:-translate-y-1/2 ${active === index ? "shadow-[0_0_0_3px_rgba(245,242,236,0.04)]" : ""}`} style={{ borderColor: active === index ? capability.color : `${capability.color}73`, background: active === index ? `${capability.color}24` : "#151B20", left: `${positions[index][0]}%`, top: `${positions[index][1]}%`, animationDuration: `${durations[index]}s` }}><Icon name={capability.icon} className="text-[24px]" /><span className="mt-1.5">{capability.title}</span></button>)}
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
        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:relative lg:min-h-[clamp(480px,50vw,620px)] lg:block lg:overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[min(96%,760px)] -translate-x-1/2 -translate-y-1/2 lg:block">
            <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 h-full w-full">
              <g className="origin-center animate-[lum-spin_120s_linear_infinite]"><circle cx="50" cy="50" r="46" fill="none" stroke="rgba(245,242,236,0.07)" strokeWidth="0.2" strokeDasharray="1.4 3" /><circle cx="50" cy="50" r="33" fill="none" stroke="rgba(232,162,43,0.12)" strokeWidth="0.2" strokeDasharray="0.8 4" /></g>
              <g className="origin-center animate-[lum-spin-reverse_70s_linear_infinite]"><circle cx="50" cy="50" r="20" fill="none" stroke="rgba(245,242,236,0.09)" strokeWidth="0.2" strokeDasharray="2 5" /></g>
              <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(232,162,43,0.14)" strokeWidth="0.15" /><circle cx="50" cy="50" r="42" fill="none" stroke="rgba(232,162,43,0.08)" strokeWidth="0.15" />
            </svg>
            <div className="absolute left-1/2 top-1/2 aspect-square w-[56%] -translate-x-1/2 -translate-y-1/2 animate-[lum-breathe_9s_ease-in-out_infinite] rounded-full bg-[radial-gradient(closest-side,rgba(232,162,43,0.12),rgba(232,162,43,0))]" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-[clamp(120px,13vw,190px)] right-[clamp(120px,13vw,190px)] hidden lg:block"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">{positioned.map((item) => <line key={item.label} x1="50" y1="50" x2={item.left} y2={item.top} stroke={`${item.color}${item.inner ? "66" : "33"}`} strokeWidth={item.inner ? "0.3" : "0.16"} vectorEffect="non-scaling-stroke" />)}</svg></div>
          <div className="absolute left-1/2 top-1/2 z-[2] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-amber/45 bg-[#151B20] shadow-[0_0_0_16px_rgba(232,162,43,0.05)] lg:grid"><span className="text-center"><span className="block font-mono text-[31px] leading-none text-[#E8A22B]"><AnimatedNumber value={10} /></span><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-white/60">years</span></span></div>
          <div className="col-span-full grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:absolute lg:inset-y-0 lg:left-[clamp(120px,13vw,190px)] lg:right-[clamp(120px,13vw,190px)] lg:block">{positioned.map((item, index) => <button key={item.label} onClick={() => onNavigate(index % 3 === 0 ? "work" : "services")} className={`experience-node flex min-h-[52px] cursor-pointer items-center gap-2 rounded-xl border bg-[#151B20] p-3 text-left text-sm transition hover:bg-[#20272E] hover:text-white lg:absolute lg:min-h-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:whitespace-nowrap lg:rounded-full lg:px-[15px] lg:py-2.5 ${item.inner ? "text-white/95" : "text-white/70"}`} style={{ borderColor: `${item.color}55`, left: `${item.left}%`, top: `${item.top}%`, animationDuration: `${7 + (index % 4)}s`, animationDelay: `${(index % 5) * 0.4}s` }}><Icon name={item.icon} className={item.inner ? "text-xl" : "text-lg"} /><span>{item.label}</span></button>)}</div>
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
        <div className="relative mx-auto max-w-[1200px] px-5 py-[clamp(72px,11vw,144px)] sm:px-8 lg:px-12">
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
