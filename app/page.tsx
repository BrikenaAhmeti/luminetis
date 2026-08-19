import { SiteShell } from "./components/SiteShell";

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Luminetis",
  url: "https://www.luminetis.com",
  logo: "https://www.luminetis.com/icon-512.png",
  description: "Senior engineering studio building fast websites, web applications, local search systems, data platforms, AI services, and infrastructure.",
  email: "info@luminetis.com",
  areaServed: ["Luxembourg", "Kosovo", "United Kingdom", "United States", "Europe"],
  address: [
    { "@type": "PostalAddress", addressCountry: "LU", addressLocality: "Luxembourg" },
    { "@type": "PostalAddress", addressCountry: "XK", addressLocality: "Pristina" },
  ],
  knowsAbout: ["Web development", "Search engine optimization", "Google Business Profile", "E-commerce", "Data engineering", "Artificial intelligence", "Network infrastructure"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <SiteShell />
    </>
  );
}
