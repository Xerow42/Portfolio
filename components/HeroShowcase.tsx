import Link from "next/link";
import { projects } from "@/data/projects";

/**
 * Hero visual: a compact preview of real projects, pulled directly from
 * data/projects.ts (the same source used on /projects). No mockup, no
 * invented screenshot — just the project's own title, category, tech and
 * first verified highlight, so it can never drift from what's actually true.
 */
const HIGHLIGHT_SLUGS = ["qcm-corrector", "dataflow", "visionai"] as const;

export function HeroShowcase() {
  const items = HIGHLIGHT_SLUGS.map((slug) => projects.find((project) => project.slug === slug)).filter(
    (project): project is NonNullable<typeof project> => Boolean(project),
  );

  return (
    <div className="bracket-frame overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">Projects</p>
        <p className="font-mono text-xs text-muted">{projects.length} total</p>
      </div>
      <ul>
        {items.map((project, index) => {
          const highlight = project.results?.[0] ?? project.features?.[0] ?? project.shortDescription;
          return (
            <li key={project.slug} className={index > 0 ? "border-t border-border" : undefined}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-start gap-3 px-5 py-4 transition-colors hover:bg-accent-soft"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="font-semibold text-ink group-hover:text-accent">{project.title}</h3>
                    <span className="font-mono text-[0.7rem] text-muted">{project.category[0]}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{highlight}</p>
                  <p className="mt-2 font-mono text-[0.68rem] text-muted">{project.tech.slice(0, 3).join(" · ")}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href="/projects"
        className="block border-t border-border px-5 py-3 text-center text-sm font-medium text-accent hover:underline"
      >
        View all {projects.length} projects →
      </Link>
    </div>
  );
}
