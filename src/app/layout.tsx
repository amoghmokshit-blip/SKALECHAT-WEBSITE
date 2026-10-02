import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { site } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.websiteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "SkaleChat",
    "group chat",
    "private messaging",
    "intermediary app",
    "broker chat",
    "recruiter chat",
    "super group",
    "privacy-first messaging",
    "hide phone number chat",
    "India messaging app",
  ],
  authors: [{ name: site.legalName, url: site.websiteUrl }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    url: site.websiteUrl,
    images: [
      {
        url: "/brand/brand-mark.png",
        width: 1412,
        height: 894,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/brand/brand-mark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.websiteUrl}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.websiteUrl,
      logo: `${site.websiteUrl}/brand/icon.png`,
      email: site.email,
      telephone: site.phoneDisplay,
      description: site.description,
    },
    {
      "@type": "WebSite",
      "@id": `${site.websiteUrl}/#website`,
      name: site.name,
      url: site.websiteUrl,
      publisher: { "@id": `${site.websiteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
