export const partnerProfiles = [
  {
    name: "Bajram Sherifi",
    image: "/team/bajram-sherifi.jpg",
    imagePosition: "center 42%",
    linkedin: "https://www.linkedin.com/in/bajram-s-3b1094110?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    summary: "Engineer and PhD candidate in quantum computing, working across web and mobile products, AWS infrastructure, networks, and database systems.",
  },
  {
    name: "Brikena Ahmeti",
    image: "/team/brikena-ahmeti.jpg",
    imagePosition: "center 43%",
    linkedin: "https://www.linkedin.com/in/brikena-ahmeti-120867166",
    summary: "Engineer working across web and mobile products, data and AI systems, Shopify and BigCommerce, AWS, technical SEO, and blockchain.",
  },
] as const;

export const partnerExperience = "Experience delivering projects with international companies and teams worldwide.";

export const socialProfiles = [
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@luminetis?_r=1&_t=ZS-98znWSvbzNJ" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/share/1FMspXM8VF/" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/luminetis?igsh=MWpoc2QybDFjc2liaA==" },
] as const;

export type SocialProfileKey = (typeof socialProfiles)[number]["key"];
