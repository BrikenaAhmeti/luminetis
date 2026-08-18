import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Luminetis | Engineering that makes you visible";
const description = "Fast websites, web applications, local search, data, AI and infrastructure, built by senior engineers in Luxembourg and Kosovo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://luminetis.com"),
  title: { default: title, template: "%s | Luminetis" },
  description,
  applicationName: "Luminetis",
  authors: [{ name: "Luminetis", url: "https://luminetis.com" }],
  creator: "Luminetis",
  publisher: "Luminetis",
  category: "technology",
  keywords: ["web development Luxembourg", "web development Kosovo", "local SEO", "Google Business Profile", "Next.js development", "data engineering", "AI agents", "network infrastructure"],
  alternates: {
    canonical: "/",
    languages: { "en-GB": "/?lang=en", fr: "/?lang=fr", de: "/?lang=de", sq: "/?lang=sq", es: "/?lang=es", pt: "/?lang=pt", it: "/?lang=it", "x-default": "/" },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/logos/favicon-16.svg", sizes: "16x16", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/logos/logomark-colour.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Luminetis",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Luminetis, engineering that makes you visible" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F5F2EC" }, { media: "(prefers-color-scheme: dark)", color: "#0B0F12" }],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(function(){try{var t=localStorage.getItem('luminetis-theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}})()`;
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
