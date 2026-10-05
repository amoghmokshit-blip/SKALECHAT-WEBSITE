export const site = {
  name: "SkaleChat",
  legalName: "SKALECHAT COMMUNICATIONS PRIVATE LIMITED",
  tagline: "Group chat without disintermediation.",
  description:
    "SkaleChat is a private group messaging platform for intermediaries. Parties communicate while their contact information stays hidden — only the admin sees real identities.",
  cin: "U46900HR2025PTC129801",
  companyType: "Private Limited Company",
  email: "support@skalechat.com",
  phone: "9815784080",
  phoneDisplay: "+91 98157 84080",
  // Canonical production domain. Any other domain the company owns
  // (e.g. slaychatapp.com) should 301-redirect here at the DNS/host level.
  website: "skalechat.com",
  websiteUrl: "https://skalechat.com",
  // App store links — replace "#" with the real listing URLs once published.
  appStoreUrl: "#",
  playStoreUrl: "#",
  // Registered address was not provided; shown as a placeholder until supplied.
  address: "Registered office address — to be provided.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/super-groups", label: "Super Groups" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
