import Link from "next/link";
import type { Project } from "@/data/types";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface p-6 shadow-sm transition-colors hover:border-accent hover:shadow-md"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100" />
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink group-hover:text-accent">{project.title}</h3>
          {project.status === "summary" ? (
            <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-wide text-muted">
              Write-up pending
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.shortDescription}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </Link>
  );
}
