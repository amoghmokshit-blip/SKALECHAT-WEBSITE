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
  website: "slaychatapp.com",
  websiteUrl: "https://slaychatapp.com",
  // App store links — replace "#" with the real listing URLs once published.
  appStoreUrl: "#",
  playStoreUrl: "#",
  // Registered address was not provided; shown as a placeholder until supplied.
  address: "Registered office address — to be provided.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Product" },
  { href: "/contact", label: "Contact" },
] as const;
