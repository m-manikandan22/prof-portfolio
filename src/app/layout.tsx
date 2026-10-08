import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const title = "Manikandan M | AI/ML Engineer | Artificial Intelligence & Data Science";
const description =
  "Portfolio of Manikandan M, a B.Tech Artificial Intelligence & Data Science student building ML systems, agentic AI workflows and intelligent applications.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: profile.name,
    images: [{ url: "/images/manikandan.webp", width: 800, height: 800, alt: profile.photoAlt }],
  },
  twitter: { card: "summary", title, description, images: ["/images/manikandan.webp"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1014" },
  ],
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/images/manikandan.webp`,
  jobTitle: "B.Tech Artificial Intelligence & Data Science Student",
  address: { "@type": "PostalAddress", addressLocality: "Hosur", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Er. Perumal Manimekalai College of Engineering" },
  sameAs: [profile.github, profile.linkedin],
};

// Runs before paint: dark is the default, "light" is only used if chosen.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')!=='light')d.classList.add('dark')}catch(e){d.classList.add('dark')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="font-sans text-base leading-relaxed">{children}</body>
    </html>
  );
}
