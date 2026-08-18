"use client";

import { commitments, type PageKey } from "../../data/site";
import { Icon } from "../Icon";
import { PageHero } from "../PageHero";
import { Action } from "../ui";

type Props = { onNavigate: (page: PageKey) => void };

export function CommitmentPage({ onNavigate }: Props) {
  return (
    <div>
      <PageHero kicker="Commitment" title="How we work and what we are accountable for" body="Commercial commitments, not marketing copy. Each one is worded to match our terms of service, and each one is something you can hold us to.">
        <p className="mt-7 max-w-[64ch] border-l-2 border-[#E8A22B] py-1 pl-[18px] font-mono text-[12.5px] leading-[1.7] text-[#F5F2EC]/65">The English version of this page governs in the event of any discrepancy with a translation.</p>
      </PageHero>

      <section className="reveal mx-auto max-w-[1200px] px-5 py-[clamp(48px,7vw,88px)] sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {commitments.map((commitment, index) => (
            <article key={commitment.title} className="cut-card card-lift flex gap-4 overflow-hidden rounded-[18px] border border-line bg-card p-[26px]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: `${commitment.color}1A`, color: commitment.color }}><Icon name={commitment.icon} /></span>
              <span>
                <span className="block font-mono text-[12.5px] tracking-[0.06em]" style={{ color: commitment.color }}>{String(index + 1).padStart(2, "0")}</span>
                <h2 className="my-1.5 font-display text-xl font-medium leading-[1.3]">{commitment.title}</h2>
                <p className="text-sm leading-[1.65] text-muted">{commitment.body}</p>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal bg-inverse text-on-inverse">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-5 py-[clamp(48px,7vw,88px)] sm:px-8 md:grid-cols-2 lg:px-12">
          <p className="max-w-[32ch] font-display text-[clamp(25px,3.2vw,39px)] font-medium leading-[1.15]">If we ever break one of these, tell us and we will make it right.</p>
          <div className="flex flex-wrap gap-3"><Action page="contact" onNavigate={onNavigate}>Raise something</Action><Action page="packages" onNavigate={onNavigate} variant="inverse">See the plans</Action></div>
        </div>
      </section>
    </div>
  );
}
