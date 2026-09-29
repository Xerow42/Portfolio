import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tag } from "@/components/Tag";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.shortDescription },
  };
}

function TextBlock({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-10" id={id}>
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <div className="prose-body mt-4 space-y-4 leading-relaxed text-ink/90">{children}</div>
    </section>
  );
}

function ListBlock({ title, id, items }: { title: string; id: string; items: string[] }) {
  return (
    <section className="border-t border-border py-10" id={id}>
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink/90">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const isDocumented = project.status === "documented";

  return (
    <div className="container-page py-14 sm:py-16">
      <Link href="/projects" className="text-sm text-muted hover:text-ink">
        ← All projects
      </Link>

      {/* 1. Hero */}
      <header className="mt-6 max-w-3xl border-b border-border pb-10">
        <div className="flex flex-wrap gap-2">
          {project.category.map((category) => (
            <Tag key={category}>{category}</Tag>
          ))}
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted">{project.shortDescription}</p>
        {project.role ? <p className="mt-4 text-sm text-ink/80">{project.role}</p> : null}
        {project.timeframe ? <p className="mt-1 font-mono text-xs text-muted">{project.timeframe}</p> : null}
      </header>

      {isDocumented ? (
        <>
          {project.problem ? (
            <TextBlock title="Problem" id="problem">
              <p>{project.problem}</p>
            </TextBlock>
          ) : null}

          {project.solution ? (
            <TextBlock title="Solution" id="solution">
              <p>{project.solution}</p>
            </TextBlock>
          ) : null}

          {project.features?.length ? <ListBlock title="Features" id="features" items={project.features} /> : null}

          {project.architecture ? (
            <TextBlock title="Architecture" id="architecture">
              <p>{project.architecture}</p>
            </TextBlock>
          ) : null}

          {/* Technologies */}
          <section className="border-t border-border py-10" id="technologies">
            <h2 className="text-xl font-semibold text-ink">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </section>

          {project.technicalImplementation?.length ? (
            <ListBlock
              title="Technical implementation"
              id="implementation"
              items={project.technicalImplementation}
            />
          ) : null}

          {project.challenges?.length ? (
            <ListBlock title="Challenges" id="challenges" items={project.challenges} />
          ) : null}

          {project.results?.length ? <ListBlock title="Results" id="results" items={project.results} /> : null}

          {project.futureImprovements?.length ? (
            <ListBlock title="Future improvements" id="future" items={project.futureImprovements} />
          ) : null}
        </>
      ) : (
        <section className="border-t border-border py-10">
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-muted">
            The full write-up for this project (problem, architecture, challenges and results) is not published
            yet.
          </p>
        </section>
      )}

      {/* GitHub / Live demo */}
      {project.links?.length ? (
        <section className="border-t border-border py-10" id="links">
          <h2 className="text-xl font-semibold text-ink">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
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
        </section>
      ) : null}
    </div>
  );
}
