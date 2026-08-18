"use client";

import { useMemo, useState } from "react";
import { work, type PageKey } from "../../data/site";
import { Icon } from "../Icon";
import { PageHero } from "../PageHero";
import { Action, Stat } from "../ui";

type Props = { onNavigate: (page: PageKey) => void };

export function WorkPage({ onNavigate }: Props) {
  const [sector, setSector] = useState("All");
  const sectors = useMemo(() => ["All", ...Array.from(new Set(work.map((item) => item.sector)))], []);
  const visible = sector === "All" ? work : work.filter((item) => item.sector === sector);

  return (
    <div>
      <PageHero kicker="Work" title="Described by sector and problem" body="Most of our work is under NDA, so we describe it by sector, country, scale and problem rather than by client name. Clients in Luxembourg, Kosovo, the United Kingdom and the United States. References are available on request.">
        <div className="mt-8 flex flex-wrap gap-6"><Stat inverse value="12" label="case studies" /><Stat inverse value="9" label="sectors" /><Stat inverse value="100%" label="under NDA" /></div>
      </PageHero>

      <section className="reveal mx-auto max-w-[1200px] px-5 py-[clamp(40px,6vw,72px)] sm:px-8 lg:px-12">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {sectors.map((item) => {
            const active = item === sector;
            const meta = work.find((entry) => entry.sector === item);
            return <button key={item} onClick={() => setSector(item)} className={`flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm transition ${active ? "border-inverse bg-inverse text-on-inverse" : "border-line bg-transparent text-ink"}`}><Icon name={item === "All" ? "apps" : meta?.icon ?? "apps"} className={`text-[18px] ${active ? "text-amber" : ""}`} />{item}</button>;
          })}
        </div>
        <p aria-live="polite" className="mb-8 mt-5 font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted">{visible.length} of {work.length} studies · all under NDA · references on request</p>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {visible.map((item) => (
            <article key={`${item.title}-${item.region}`} className="cut-card card-lift relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-card p-7">
              <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: item.color }} />
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-[38px] w-[38px] place-items-center rounded-[10px]" style={{ backgroundColor: `${item.color}1A`, color: item.color }}><Icon name={item.icon} className="text-[20px]" /></span>
                <span className="font-mono text-[12.5px] leading-[1.5] text-muted">{item.sector} · {item.region} · {item.year} · {item.scale}</span>
              </div>
              <h2 className="mb-[18px] font-display text-[25px] font-medium leading-[1.25]">{item.title}</h2>
              <div className="grid gap-3 text-sm leading-[1.6]">
                <p><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted">Problem</span><br />{item.problem}</p>
                <p><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted">Approach</span><br />{item.approach}</p>
                <p><span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted">Outcome</span><br />{item.outcome}</p>
              </div>
              {item.metrics && <div className="mt-[18px] flex flex-wrap gap-2.5">{item.metrics.map((metric) => <span key={metric.label} className="rounded-[10px] border border-line bg-page px-3.5 py-2.5"><span className="block font-mono text-lg leading-[1.1]">{metric.value}</span><span className="mt-1 block text-[12.5px] text-muted">{metric.label}</span></span>)}</div>}
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-[18px]">{item.stack.split(" · ").map((stack) => <span key={stack} className="rounded-md bg-page px-2.5 py-1 font-mono text-[12.5px] text-muted">{stack}</span>)}</div>
              <p className="mt-4 font-mono text-[12.5px] text-muted">Under NDA · reference on request</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal bg-inverse text-on-inverse">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-5 py-[clamp(48px,7vw,88px)] sm:px-8 md:grid-cols-2 lg:px-12">
          <p className="max-w-[30ch] font-display text-[clamp(25px,3.2vw,39px)] font-medium leading-[1.15]">If your problem looks like one of these, we have solved it before.</p>
          <div className="flex flex-wrap gap-3"><Action page="contact" onNavigate={onNavigate}>Tell us about it</Action><Action page="services" onNavigate={onNavigate} variant="inverse">What we do</Action></div>
        </div>
      </section>
    </div>
  );
}
