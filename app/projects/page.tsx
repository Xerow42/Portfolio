import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software, data and machine learning projects by Khalil Lamrabet.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Projects</h1>
        <p className="mt-3 text-muted">
          Academic and internship projects across full-stack development, artificial intelligence and data.
        </p>
      </div>
      <ProjectExplorer projects={projects} />
    </div>
  );
}
