"use client";

import Image from "next/image";
import { useState } from "react";
import { demos } from "../data/site";
import { Icon } from "./Icon";
import { SectionHeading } from "./ui";

type DemoKey = (typeof demos)[number]["key"];

const wineList = [
  { name: "Riesling, dry", region: "Wormeldange · Luxembourg", price: "€7 / glass" },
  { name: "Pinot noir", region: "Remich · Luxembourg", price: "€8 / glass" },
  { name: "Orange, skin contact", region: "Rahovec · Kosovo", price: "€9 / glass" },
];

const boutiquePieces = [
  { name: "No. 03 coat", price: "€340", position: "center 12%" },
  { name: "No. 05 shirt", price: "€120", position: "center 38%" },
  { name: "No. 08 trouser", price: "€180", position: "center 68%" },
  { name: "No. 11 scarf", price: "€65", position: "center 92%" },
];

const clinicFacts = [
  { label: "Walk-in hours", value: "08:00 — 10:00" },
  { label: "Languages", value: "FR · DE · LB" },
  { label: "Parking", value: "Free, 40 places" },
];

const clinicRows = [
  { label: "General consultation", value: "Today 16:20" },
  { label: "Blood test", value: "Tomorrow 08:00" },
  { label: "Dermatology", value: "Thu 11:45" },
  { label: "Directions and hours", value: "Open · 08–18" },
];

const clinicSlots = ["Today 16:20", "Today 17:05", "Tomorrow 08:00", "Thu 11:45"];

const blogPosts = [
  { kicker: "City", title: "Where the tram actually helps", tone: "#2C3A34", icon: "tram" },
  { kicker: "Food", title: "Nine kitchens open past midnight", tone: "#3A3227", icon: "restaurant" },
  { kicker: "Culture", title: "A studio inside a water tower", tone: "#26303A", icon: "photo_camera" },
  { kicker: "Business", title: "What rent looks like in 2026", tone: "#332A34", icon: "apartment" },
];

const autoServices = [
  { name: "Ceramic coating, 5 year", detail: "2 days · paint corrected first", price: "€890", icon: "shield" },
  { name: "Paint correction, two stage", detail: "1 day · swirl removal", price: "€420", icon: "auto_fix_high" },
  { name: "Interior deep clean", detail: "4 hours · steam and extraction", price: "€180", icon: "cleaning_services" },
];

const agentStats = [
  { label: "Handled without a human", value: "82%" },
  { label: "Median first reply", value: "4s" },
  { label: "Answers with a cited source", value: "100%" },
];

const agentChat = [
  { who: "Customer", text: "Do you have the M12 bolt in stock for tomorrow?", mine: false },
  { who: "Agent", text: "Yes — 340 in the Ettelbruck warehouse. Next-day to site if you order before 16:00. Shall I reserve 50?", mine: true },
  { who: "Customer", text: "Reserve 50 and send the invoice to accounts.", mine: false },
  { who: "Agent", text: "Reserved. Invoice LU-4821 sent to accounts@ferrumsupply.lu, delivery Thursday 08:00.", mine: true },
];

const shopItems = [
  { name: "Hex bolt, M12 × 80", sku: "FS-1208-Z", price: "€0.84", position: "center 10%" },
  { name: "Anchor sleeve, 10 mm", sku: "AN-1000-S", price: "€1.20", position: "center 36%" },
  { name: "Washer, DIN 125", sku: "WS-0125-A", price: "€0.09", position: "center 66%" },
  { name: "Threaded rod, 1 m", sku: "TR-1000-M", price: "€3.40", position: "center 94%" },
];

function DemoHeader({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`flex min-h-[68px] items-center gap-5 border-b px-[clamp(20px,3vw,40px)] py-[18px] ${dark ? "border-white/15" : "border-black/10"}`}>{children}</div>;
}

function WineDemo() {
  return (
    <div className="bg-[#FBF7F0] text-[#221A17]">
      <DemoHeader>
        <span className="font-display text-xl font-medium tracking-[0.22em]">VINERA</span>
        <span className="hidden gap-[22px] text-sm text-[#221A17]/70 md:flex"><span>Wine list</span><span>Kitchen</span><span>Events</span><span>Find us</span></span>
        <span className="ml-auto rounded-full bg-[#7A2233] px-[18px] py-2.5 text-sm font-medium text-[#FBF7F0]">Book a table</span>
      </DemoHeader>
      <div className="grid grid-cols-1 min-[760px]:grid-cols-2">
        <div className="p-[clamp(28px,4vw,56px)]">
          <p className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#7A2233]">Open until 01:00 · Luxembourg-Gare</p>
          <h3 className="mt-5 max-w-[18ch] font-display text-[clamp(31px,4vw,49px)] font-normal leading-[1.02] tracking-[-0.02em]">Forty wines by the glass, two streets from the station.</h3>
          <p className="mt-[18px] max-w-[34ch] leading-[1.6] text-[#221A17]/70">Small plates until midnight. Walk in, or hold a table for two minutes past closing.</p>
          <div className="mt-8 flex flex-wrap gap-2.5"><span className="rounded-full bg-[#221A17] px-[22px] py-[13px] text-sm font-medium text-[#FBF7F0]">Reserve for tonight</span><span className="rounded-full border border-[#221A17]/25 px-[22px] py-[13px] text-sm">See the list</span></div>
        </div>
        <div className="relative min-h-[300px] overflow-hidden bg-[#2A1418]">
          <Image src="/demo/wine-bar.webp" alt="Wine glasses on a warmly lit bar" fill sizes="(min-width: 760px) 50vw, 100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A1418]/80 via-[#2A1418]/10 to-transparent" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(251,247,240,0.04)_0_2px,transparent_2px_26px)]" />
          <p className="absolute bottom-4 left-5 font-mono text-[12.5px] uppercase tracking-[0.1em] text-[#E8A22B]/80">Forty by the glass</p>
        </div>
      </div>
      <div className="grid gap-px border-t border-[#221A17]/10 bg-[#221A17]/10 sm:grid-cols-3">
        {wineList.map((item) => <div key={item.name} className="bg-[#FBF7F0] px-[clamp(20px,3vw,40px)] py-6"><p className="font-display text-xl font-medium leading-[1.3]">{item.name}</p><p className="mt-1.5 text-sm text-[#221A17]/60">{item.region}</p><p className="mt-2.5 font-mono text-sm text-[#7A2233]">{item.price}</p></div>)}
      </div>
    </div>
  );
}

function BoutiqueDemo() {
  return (
    <div className="bg-[#0B0B0C] text-[#F2F0EC]">
      <DemoHeader dark>
        <span className="font-mono text-[12.5px] uppercase tracking-[0.34em]">Atelier Mira</span>
        <span className="hidden gap-[22px] font-mono text-[12.5px] uppercase tracking-[0.1em] text-[#F2F0EC]/60 md:flex"><span>New in</span><span>Atelier</span><span>Stockists</span></span>
        <span className="ml-auto font-mono text-[12.5px] uppercase tracking-[0.1em]">Bag (0)</span>
      </DemoHeader>
      <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden p-[clamp(28px,4vw,56px)]">
        <Image src="/demo/boutique.webp" alt="Neutral garments displayed in a minimalist boutique" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/95 via-[#0B0B0C]/60 to-[#0B0B0C]/10" />
        <div className="demo-sheen absolute inset-y-0 w-[26%] bg-gradient-to-r from-transparent via-[#F2F0EC]/10 to-transparent" />
        <span className="absolute right-[22px] top-[22px] font-mono text-[12.5px] text-[#F2F0EC]/45">Autumn 26 · look 04</span>
        <h3 className="relative max-w-[16ch] font-display text-[clamp(34px,5.2vw,61px)] font-normal leading-[0.98] tracking-[-0.03em]">Autumn, in eleven pieces.</h3>
        <p className="relative mt-3.5 max-w-[32ch] leading-[1.6] text-[#F2F0EC]/70">Cut and sewn in Pristina. Numbered, not restocked.</p>
        <span className="relative mt-[26px] self-start border border-[#F2F0EC] px-6 py-[13px] font-mono text-[12.5px] uppercase tracking-[0.14em]">View the collection</span>
      </div>
      <div className="grid gap-px bg-[#F2F0EC]/15 sm:grid-cols-2 lg:grid-cols-4">
        {boutiquePieces.map((item) => <div key={item.name} className="bg-[#0B0B0C]"><div className="relative aspect-[4/5] overflow-hidden bg-[#15161A]"><Image src="/demo/boutique.webp" alt={`${item.name} from the Atelier Mira collection`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" style={{ objectPosition: item.position }} /><div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/45 to-transparent" /></div><div className="flex justify-between gap-2.5 px-4 py-3.5 font-mono text-[12.5px]"><span>{item.name}</span><span className="text-[#F2F0EC]/60">{item.price}</span></div></div>)}
      </div>
    </div>
  );
}

function ClinicDemo() {
  return (
    <div className="bg-white text-[#10211F]">
      <DemoHeader>
        <span className="flex items-center gap-2.5"><span className="h-[22px] w-[22px] rounded-md bg-[#0F6E63]" /><span className="font-display text-lg font-medium">Clinique Nord</span></span>
        <span className="hidden gap-[22px] text-sm text-[#10211F]/65 md:flex"><span>Services</span><span>Team</span><span>Insurance</span></span>
        <span className="ml-auto flex items-center gap-3"><span className="hidden font-mono text-[12.5px] text-[#10211F]/60 lg:inline">+352 •• •• •• ••</span><span className="rounded-lg bg-[#0F6E63] px-[18px] py-2.5 text-sm font-medium text-white">Book online</span></span>
      </DemoHeader>
      <div className="grid grid-cols-1 gap-[clamp(24px,4vw,48px)] p-[clamp(28px,4vw,56px)] min-[760px]:grid-cols-2">
        <div>
          <p className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#0F6E63]">Ettelbruck · open 08—18</p>
          <h3 className="mt-[18px] max-w-[18ch] font-display text-[clamp(31px,3.8vw,44px)] font-medium leading-[1.05] tracking-[-0.02em]">An appointment, in three taps.</h3>
          <p className="mt-4 max-w-[34ch] leading-[1.6] text-[#10211F]/70">Pick a service, pick a time, get a confirmation. In French, German and Luxembourgish.</p>
          <div className="mt-7 grid gap-px overflow-hidden rounded-[10px] border border-[#10211F]/10 bg-[#10211F]/10">{clinicFacts.map((fact) => <div key={fact.label} className="flex justify-between gap-3 bg-white px-4 py-3.5 text-sm"><span className="text-[#10211F]/60">{fact.label}</span><span className="font-mono text-[12.5px]">{fact.value}</span></div>)}</div>
        </div>
        <div className="rounded-[14px] border border-[#10211F]/10 p-6 shadow-[0_12px_32px_rgba(16,33,31,0.08)]">
          <p className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#10211F]/55">Book an appointment</p>
          <div className="mt-4 grid gap-2.5">{clinicRows.map((row) => <div key={row.label} className="flex items-center justify-between gap-3 rounded-[10px] border border-[#10211F]/10 px-4 py-[15px]"><span className="text-sm">{row.label}</span><span className="font-mono text-[12.5px] text-[#0F6E63]">{row.value}</span></div>)}</div>
          <div className="mt-4 flex flex-wrap gap-2">{clinicSlots.map((slot) => <span key={slot} className="rounded-full bg-[#0F6E63]/10 px-3.5 py-2 font-mono text-[12.5px] text-[#0F6E63]">{slot}</span>)}</div>
          <span className="mt-[18px] block rounded-lg bg-[#0F6E63] p-3.5 text-center text-sm font-medium text-white">Confirm</span>
        </div>
      </div>
    </div>
  );
}

function BlogDemo() {
  return (
    <div className="bg-[#FFFDF9] text-[#151312]">
      <DemoHeader>
        <span className="font-display text-[22px] font-medium tracking-[-0.01em]">Le Courant</span>
        <span className="hidden gap-5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#151312]/60 md:flex"><span>Culture</span><span>Food</span><span>City</span></span>
        <span className="ml-auto rounded-lg bg-[#151312] px-[18px] py-2.5 text-sm font-medium text-[#FFFDF9]">Subscribe</span>
      </DemoHeader>
      <div className="grid grid-cols-1 gap-[clamp(20px,3vw,40px)] p-[clamp(28px,4vw,48px)] min-[760px]:grid-cols-2">
        <div><div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#20302B]"><Image src="/demo/vineyard.webp" alt="Rows of grapevines stretching across a green vineyard" fill sizes="(min-width: 760px) 50vw, 100vw" className="object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-b from-[#10211F]/45 via-transparent to-[#10211F]/20" /><p className="absolute left-[18px] top-4 font-mono text-[12.5px] uppercase tracking-[0.1em] text-white/90">Vineyards · Moselle 2026</p></div><p className="mt-[18px] font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#0F6E63]">Long read · 12 min</p><h3 className="mt-2 max-w-[22ch] font-display text-[clamp(25px,3vw,34px)] font-medium leading-[1.1] tracking-[-0.015em]">The last vineyards on the Moselle bend</h3><p className="mt-2.5 max-w-[44ch] text-[#151312]/65">Six growers, one slope, and the year the weather stopped being predictable.</p></div>
        <div className="grid content-start gap-0.5">{blogPosts.map((post) => <div key={post.title} className="flex gap-3.5 border-t border-[#151312]/10 py-4"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg" style={{ background: post.tone }}><Icon name={post.icon} className="text-[26px] text-[#FFFDF9]/90" /></span><span><span className="block font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#151312]/50">{post.kicker}</span><span className="mt-1 block font-display text-lg font-medium leading-[1.25]">{post.title}</span></span></div>)}</div>
      </div>
    </div>
  );
}

function AutoDemo() {
  return (
    <div className="bg-[#0A0D10] text-[#EAF0F4]">
      <DemoHeader dark><span className="flex items-center gap-2.5"><Icon name="local_car_wash" className="text-2xl text-[#5AC8F5]" /><span className="font-display text-[19px] font-medium tracking-[0.02em]">AutoWaxon</span></span><span className="hidden gap-5 text-sm text-[#EAF0F4]/65 md:flex"><span>Detailing</span><span>Ceramic</span><span>Gallery</span></span><span className="ml-auto rounded-full bg-[#5AC8F5] px-[18px] py-2.5 text-sm font-medium text-[#06212E]">Book a slot</span></DemoHeader>
      <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden p-[clamp(28px,4vw,56px)]"><Image src="/demo/auto-detailing.webp" alt="A professional detailer polishing a black car" fill sizes="100vw" className="object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-r from-[#0A0D10]/95 via-[#0A0D10]/65 to-[#0A0D10]/15" /><div className="demo-sheen absolute inset-y-0 w-[22%] bg-gradient-to-r from-transparent via-[#EAF0F4]/15 to-transparent" /><p className="relative font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#5AC8F5]">Detailing studio · Luxembourg</p><h3 className="relative mt-4 max-w-[18ch] font-display text-[clamp(31px,4.4vw,49px)] font-medium leading-[1.02] tracking-[-0.02em]">Paint that looks better than the day it left the factory.</h3><p className="relative mt-3.5 max-w-[36ch] leading-[1.6] text-[#EAF0F4]/75">Correction, ceramic coating and interior work. Collection and delivery inside the city.</p></div>
      <div className="grid gap-px border-t border-[#EAF0F4]/10 bg-[#EAF0F4]/10 min-[720px]:grid-cols-3">{autoServices.map((service) => <div key={service.name} className="flex gap-3.5 bg-[#0A0D10] px-[clamp(18px,2vw,26px)] py-[22px]"><Icon name={service.icon} className="text-2xl text-[#5AC8F5]" /><span className="flex-1"><span className="block font-display text-lg font-medium leading-[1.3]">{service.name}</span><span className="mt-1 block text-sm text-[#EAF0F4]/60">{service.detail}</span><span className="mt-2.5 block font-mono">{service.price}</span></span></div>)}</div>
    </div>
  );
}

function AgentDemo() {
  return (
    <div className="bg-[#0C0A14] text-[#EFEBF7]">
      <DemoHeader dark><span className="flex items-center gap-2.5"><Icon name="smart_toy" className="text-2xl text-[#C08BE0]" /><span className="font-display text-[19px] font-medium">Orbit Agents</span></span><span className="hidden gap-5 text-sm text-[#EFEBF7]/60 md:flex"><span>How it works</span><span>Integrations</span><span>Pricing</span></span><span className="ml-auto rounded-lg bg-[#C08BE0] px-[18px] py-2.5 text-sm font-medium text-[#170F22]">See a demo</span></DemoHeader>
      <div className="grid grid-cols-1 gap-[clamp(24px,4vw,44px)] p-[clamp(28px,4vw,52px)] min-[760px]:grid-cols-2">
        <div><p className="font-mono text-[12.5px] uppercase tracking-[0.08em] text-[#C08BE0]">AI agents for small teams</p><h3 className="mt-4 max-w-[20ch] font-display text-[clamp(31px,4vw,44px)] font-medium leading-[1.04] tracking-[-0.02em]">An agent that answers, checks stock, and books the job.</h3><p className="mt-4 max-w-[36ch] leading-[1.6] text-[#EFEBF7]/75">It reads your catalogue, your calendar and your inbox. When it does not know, it says so and hands over.</p><div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#EFEBF7]/10 bg-[#EFEBF7]/10">{agentStats.map((stat) => <div key={stat.label} className="flex justify-between gap-3 bg-[#0C0A14] px-4 py-3.5"><span className="text-sm text-[#EFEBF7]/65">{stat.label}</span><span className="font-mono text-sm text-[#C08BE0]">{stat.value}</span></div>)}</div></div>
        <div className="relative overflow-hidden rounded-2xl border border-[#EFEBF7]/15 bg-[#140F1E] p-[22px]"><div className="absolute -right-[18%] -top-[24%] aspect-square w-[60%] rounded-full bg-[radial-gradient(closest-side,rgba(192,139,224,0.32),rgba(192,139,224,0))]" /><div className="relative mb-[18px] flex items-center gap-2.5"><span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#C08BE0]/20"><Icon name="smart_toy" className="text-xl text-[#C08BE0]" /></span><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#EFEBF7]/60">Live conversation</span><span className="ml-auto flex items-center gap-1.5 font-mono text-[12.5px] text-[#8FC46B]"><span className="h-[7px] w-[7px] rounded-full bg-[#8FC46B]" />online</span></div><div className="relative grid gap-3">{agentChat.map((message) => <div key={message.text} className={`flex max-w-[94%] gap-2.5 ${message.mine ? "justify-self-end flex-row-reverse" : "justify-self-start"}`}><span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${message.mine ? "bg-[#C08BE0]/20 text-[#C08BE0]" : "bg-[#EFEBF7]/10 text-[#EFEBF7]/70"}`}><Icon name={message.mine ? "smart_toy" : "person"} className="text-[17px]" /></span><span className={`rounded-[14px] border px-3.5 py-3 ${message.mine ? "border-[#C08BE0]/40 bg-[#C08BE0]/15" : "border-[#EFEBF7]/10 bg-[#EFEBF7]/5"}`}><span className="block font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#EFEBF7]/50">{message.who}</span><span className="mt-1.5 block text-sm leading-[1.5]">{message.text}</span></span></div>)}<div className="flex items-center gap-2 justify-self-end rounded-[14px] border border-[#C08BE0]/30 bg-[#C08BE0]/15 px-3.5 py-2.5"><span className="demo-fade h-1.5 w-1.5 rounded-full bg-[#C08BE0]" /><span className="demo-fade h-1.5 w-1.5 rounded-full bg-[#C08BE0] [animation-delay:0.2s]" /><span className="demo-fade h-1.5 w-1.5 rounded-full bg-[#C08BE0] [animation-delay:0.4s]" /><span className="ml-1.5 font-mono text-[12.5px] text-[#EFEBF7]/60">drafting the delivery note</span></div></div></div>
      </div>
    </div>
  );
}

function ShopDemo() {
  return (
    <div className="bg-[#F6F7F9] text-[#131A22]">
      <DemoHeader><span className="font-display text-[19px] font-medium">Ferrum Supply</span><span className="hidden max-w-80 flex-1 items-center gap-2 rounded-full bg-[#F1F3F6] px-3.5 py-2 font-mono text-[12.5px] text-[#131A22]/50 sm:flex"><Icon name="search" className="text-base" />Search 4,200 parts</span><span className="ml-auto flex items-center gap-4 font-mono text-[12.5px]"><span className="hidden sm:inline">Trade account</span><span className="flex items-center gap-1.5 rounded-lg bg-[#2F6D9E] px-3.5 py-2 text-white"><Icon name="shopping_bag" className="text-base" />3</span></span></DemoHeader>
      <div className="p-[clamp(24px,4vw,44px)]"><div className="mb-5 flex flex-wrap items-baseline justify-between gap-3"><h3 className="font-display text-[clamp(25px,3vw,31px)] font-medium leading-[1.15]">Fixings and fasteners</h3><span className="font-mono text-[12.5px] text-[#131A22]/55">4,200 lines · next-day to site</span></div><div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">{shopItems.map((item) => <div key={item.name} className="overflow-hidden rounded-xl border border-[#131A22]/10 bg-white"><div className="relative aspect-[4/3] overflow-hidden bg-[#E7EAEE]"><Image src="/demo/fasteners.webp" alt={`${item.name} industrial hardware`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" style={{ objectPosition: item.position }} /><div className="absolute inset-0 bg-[#2F6D9E]/10" /></div><div className="p-3.5"><p className="text-sm font-medium leading-[1.35]">{item.name}</p><p className="mt-1.5 font-mono text-[12.5px] text-[#131A22]/55">{item.sku}</p><p className="mt-2.5 flex items-center justify-between gap-2.5"><span className="font-mono">{item.price}</span><span className="rounded-lg bg-[#2F6D9E] px-3 py-2 text-[12.5px] font-medium text-white">Add</span></p></div></div>)}</div></div>
    </div>
  );
}

function DemoFrame({ demo }: { demo: DemoKey }) {
  if (demo === "boutique") return <BoutiqueDemo />;
  if (demo === "clinic") return <ClinicDemo />;
  if (demo === "blog") return <BlogDemo />;
  if (demo === "auto") return <AutoDemo />;
  if (demo === "agent") return <AgentDemo />;
  if (demo === "shop") return <ShopDemo />;
  return <WineDemo />;
}

export function DemoShowcase() {
  const [demo, setDemo] = useState<DemoKey>("wine");
  const active = demos.find((item) => item.key === demo) ?? demos[0];
  return (
    <section className="reveal border-y border-line bg-card">
      <div className="mx-auto max-w-[1200px] px-5 py-[clamp(56px,7vw,96px)] sm:px-8 lg:px-12">
        <SectionHeading kicker="How it could look" title="Seven directions, drawn for this page." body="Seven directions, invented businesses rather than clients. Switch between them." />
        <div className="my-7 flex flex-wrap gap-2">{demos.map((item) => <button key={item.key} onClick={() => setDemo(item.key)} className={`min-h-11 cursor-pointer rounded-full border border-line px-[18px] text-sm font-medium ${demo === item.key ? "bg-inverse text-on-inverse" : "bg-transparent text-ink"}`}>{item.label}</button>)}</div>
        <div className="overflow-hidden rounded-[14px] border border-line shadow-[var(--shadow-md)]">
          <div className="flex items-center gap-2 border-b border-line bg-page px-4 py-3"><span className="h-[9px] w-[9px] rounded-full bg-line" /><span className="h-[9px] w-[9px] rounded-full bg-line" /><span className="h-[9px] w-[9px] rounded-full bg-line" /><span className="ml-3 max-w-[calc(100%-72px)] overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-line bg-card px-3.5 py-1 font-mono text-[12.5px] text-muted">{active.url}</span></div>
          <DemoFrame demo={demo} />
        </div>
      </div>
    </section>
  );
}
