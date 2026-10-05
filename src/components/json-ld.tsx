// Renders a JSON-LD structured-data block.
// `<` is escaped to its unicode form to prevent XSS via JSON.stringify, per
// the Next.js JSON-LD guidance (node_modules/next/dist/docs/01-app/02-guides/json-ld.md).
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
