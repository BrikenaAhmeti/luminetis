import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms for using the Luminetis website and the baseline terms that apply before a written proposal is accepted.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of service | Luminetis", description: "Terms for using the Luminetis website and engaging our services.", url: "/terms" },
};

export default function Terms() {
  return <SiteShell initialPage="terms" />;
}
