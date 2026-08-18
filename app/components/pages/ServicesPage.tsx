"use client";

import { serviceGroups, type PageKey } from "../../data/site";
import { Icon } from "../Icon";
import { PageHero } from "../PageHero";
import { Action, CheckList } from "../ui";

type Props = { onNavigate: (page: PageKey) => void };

export function ServicesPage({ onNavigate }: Props) {
  return (
    <div>
      <PageHero kicker="Services" title="What we do, and who does it" body="Grouped by the outcome you are buying. Everything listed here is work we have done, not work we would be willing to try.">
        <div className="mt-8 flex flex-wrap gap-2">
          {serviceGroups.map((service) => (
            <button key={service.short} onClick={() => document.getElementById(service.short.replaceAll(" ", "-"))?.scrollIntoView({ behavior: "smooth", block: "center" })} className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border bg-transparent px-4 text-sm text-[#F5F2EC]/85 transition hover:text-[#F5F2EC]" style={{ borderColor: `${service.bright}55` }}>
              <Icon name={service.icon} className="text-[18px]" />
              {service.short}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="reveal mx-auto max-w-[1200px] px-5 py-[clamp(48px,7vw,96px)] sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {serviceGroups.map((service) => (
            <article id={service.short.replaceAll(" ", "-")} key={service.title} className="cut-card card-lift flex scroll-mt-28 flex-col rounded-[18px] border border-line bg-card p-7">
              <div className="flex items-center gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: `${service.color}1A`, color: service.color }}><Icon name={service.icon} /></span>
                <h2 className="font-display text-[25px] font-medium leading-[1.2]">{service.title}</h2>
              </div>
              <p className="my-5 text-sm leading-[1.65] text-muted">{service.body}</p>
              <div style={{ color: service.color }}><CheckList items={service.items} compact /></div>
              <button onClick={() => onNavigate("work")} className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 border-0 bg-transparent p-0 font-medium" style={{ color: service.color }}>
                See related work
                <Icon name="arrow_forward" className="text-[18px]" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal border-t border-line bg-card">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-5 py-[clamp(48px,7vw,96px)] sm:px-8 md:grid-cols-2 lg:px-12">
          <p className="max-w-[30ch] font-display text-[clamp(25px,3.2vw,39px)] font-medium leading-[1.15] tracking-[-0.015em]">The same people scope, build, launch and maintain the work. There is no handoff to a junior team.</p>
          <div className="flex flex-wrap gap-3">
            <Action page="work" onNavigate={onNavigate}>See the work</Action>
            <Action page="contact" onNavigate={onNavigate} variant="outline">Talk to us</Action>
          </div>
        </div>
      </section>
    </div>
  );
}
