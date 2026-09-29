import type { SkillGroup } from "@/data/profile";

/** One muted accent per category, purely for the top rule and the label — keeps
 *  categories visually distinct while staying inside the site's restrained palette. */
const CATEGORY_COLOR: Record<string, string> = {
  "Programming Languages": "var(--color-cat-languages)",
  "Frontend Development": "var(--color-cat-frontend)",
  "Backend Development": "var(--color-cat-backend)",
  "Databases & Data Engineering": "var(--color-cat-data)",
  "Artificial Intelligence & Machine Learning": "var(--color-cat-ai)",
  "Tools & Development Environment": "var(--color-cat-tools)",
};

function SkillCard({ group }: { group: SkillGroup }) {
  const accent = CATEGORY_COLOR[group.label];
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
      <div className="h-1" style={accent ? { backgroundColor: accent } : undefined} />
      <div className="p-5">
        <h3
          className="font-mono text-xs font-semibold uppercase tracking-wide"
          style={accent ? { color: accent } : undefined}
        >
          {group.label}
        </h3>
        {group.note ? <p className="mt-1 text-xs text-muted">{group.note}</p> : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[0.72rem] text-muted"
              style={accent ? { borderColor: `color-mix(in srgb, ${accent} 35%, var(--color-border))` } : undefined}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <SkillCard key={group.label} group={group} />
      ))}
    </div>
  );
}
