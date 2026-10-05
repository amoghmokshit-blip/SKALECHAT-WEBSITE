// Centralised schema.org structured-data nodes and builders.
// One source of truth so entity data (name, URL, IDs) stays consistent across
// every page — a core signal for search engines and AI answer engines.
import { site } from "./site";

const url = site.websiteUrl;

export const ORG_ID = `${url}/#organization`;
export const WEBSITE_ID = `${url}/#website`;
export const APP_ID = `${url}/#app`;

export const organizationNode = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.name,
  legalName: site.legalName,
  url,
  logo: `${url}/brand/icon.png`,
  image: `${url}/brand/brand-mark.png`,
  email: site.email,
  telephone: site.phoneDisplay,
  description: site.description,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "CIN",
    value: site.cin,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: site.email,
    telephone: site.phoneDisplay,
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: site.name,
  url,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

// Product entity. No aggregateRating / fabricated price — only verifiable facts.
export const softwareApplicationNode = {
  "@type": "SoftwareApplication",
  "@id": APP_ID,
  name: site.name,
  applicationCategory: "CommunicationApplication",
  operatingSystem: "Android, iOS",
  url,
  description: site.description,
  inLanguage: "en",
  publisher: { "@id": ORG_ID },
};

/** Site-wide graph shared by every page (Organization + WebSite). */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, websiteNode],
};

/** BreadcrumbList for an inner page. Pass the trail from Home to the page. */
export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** FAQPage — use ONLY when the same Q&As are visible on the page. */
export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
