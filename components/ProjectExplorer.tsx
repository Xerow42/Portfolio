"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/types";
import { ProjectCard } from "./ProjectCard";

const ALL = "All" as const;

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = new Set<ProjectCategory>();
    projects.forEach((project) => project.category.forEach((category) => set.add(category)));
    return [ALL, ...Array.from(set).sort()] as const;
  }, [projects]);

  const [active, setActive] = useState<string>(ALL);

  const visible =
    active === ALL ? projects : projects.filter((project) => project.category.includes(active as ProjectCategory));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              active === category
                ? "border-ink bg-ink text-paper"
                : "border-border bg-surface text-muted hover:border-accent hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="text-muted">No project in this category yet.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
