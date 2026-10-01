const steps = [
  {
    title: "Admin creates a group",
    detail: "You open a Super Group for a specific deal or conversation.",
  },
  {
    title: "Members are added",
    detail: "Each party joins by invite — no one browses the member list.",
  },
  {
    title: "Admin assigns aliases",
    detail: "Real names and numbers are replaced with neutral aliases.",
  },
  {
    title: "Members communicate privately",
    detail: "Parties talk in the group, never directly with each other.",
  },
];

export function Workflow() {
  return (
    <ol className="relative space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
      {/* Connecting line (desktop) */}
      <div
        className="absolute left-4 top-0 h-full w-px bg-line md:left-0 md:top-4 md:h-px md:w-full"
        aria-hidden
      />
      {steps.map((step, i) => (
        <li key={step.title} className="relative pl-14 md:pl-0">
          <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-sm font-semibold text-accent md:relative md:mb-5">
            {i + 1}
          </span>
          <h3 className="font-display text-base font-semibold text-ink">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
