"use client";

import { useState } from "react";
import { addOns, faqs, plans, prices, tierDefinitions, type PageKey, type RegionKey } from "../../data/site";
import { Icon } from "../Icon";
import { PageHero } from "../PageHero";
import { Action, CheckList } from "../ui";

type Props = {
  region: RegionKey;
  onRegion: (region: RegionKey) => void;
  onNavigate: (page: PageKey) => void;
};

function PriceSwitch({ region, onRegion, inverse = false }: { region: RegionKey; onRegion: (region: RegionKey) => void; inverse?: boolean }) {
  return (
    <div className={`flex gap-1.5 rounded-full border p-1 ${inverse ? "border-white/20" : "border-line"}`}>
      {(["eu", "balkans"] as RegionKey[]).map((item) => (
        <button key={item} onClick={() => onRegion(item)} className={`min-h-10 cursor-pointer rounded-full border-0 px-4 font-mono text-[12.5px] uppercase tracking-[0.06em] transition ${region === item ? "bg-amber text-on-amber" : inverse ? "bg-transparent text-[#F5F2EC]/65" : "bg-transparent text-muted"}`}>
          {item === "eu" ? "EU list" : "Balkans list"}
        </button>
      ))}
    </div>
  );
}

export function PackagesPage({ region, onRegion, onNavigate }: Props) {
  const [openFaq, setOpenFaq] = useState(0);
  const money = (value: number) => `€${value.toLocaleString("en-GB")}`;

  return (
    <div>
      <PageHero kicker="Packages" title="One build fee, then the plan that keeps you found" body="The build is a one-off. The plan keeps the site alive and, on Found, keeps you on the map. A build requires an active Care plan; Found is optional and is what we recommend.">
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <PriceSwitch region={region} onRegion={onRegion} inverse />
          <span className="font-mono text-[12.5px] text-[#F5F2EC]/60">Showing the {region === "eu" ? "EU" : "Balkans"} list · EUR · VAT treatment pending confirmation.</span>
        </div>
      </PageHero>

      <section className="reveal mx-auto max-w-[1200px] px-5 py-[clamp(48px,7vw,88px)] sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
          {tierDefinitions.map((tier) => {
            const value = prices[tier.key][region];
            const monthly = tier.key === "custom" ? "quoted per project" : `then Care from ${money(prices.care[region])} / month${tier.key === "growth" ? " · Found recommended" : ""}`;
            return (
              <article key={tier.key} className={`cut-card card-lift relative flex min-h-full flex-col overflow-hidden rounded-[18px] border p-[30px] ${tier.recommended ? "border-amber/35 bg-[#0E1317] text-[#F5F2EC]" : "border-line bg-card text-ink"}`}>
                <div className="pointer-events-none absolute -right-[30%] -top-[40%] h-[80%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(232,162,43,0.25),rgba(232,162,43,0))]" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <Icon name={tier.icon} className={`text-[24px] ${tier.recommended ? "text-[#E8A22B]" : "text-amber-text"}`} />
                    <h2 className="font-display text-[25px] font-medium leading-[1.2]">{tier.name}</h2>
                    {tier.recommended && <span className="ml-auto rounded-full bg-amber px-2.5 py-1 font-mono text-[12.5px] uppercase tracking-[0.06em] text-on-amber">Recommended</span>}
                  </div>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="font-mono text-[12.5px] opacity-70">{tier.prefix}</span>
                    <span className="font-mono text-[clamp(34px,4.4vw,49px)] leading-none">{money(value)}</span>
                  </p>
                  <p className="mb-[22px] mt-2 font-mono text-[12.5px] uppercase tracking-[0.06em] opacity-65">{monthly}</p>
                  <p className="mb-5 text-sm leading-[1.55] opacity-85">{tier.who}</p>
                  <div className={`mb-[26px] border-t pt-5 ${tier.recommended ? "border-white/15 text-[#E8A22B]" : "border-line text-amber-text"}`}><CheckList items={tier.items} /></div>
                  <div className="mt-auto"><Action page="contact" onNavigate={onNavigate} variant={tier.recommended ? "primary" : "outline"} icon="arrow_forward">{tier.cta}</Action></div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.name} className="cut-card-reverse rounded-[18px] border border-line bg-card p-7">
              <div className="flex flex-wrap items-center gap-3.5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber/10 text-amber-text"><Icon name={plan.icon} /></span>
                <h2 className="font-display text-[25px] font-medium">{plan.name}</h2>
                <span className="ml-auto font-mono text-xl sm:text-[25px]">{money(prices[plan.key][region])} / month</span>
              </div>
              <p className="my-5 text-sm leading-[1.6] text-muted">{plan.summary}</p>
              <ul className="grid list-none p-0">
                {plan.items.map((item) => <li key={item} className="flex gap-2.5 border-t border-line py-2.5 text-sm"><Icon name="check_small" className="text-[18px] text-amber-text" /><span>{item}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal border-y border-line bg-card">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-[clamp(48px,7vw,88px)] sm:px-8 md:grid-cols-2 lg:px-12">
          <div>
            <h2 className="mb-5 font-display text-[clamp(25px,3vw,31px)] font-medium">Add-ons</h2>
            {addOns.map((item) => <div key={item.label} className="flex flex-wrap justify-between gap-3 border-t border-line py-3.5 text-sm"><span>{item.label}</span><span className="font-mono text-amber-text">{money(item[region])} {item.unit}</span></div>)}
          </div>
          <div className="grid content-start gap-5">
            <div className="rounded-[18px] border border-line bg-page p-[26px]">
              <h2 className="mb-4 font-display text-xl font-medium">In every package</h2>
              <div className="text-link"><CheckList items={["You own the code, the domain and every account", "No lock-in, leave whenever you want and take everything", "Fixed price means fixed price", "Defects fixed free within the warranty window", "A named person answers you"]} /></div>
            </div>
            <div className="cut-card relative overflow-hidden rounded-[18px] bg-inverse p-[26px] text-on-inverse">
              <div className="absolute -right-[20%] -top-[30%] h-[90%] w-[60%] rounded-full bg-[radial-gradient(closest-side,rgba(192,139,224,0.22),rgba(192,139,224,0))]" />
              <div className="relative">
                <h2 className="mb-3.5 flex items-center gap-3 font-display text-xl font-medium text-amber-text"><Icon name="hub" className="text-[22px]" />The quantum commitment</h2>
                <p className="text-sm leading-[1.65] opacity-90">When quantum-backed services become something we can offer in production, clients on an active care plan get their existing services migrated with no additional build fee. Running costs remain separate and are stated in advance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-[1200px] px-5 py-[clamp(48px,7vw,88px)] sm:px-8 lg:px-12">
        <h2 className="mb-7 font-display text-[clamp(25px,3vw,31px)] font-medium">Questions we get on every call</h2>
        <div className="grid gap-2.5">
          {faqs.map((faq, index) => (
            <div key={faq.q} className={`rounded-[14px] border transition ${openFaq === index ? "border-amber bg-card" : "border-line bg-transparent"}`}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index} className="flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-5 py-4 text-left font-display text-xl font-medium text-ink">
                <span>{faq.q}</span>
                <Icon name={openFaq === index ? "expand_less" : "expand_more"} className="text-[22px] text-amber-text" />
              </button>
              {openFaq === index && <p className="max-w-[74ch] px-5 pb-5 leading-[1.65] text-muted">{faq.a}</p>}
            </div>
          ))}
        </div>
        <div className="mt-8"><Action page="contact" onNavigate={onNavigate} variant="text">Ask us anything not covered here</Action></div>
      </section>
    </div>
  );
}
