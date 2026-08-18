import { Kicker } from "../ui";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

function LegalDocument({ kicker, title, intro, sections }: { kicker: string; title: string; intro: string; sections: LegalSection[] }) {
  return (
    <div>
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-[980px] px-5 py-[clamp(64px,9vw,112px)] sm:px-8 lg:px-12">
          <Kicker>{kicker}</Kicker>
          <h1 className="max-w-[18ch] font-display text-[clamp(39px,6vw,61px)] font-medium leading-[1.05] tracking-[-0.02em]">{title}</h1>
          <p className="mt-6 max-w-[68ch] text-[clamp(16px,1.7vw,20px)] leading-[1.65] text-muted">{intro}</p>
          <p className="mt-7 font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted">Last updated 18 August 2026</p>
        </div>
      </section>
      <section className="mx-auto max-w-[980px] px-5 py-[clamp(48px,7vw,88px)] sm:px-8 lg:px-12">
        <div className="grid gap-10">
          {sections.map((section, index) => (
            <article key={section.title} className="grid gap-4 border-t border-line pt-7 md:grid-cols-[140px_1fr] md:gap-10">
              <p className="font-mono text-[12.5px] text-amber-text">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="font-display text-[clamp(22px,2.8vw,31px)] font-medium leading-[1.2]">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 max-w-[70ch] leading-[1.75] text-muted">{paragraph}</p>)}
                {section.items && <ul className="mt-5 grid max-w-[72ch] gap-3 pl-0">{section.items.map((item) => <li key={item} className="flex gap-3 border-b border-line pb-3"><span className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-amber" /><span className="text-muted">{item}</span></li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 border-l-[3px] border-amber bg-card p-6">
          <p className="font-display text-xl font-medium">Questions about this document?</p>
          <a href="mailto:info@luminetis.com" className="mt-3 inline-block font-mono text-[13px] text-link">info@luminetis.com</a>
        </div>
      </section>
    </div>
  );
}

const privacySections: LegalSection[] = [
  {
    title: "Who is responsible",
    paragraphs: ["Luminetis is responsible for the personal data described in this notice. We operate from Luxembourg and Kosovo and can be reached at info@luminetis.com."],
  },
  {
    title: "What we collect",
    items: [
      "Information you send to us, such as your name, email address, company, budget selection and message.",
      "Technical request data processed by our hosting infrastructure, such as IP address, browser type, requested page, time and security logs.",
      "Language, region and theme preferences stored on your device so the site opens the way you selected.",
      "Country-level information inferred from a request to choose a useful default language and regional price list. Luminetis does not retain that inference in an application profile.",
    ],
  },
  {
    title: "Why we use it",
    items: [
      "To answer enquiries, prepare a requested proposal and take steps before entering a contract.",
      "To provide and support services under a contract with you.",
      "To keep the website secure, reliable and available where our legitimate interests apply.",
      "To meet accounting, tax, legal and regulatory duties where the law requires it.",
    ],
  },
  {
    title: "Who receives it",
    paragraphs: ["We use service providers only where needed to host the site, deliver email, maintain security or operate contracted services. They may process data under our instructions. We do not sell personal data and we do not use it for third-party advertising."],
  },
  {
    title: "International transfers",
    paragraphs: ["Our work may involve Luxembourg, Kosovo and service providers in other countries. Where personal data leaves the European Economic Area, we use an available lawful transfer mechanism and appropriate safeguards for the provider and service involved."],
  },
  {
    title: "How long we keep it",
    paragraphs: ["Enquiries that do not become client work are normally deleted within 24 months. Client, contract and invoice records are kept for the period required by applicable accounting, tax and legal rules. Security logs are retained for a limited operational period. We remove or anonymise information when it is no longer needed."],
  },
  {
    title: "Cookies and device storage",
    paragraphs: ["We do not use advertising cookies. The site can store your language and theme choices on your device. Essential hosting and security technology may process request metadata needed to deliver and protect the site."],
  },
  {
    title: "Your rights",
    paragraphs: ["Depending on the circumstances, you may ask for access, correction, deletion, restriction, portability or an objection to processing. Where processing relies on consent, you may withdraw it without affecting earlier processing. You may also complain to the Luxembourg National Commission for Data Protection or the supervisory authority where you live or work."],
  },
  {
    title: "Security and changes",
    paragraphs: ["We use proportionate technical and organisational safeguards and limit access to people who need the information. No internet service can guarantee absolute security. We will update this notice when our practices or legal duties materially change and show the revision date above."],
  },
];

const termsSections: LegalSection[] = [
  {
    title: "About these terms",
    paragraphs: ["These terms govern use of luminetis.com and enquiries made through it. A website page, package description or estimate is information, not a binding offer. Client work starts under an accepted written proposal, order or statement of work, which takes priority if it conflicts with these website terms."],
  },
  {
    title: "Using the website",
    items: [
      "Use the site lawfully and do not interfere with its operation, security or other visitors.",
      "Do not submit unlawful, harmful or confidential third-party material unless you are authorised to share it.",
      "Do not copy, scrape or reuse the site in a way that infringes intellectual property or disrupts the service.",
    ],
  },
  {
    title: "Scopes, prices and changes",
    paragraphs: ["The written scope identifies deliverables, assumptions, schedule, fees, taxes and payment dates. A fixed price covers the agreed scope. Material changes are described and approved in writing before extra work begins. Published prices may change for future enquiries, but they do not change an accepted fixed-price scope."],
  },
  {
    title: "Your responsibilities",
    paragraphs: ["You provide accurate information, lawful content, timely decisions and access to the accounts or systems needed for the work. You confirm that you have permission to use materials you supply. Delays in these inputs may move the delivery date."],
  },
  {
    title: "Ownership and third-party services",
    paragraphs: ["After full payment, you receive the project deliverables and ownership described in the written scope. Your domain, repository and client accounts remain in your name. Pre-existing tools, open-source software, fonts, stock assets and third-party platforms remain subject to their own licences and terms."],
  },
  {
    title: "Launch, support and defects",
    paragraphs: ["You review deliverables and report issues with enough detail for us to reproduce them. Defects in agreed work are fixed without charge for 90 days after launch. On an active Care plan, that defect window remains open while the plan applies. New features, changed requirements and third-party failures are separate work unless the written scope says otherwise."],
  },
  {
    title: "Monthly plans and cancellation",
    paragraphs: ["Monthly services continue until cancelled with the notice stated in the accepted proposal. Charges already due remain payable. On exit, your code, domain, data and accounts stay yours, and we provide the agreed handover without an exit fee. Provider charges outside our control may continue until you cancel them with that provider."],
  },
  {
    title: "Confidentiality and data",
    paragraphs: ["Each side protects non-public business and technical information received for the work and uses it only for the agreed purpose. Personal data is handled under the privacy notice and, where required, a separate data-processing agreement."],
  },
  {
    title: "Availability and responsibility",
    paragraphs: ["We use reasonable skill and care, but the public website is provided without a promise that it will always be uninterrupted or error-free. To the extent permitted by law, neither side is responsible for indirect or consequential loss. Nothing excludes responsibility that cannot legally be excluded, including mandatory consumer rights."],
  },
  {
    title: "Law and disputes",
    paragraphs: ["The written client agreement states the governing law and dispute route. If it does not, Luxembourg law applies, subject to any mandatory rights and courts available to a consumer in their country. We ask that you contact info@luminetis.com first so we can try to resolve a concern directly."],
  },
  {
    title: "Changes to these terms",
    paragraphs: ["We may update these website terms for future use of the site. The date above shows the latest version. A change to these website terms does not rewrite an already accepted proposal or statement of work."],
  },
];

export function PrivacyPage() {
  return <LegalDocument kicker="Legal" title="Privacy notice" intro="What information Luminetis handles when you visit this site, contact us or work with us, and the choices available to you." sections={privacySections} />;
}

export function TermsPage() {
  return <LegalDocument kicker="Legal" title="Terms of service" intro="The rules for using this website and the baseline terms that apply before a separate written proposal or statement of work is accepted." sections={termsSections} />;
}
