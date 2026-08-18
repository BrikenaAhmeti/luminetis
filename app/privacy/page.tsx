import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Luminetis handles personal information when you visit the website, make an enquiry or work with us.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy notice | Luminetis", description: "How Luminetis handles personal information.", url: "/privacy" },
};

export default function Privacy() {
  return <SiteShell initialPage="privacy" />;
}
