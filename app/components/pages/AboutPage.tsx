"use client";

import { aboutPoints, locations, type PageKey } from "../../data/site";
import { AnimatedNumber } from "../AnimatedNumber";
import { Icon } from "../Icon";
import { PageHero } from "../PageHero";
import { LocationCard, Stat } from "../ui";

type Props = { onNavigate: (page: PageKey) => void };

export function AboutPage({ onNavigate }: Props) {
  return (
    <div>
      <PageHero kicker="About" title="A small senior team, not an agency with a sales layer" body="The person you talk to first is the person who writes the code, and the person who answers when something breaks a year later.">
        <div className="mt-[34px] flex flex-wrap gap-7">
          <Stat inverse value={<AnimatedNumber value={10} suffix="+" />} label="years commercial" />
          <Stat inverse value={<AnimatedNumber value={2} />} label="bases, clients worldwide" />
          <Stat inverse value={<AnimatedNumber value={7} />} label="languages shipped" />
          <Stat inverse value={<AnimatedNumber value={0} />} label="layers between you and the engineer" />
        </div>
      </PageHero>

      <section className="reveal mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-[clamp(48px,7vw,88px)] sm:px-8 md:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="grid gap-5 leading-[1.75]">
          <p>Luminetis is a small studio of senior engineers, with people in Luxembourg and Kosovo. Today that is two senior software engineers with a combined decade-plus of commercial experience, including work with UK-based companies. When a project needs more, we bring in senior people we have worked with before: software, data and AI engineers at the same level, never a junior team learning on your budget.</p>
          <p>We work with AI systems day to day, and one of us is a PhD candidate in quantum computing. That is where the name comes from: light is how you get found, and light is how quantum machines will carry information.</p>
          <p>We are based in Luxembourg and Kosovo, and we work with clients in the United States, the United Kingdom and across Europe. Time zones have never been the problem: we move our hours to overlap with yours, early or late, and we say up front which hours you will get us in.</p>
          <p>We have worked in insurance, fashion, blockchain, real estate, hospitality, medicine, reselling, e-commerce and construction. That range matters less than what it taught us: most problems are not technical, and the technical part is usually the easy half.</p>
          <p className="font-mono text-[12.5px] leading-[1.7] text-muted">Experience claim pending confirmation before publication.</p>
        </div>
        <div className="grid content-start gap-3.5">
          {aboutPoints.map((point) => (
            <div key={point.title} className="flex gap-3.5 rounded-[14px] border border-line bg-card p-5 transition hover:border-current" style={{ color: point.color }}>
              <Icon name={point.icon} className="text-[22px]" />
              <span>
                <span className="block font-display text-lg font-medium leading-[1.3] text-ink">{point.title}</span>
                <span className="mt-1.5 block text-sm leading-[1.55] text-muted">{point.body}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal border-y border-line bg-card">
        <div className="mx-auto max-w-[1200px] px-5 py-[clamp(48px,7vw,88px)] sm:px-8 lg:px-12">
          <h2 className="font-display text-[clamp(25px,3vw,31px)] font-medium">The team</h2>
          <p className="mb-7 mt-2.5 max-w-[56ch] text-muted">Two of us permanently, and a short list of senior engineers we trust when a project needs more hands. You are told who is working on your project and who to email, always.</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[{ name: "Your name", role: "Senior software engineer", focus: "Web platform, performance, infrastructure and networks. Your named contact on most builds." }, { name: "Co-founder name", role: "Senior software engineer", focus: "Data, AI systems and automation. PhD candidate in quantum computing." }].map((member, index) => (
              <article key={member.role + index} className="cut-card-reverse overflow-hidden rounded-[18px] border border-line bg-page">
                <div className="grid aspect-[4/3] place-items-center bg-[repeating-linear-gradient(135deg,var(--border-hairline)_0_1px,transparent_1px_10px)]"><Icon name="person" className="text-6xl text-muted/50" /></div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium">{member.name}</h3>
                  <p className="my-1.5 font-mono text-[12.5px] uppercase tracking-[0.06em] text-amber-text">{member.role}</p>
                  <p className="text-sm leading-[1.55] text-muted">{member.focus}</p>
                </div>
              </article>
            ))}
            <article className="flex flex-col justify-center gap-3.5 rounded-[18px] border border-dashed border-line bg-page p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber/10 text-amber-text"><Icon name="group_add" /></span>
              <h3 className="font-display text-xl font-medium">Senior people, brought in by name</h3>
              <p className="text-sm leading-[1.6] text-muted">For larger builds we add senior software, data and AI engineers we have worked with before. Same seniority, same accountability, and you are told who they are before they start.</p>
              <button onClick={() => onNavigate("contact")} className="w-fit cursor-pointer border-0 bg-transparent p-0 font-medium text-link">Talk to the team</button>
            </article>
          </div>
        </div>
      </section>

      <section className="reveal mx-auto grid max-w-[1200px] grid-cols-1 gap-5 px-5 py-[clamp(48px,7vw,88px)] sm:px-8 md:grid-cols-3 lg:px-12">
        {locations.map((location) => <LocationCard key={location.city} {...location} />)}
      </section>
    </div>
  );
}
