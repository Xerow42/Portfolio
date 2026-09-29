import Link from "next/link";
import type { Project } from "@/data/types";
import { Tag } from "./Tag";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <p className="font-mono text-xs uppercase tracking-wide text-signal">Featured project</p>
      <h3 className="mt-2 text-2xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-3 max-w-2xl text-muted">{project.shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          View project details
        </Link>
        {project.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
