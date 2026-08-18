export type PrimaryPageKey = "home" | "services" | "packages" | "work" | "about" | "commitment" | "contact";
export type LegalPageKey = "privacy" | "terms";
export type PageKey = PrimaryPageKey | LegalPageKey;
export type RegionKey = "eu" | "balkans";

export const pages: PrimaryPageKey[] = ["home", "services", "packages", "work", "about", "commitment", "contact"];

export const prices = {
  essential: { eu: 149, balkans: 99 },
  growth: { eu: 349, balkans: 229 },
  custom: { eu: 1200, balkans: 800 },
  care: { eu: 39, balkans: 25 },
  found: { eu: 99, balkans: 59 },
  retainer: { eu: 450, balkans: 290 },
};

export const serviceGroups = [
  { short: "Local search", title: "Being found locally", icon: "location_on", color: "#0F6E63", bright: "#4FC3B2", body: "What you get is a listing that shows up when someone nearby searches for what you sell, with the right phone number, the right hours, and a route to the door. Then we keep it that way.", items: ["Google Business Profile creation, claiming and verification", "Complete profile build-out: categories, service areas, hours, photos, services", "Google Maps presence and pin accuracy", "Local search optimisation", "Review monitoring and drafted responses", "Search Console setup and indexing", "Sitemap and structured data", "Analytics, cookieless"] },
  { short: "Websites", title: "Websites and web apps", icon: "language", color: "#8A5309", bright: "#E8A22B", body: "Sites that load in about a second on a phone on mobile data, and web applications that hold up when the business grows into them.", items: ["Marketing sites", "Custom web applications", "Shopify and BigCommerce", "Headless commerce", "Performance work on existing sites", "Platform migrations without losing URLs", "Accessibility remediation"] },
  { short: "Search and content", title: "Search and content", icon: "manage_search", color: "#2A5C8A", bright: "#7FA7E8", body: "Technical work first, because content ranks only if the site can be crawled and read quickly. Then the writing.", items: ["Technical SEO audits and remediation", "On-page SEO", "Keyword and intent research", "Content SEO", "Blog and editorial content", "Internal linking", "Page-speed work on existing sites"] },
  { short: "Ads and social", title: "Advertising and social", icon: "campaign", color: "#A03B3B", bright: "#E88B8B", body: "Paid and social where it earns its budget, with the tracking set up properly so you can tell whether it did.", items: ["Google Ads setup and management", "Meta Ads setup and management", "Social profile setup and management", "Content calendars", "Copywriting", "Creative assets"] },
  { short: "Mobile and apps", title: "Mobile and applications", icon: "smartphone", color: "#6B4C9A", bright: "#C08BE0", body: "Apps and internal tools, usually where a spreadsheet has stopped being enough and a person is doing the work of a script.", items: ["Native mobile apps", "Cross-platform mobile apps", "Internal tools", "Dashboards", "Integrations", "API design"] },
  { short: "Data and AI", title: "Data and AI", icon: "memory", color: "#3F6B2A", bright: "#8FC46B", body: "Pipelines that fail loudly rather than quietly, and AI systems that cite their source or say they do not know.", items: ["Data engineering and pipelines", "Warehousing", "Reporting", "Web scraping and extraction", "AI agents and assistants", "Retrieval systems", "Automation"] },
  { short: "Networks", title: "Networks and infrastructure", icon: "router", color: "#3B454D", bright: "#A3AEB5", body: "The unglamorous half. If the office network drops out at eleven every morning, nothing else we build matters.", items: ["Servers", "Switches, routers, firewalls", "Network printers", "On-site network design and setup", "Monitoring", "Backups", "Hosting and DNS"] },
  { short: "Brand and design", title: "Brand, design and content", icon: "palette", color: "#8A5309", bright: "#E8A22B", body: "Enough design to look like a business people trust, and a system so the next page you add still looks like you.", items: ["Brand identity", "Design systems", "UI design", "Graphic design", "Blog and editorial content", "Product copy"] },
];

export const capabilities = [
  { title: "Websites", icon: "language", color: "#E8A22B", kicker: "Websites and web apps", desc: "Marketing sites, custom builds, Shopify and BigCommerce, headless commerce, migrations without losing URLs, and performance work on sites we did not build." },
  { title: "Search and Maps", icon: "location_on", color: "#4FC3B2", kicker: "Being found locally", desc: "Google Business Profile created, claimed and verified, Maps presence, local search, Search Console and indexing, sitemap and structured data, reviews answered." },
  { title: "Mobile and apps", icon: "smartphone", color: "#7FA7E8", kicker: "Mobile and applications", desc: "Native and cross-platform apps, internal tools, dashboards, integrations and API design, usually where a spreadsheet stopped being enough." },
  { title: "Data and AI", icon: "database", color: "#C08BE0", kicker: "Data and AI", desc: "Pipelines that fail loudly, warehousing, reporting, extraction, retrieval systems and agents that cite their source or say they do not know." },
  { title: "Networks", icon: "router", color: "#8FC46B", kicker: "Networks and infrastructure", desc: "Servers, switches, routers, firewalls, on-site network design in Luxembourg and Kosovo, monitoring, backups, hosting and DNS." },
  { title: "Brand and content", icon: "palette", color: "#E88B8B", kicker: "Brand, design and content", desc: "Identity, design systems, UI design, editorial content and product copy, enough design to look like a business people trust." },
];

export const mapSteps = [
  "Create or claim your Google Business Profile, and get it verified.",
  "Complete every field: categories, service areas, hours, services, photos.",
  "Get the business onto Google Maps with the right pin and a route to the door.",
  "Set up Search Console and confirm the site is actually indexed.",
  "Add the structured data that makes the listing and the results rich.",
  "Monitor reviews and draft responses you can send as they are.",
  "Keep all of it accurate as the business changes.",
];

export const processSteps = [
  { n: "01", title: "Scope", body: "One conversation about what the business needs, then a written scope with a fixed price. If a cheaper package fits, we say so." },
  { n: "02", title: "Build", body: "The same engineers who scoped it. You see it working early and often, on a real URL, not in a slide." },
  { n: "03", title: "Launch", body: "Indexing, profile verification, analytics and a handover document. Accounts in your name from the start." },
  { n: "04", title: "Care", body: "Patching, monitoring, backups, edits, and a monthly report in plain language. A named person answers your email." },
];

export const work = [
  { sector: "Insurance", icon: "policy", color: "#2A5C8A", region: "United Kingdom", year: 2024, scale: "around 40 staff", title: "A quote form that stopped losing a third of applicants", problem: "A 12-year-old multi-step quote form dropped roughly a third of applicants at step three, where vehicle details were entered by hand.", approach: "Rebuilt the flow as four short steps with server-side validation, registration lookup, and saved progress. Rewrote the field labels with the underwriting team.", outcome: "Step-three abandonment fell to a fraction of what it was, measured in the broker's own funnel over the following quarter.", metrics: [{ label: "step-three drop-off, before", value: "32%" }, { label: "after, funnel analytics", value: "9%" }], stack: "Next.js · TypeScript · PostgreSQL · Azure" },
  { sector: "Fashion", icon: "checkroom", color: "#A03B3B", region: "Luxembourg", year: 2025, scale: "catalogue of ~1,800 SKUs", title: "A Shopify catalogue that could be filtered without waiting", problem: "Collection pages took several seconds to filter because every variant was fetched on each interaction.", approach: "Moved filtering to a pre-built facet index, deferred image decoding, and cut third-party scripts from eleven to three.", outcome: "Filtering became instant on mid-range phones and the collection pages passed Core Web Vitals.", metrics: [{ label: "LCP, mobile field data", value: "1.1s" }], stack: "Shopify · Hydrogen · TypeScript" },
  { sector: "Blockchain", icon: "currency_bitcoin", color: "#6B4C9A", region: "Remote", year: 2024, scale: "small protocol team", title: "A reporting pipeline for on-chain settlement data", problem: "Settlement reconciliation was done by hand from block explorers, taking two days per month and disagreeing with the ledger.", approach: "Built an indexer into a warehouse with typed transforms and reconciliation checks that fail loudly.", outcome: "Monthly reconciliation runs unattended and mismatches surface the same day they happen.", stack: "Rust · Python · dbt · ClickHouse" },
  { sector: "Real estate", icon: "apartment", color: "#0F6E63", region: "Kosovo", year: 2025, scale: "two offices, nine agents", title: "Listings that appear in local search and on the map", problem: "The agency ranked nowhere locally and had no verified Google Business Profile for either office.", approach: "Created and verified both profiles, completed categories and service areas, added listing structured data, and set up Search Console.", outcome: "Both offices appear in the local map pack for their districts and the site is fully indexed.", metrics: [{ label: "profile views, first 90 days", value: "tracked in GBP" }], stack: "Next.js · structured data · Search Console" },
  { sector: "Hospitality", icon: "restaurant", color: "#8A5309", region: "Luxembourg", year: 2024, scale: "three venues", title: "One booking flow for three venues", problem: "Each venue took bookings differently: phone, a form, and a third-party widget. Double-bookings were routine.", approach: "One booking service with per-venue capacity rules, confirmation email, and a staff view that works on a phone behind the bar.", outcome: "Double-bookings stopped. Staff stopped keeping a paper diary as a backup.", stack: "Next.js · Postgres · Resend" },
  { sector: "Medicine", icon: "local_hospital", color: "#A03B3B", region: "Kosovo", year: 2023, scale: "clinic with 12 practitioners", title: "A clinic site that loads on a hospital connection", problem: "The previous site was 6MB of sliders and did not open reliably on the clinic's own network.", approach: "Rebuilt statically at under 90KB of JavaScript, with appointment details and directions above the fold in two languages.", outcome: "The site opens in about a second on the clinic network and receptionists stopped reading the address out over the phone.", metrics: [{ label: "first-load JS", value: "84KB" }], stack: "Next.js · next-intl · Vercel" },
  { sector: "Resellers", icon: "inventory_2", color: "#3F6B2A", region: "Remote", year: 2025, scale: "~120k listings", title: "Price extraction that survives supplier site changes", problem: "Supplier price lists arrived as HTML pages and PDFs, and every layout change silently broke the import.", approach: "Extraction with per-supplier adapters, schema validation, and an alert when a field disappears rather than a silent null.", outcome: "Broken imports are caught within an hour instead of being found in the margin at month end.", stack: "Python · Playwright · Postgres" },
  { sector: "E-commerce", icon: "shopping_cart", color: "#8A5309", region: "United Kingdom", year: 2024, scale: "around 25 staff", title: "A BigCommerce migration with no lost URLs", problem: "A platform move risked ten years of accumulated search visibility across several thousand product URLs.", approach: "Mapped every URL, wrote the redirect set from the old sitemap, and verified it against server logs after cutover.", outcome: "Organic sessions held through the migration with no ranking cliff in the following weeks.", metrics: [{ label: "URLs redirected", value: "4,310" }], stack: "BigCommerce · TypeScript · Cloudflare" },
  { sector: "Construction", icon: "construction", color: "#3B454D", region: "Luxembourg", year: 2023, scale: "site office, 30 devices", title: "A site office network that stopped dropping out", problem: "Plans could not be opened on site because the office network was a chain of consumer routers.", approach: "Designed and installed a proper switch, firewall and access point layout with monitoring and offsite backups.", outcome: "Uptime is monitored and the office has not lost connectivity during working hours since installation.", stack: "UniFi · pfSense · Prometheus" },
  { sector: "Insurance", icon: "policy", color: "#2A5C8A", region: "Remote", year: 2025, scale: "claims team of 18", title: "A retrieval assistant over claims documents", problem: "Handlers spent much of the day searching PDFs for policy wording that decided a claim.", approach: "Retrieval over the document set with citations back to the page, and a refusal when the answer is not in the corpus.", outcome: "Handlers get the clause and the page reference in seconds, with the source visible next to the answer.", stack: "Python · pgvector · Claude API" },
  { sector: "Fashion", icon: "checkroom", color: "#A03B3B", region: "Kosovo", year: 2024, scale: "single boutique", title: "Found on Maps before the website existed", problem: "A new boutique had no online presence at all and opened in a street with heavy foot traffic.", approach: "Verified the Google Business Profile first, completed hours, photos and categories, then built a five-page site around it.", outcome: "The listing was live and complete in the first week, ahead of the site launch.", stack: "Google Business Profile · Next.js" },
  { sector: "Real estate", icon: "apartment", color: "#0F6E63", region: "Remote", year: 2023, scale: "portfolio of 400 units", title: "A reporting dashboard replacing eleven spreadsheets", problem: "Portfolio reporting was assembled by hand each month from spreadsheets that disagreed with each other.", approach: "One warehouse as the source of truth, typed transforms, and a dashboard with the figures each stakeholder actually asks for.", outcome: "The monthly pack is generated rather than assembled, and the numbers reconcile.", stack: "dbt · BigQuery · Next.js" },
];

export const tierDefinitions = [
  { key: "essential", name: "Essential", icon: "public", prefix: "one-off", recommended: false, who: "For a business that needs to exist properly online and be found.", cta: "Start with Essential", items: ["Up to 5 pages, responsive, light and dark", "Copy shaped from your material", "Contact form to your inbox", "Technical SEO foundations, sitemap, structured data", "Search Console set up and the site indexed", "Google Business Profile created or claimed and verified, Maps listing complete", "Analytics", "Hosting and domain configuration"] },
  { key: "growth", name: "Growth", icon: "trending_up", prefix: "one-off", recommended: true, who: "For a business that needs the site to bring in work.", cta: "Start with Growth", items: ["Everything in Essential", "Up to 15 pages, or a blog, or a small catalogue", "Booking, quote or lead flows", "Content SEO and a starting content plan", "Google Ads or social ads set up and running", "Social profiles set up and a first content calendar", "Design work beyond a template"] },
  { key: "custom", name: "Custom", icon: "architecture", prefix: "from", recommended: false, who: "For work where the requirements are genuinely specific.", cta: "Tell us the requirements", items: ["Everything in Growth", "Web applications, commerce, Shopify and BigCommerce builds", "Mobile apps", "Data pipelines, reporting, scraping", "AI agents and automation", "Network and server work, on site in Luxembourg or Kosovo", "Integrations with whatever you already run"] },
] as const;

export const plans = [
  { name: "Care", icon: "shield", key: "care", summary: "Keeps the site alive and correct. Required alongside a build.", items: ["Hosting, SSL, domain and DNS management", "Software updates and security patching", "Uptime monitoring", "Daily backups", "Small content edits, up to one hour per month", "A monthly performance check", "A named person to email"] },
  { name: "Found", icon: "explore", key: "found", summary: "Everything in Care, plus getting and keeping you on the map. Recommended.", items: ["Everything in Care", "Google Business Profile kept complete and accurate", "Maps listing maintained", "Four profile posts per month", "Review monitoring and drafted responses", "Local keyword tracking", "Search Console monitoring and fixes", "A monthly report in plain language"] },
] as const;

export const addOns = [
  { label: "Extra page on an existing site", eu: 40, balkans: 25, unit: "per page" },
  { label: "Ads management, Google or Meta", eu: 149, balkans: 89, unit: "per month" },
  { label: "Social management", eu: 199, balkans: 119, unit: "per month" },
  { label: "Content writing", eu: 80, balkans: 50, unit: "per page" },
  { label: "Brand identity", eu: 450, balkans: 290, unit: "from, one-off" },
  { label: "Additional language on the site", eu: 90, balkans: 55, unit: "per language" },
  { label: "On-site network work", eu: 65, balkans: 40, unit: "per hour" },
  { label: "Priority support, same-day reply", eu: 49, balkans: 29, unit: "per month" },
];

export const commitments = [
  { title: "A named person owns your project", icon: "person", color: "#8A5309", body: "You are told who that is at the start, and who covers when they are away. You email them directly." },
  { title: "Response times", icon: "schedule", color: "#0F6E63", body: "First reply within 8 business hours. Site-down incidents on a care plan acknowledged within 2 hours during business hours, and within 12 hours outside them." },
  { title: "You own everything", icon: "vpn_key", color: "#2A5C8A", body: "Code in your repository, domain in your registrar account, every third-party account in your name with you as owner. You get a written handover document." },
  { title: "No lock-in", icon: "logout", color: "#3F6B2A", body: "Leave whenever you want, take everything, and we will help you move it. No exit fee and no hostage data." },
  { title: "Fixed price means fixed price", icon: "price_check", color: "#8A5309", body: "If we underestimated, that is ours to absorb. Scope changes are quoted and approved in writing before any work starts." },
  { title: "Defects are free to fix", icon: "build", color: "#6B4C9A", body: "For 90 days after launch, anything that does not work as agreed gets fixed at no cost. On an active care plan, that window does not close." },
  { title: "We will tell you when you do not need something", icon: "record_voice_over", color: "#0F6E63", body: "Including when a cheaper package is the right one, and when the thing you asked for will not get you what you want." },
  { title: "What we will say no to", icon: "block", color: "#A03B3B", body: "Work we are not the right people for. When we decline, we say who we think is a better fit." },
  { title: "If something goes wrong", icon: "escalator_warning", color: "#2A5C8A", body: "Escalation runs from your named contact, to the other partner, to a written incident summary with what we changed. Names and routes are in your handover document." },
  { title: "Cancellation", icon: "event_busy", color: "#3B454D", body: "Monthly plans end with notice. Your site, code, domain and data stay yours, and we hand over anything we hold before the plan closes." },
];

export const faqs = [
  { q: "Is the monthly plan required?", a: "Care is required alongside a build, because we host, patch and monitor the site and cannot stand behind something we do not maintain. Found is optional. Nothing locks you in: you can leave and take everything." },
  { q: "Are the prices one-off or monthly?", a: "The build fee is one-off. Care and Found are monthly and can be cancelled with notice. The build price does not change once agreed." },
  { q: "Is VAT included?", a: "VAT treatment is pending confirmation and will be stated on every quote and invoice." },
  { q: "Why are there two price lists?", a: "The same figure reads differently in Pristina and in Luxembourg City. Rather than pick one and misprice the other market, we publish both and show the list for your region. You can switch it." },
  { q: "Who owns the code and the accounts?", a: "You do. The repository is yours, the domain sits in your registrar account, and every third-party account is created in your name with you as the owner." },
  { q: "What happens if something breaks?", a: "You email a named person, not a ticket queue. Defects in what we agreed are fixed at no cost within the warranty window, and incident acknowledgement windows are on the commitment page." },
  { q: "Do you work with an existing site?", a: "Yes. Performance work, accessibility remediation, technical SEO and migrations on sites we did not build are a normal part of what we do." },
  { q: "How long does a build take?", a: "Essential is usually two to three weeks from receiving your material. Growth is four to six. Custom is quoted with a schedule attached." },
  { q: "What is the quantum commitment about?", a: "One of us is a PhD candidate in quantum computing. If quantum-backed services become production-ready, clients on an active care plan get their existing services migrated with no additional build fee. Running costs are separate and stated in advance." },
  { q: "Can you be on site?", a: "In Luxembourg and Kosovo, yes, including network and server work. Elsewhere the work is remote." },
];

export const aboutPoints = [
  { icon: "handshake", color: "#8A5309", title: "One team, start to long after launch", body: "From the first conversation to the maintenance email two years later, it is the same people." },
  { icon: "visibility", color: "#0F6E63", title: "Advice beyond the code", body: "Design, ads, social and content. We say what we would do even when it is not work for us." },
  { icon: "public", color: "#2A5C8A", title: "Two bases, clients across time zones", body: "On-site work in Luxembourg and Kosovo, remote work with the US, the UK and the rest of Europe. We shift our hours to overlap with yours." },
  { icon: "hub", color: "#6B4C9A", title: "Building toward what runs next", body: "AI systems day to day, and quantum research that clients on a care plan get for free when it lands." },
];

export const locations = [
  { city: "Luxembourg", note: "Central European Time. On-site work across the country, and the base for our EU clients.", detail: "CET · overlap hours on request" },
  { city: "Kosovo", note: "Central European Time. On-site work in Pristina and around, and the base for Balkans clients.", detail: "CET · overlap hours on request" },
  { city: "United Kingdom and United States", note: "Remote, with working hours moved to match yours. Existing clients in both.", detail: "GMT · ET · PT overlap available" },
];

export const orbitItems = [
  { label: "Websites", icon: "language", color: "#E8A22B" },
  { label: "Search and Maps", icon: "location_on", color: "#4FC3B2" },
  { label: "Finance and KYC", icon: "account_balance", color: "#7FA7E8" },
  { label: "Hospitals and clinics", icon: "local_hospital", color: "#E88B8B" },
  { label: "Networks", icon: "router", color: "#8FC46B" },
  { label: "Data and AI", icon: "memory", color: "#C08BE0" },
  { label: "E-commerce", icon: "shopping_cart", color: "#E8A22B" },
  { label: "Hospitality", icon: "restaurant", color: "#E8A22B" },
  { label: "Insurance", icon: "policy", color: "#7FA7E8" },
  { label: "Payments", icon: "credit_card", color: "#7FA7E8" },
  { label: "Blockchain", icon: "currency_bitcoin", color: "#7FA7E8" },
  { label: "Pharmacy", icon: "medication", color: "#E88B8B" },
  { label: "Laboratories", icon: "science", color: "#E88B8B" },
  { label: "Servers", icon: "dns", color: "#8FC46B" },
  { label: "On-site IT", icon: "build", color: "#8FC46B" },
  { label: "Quantum research", icon: "hub", color: "#C08BE0" },
];

export const demos = [
  { key: "wine", label: "Wine bar", url: "vinera.lu" },
  { key: "boutique", label: "Boutique", url: "atelier-mira.com" },
  { key: "clinic", label: "Clinic", url: "clinique-nord.lu" },
  { key: "blog", label: "Magazine", url: "lecourant.lu" },
  { key: "shop", label: "Trade shop", url: "ferrumsupply.lu" },
  { key: "auto", label: "Auto detailing", url: "autowaxon.com" },
  { key: "agent", label: "AI agent", url: "orbit-agents.lu" },
] as const;
