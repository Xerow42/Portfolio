import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { HeroShowcase } from "@/components/HeroShowcase";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsSection } from "@/components/SkillsSection";
import { profile, skills } from "@/data/profile";
import { getFeaturedProject, projects } from "@/data/projects";

const HOME_SKILL_LABELS = [
  "Artificial Intelligence & Machine Learning",
  "Backend Development",
  "Databases & Data Engineering",
];

export default function HomePage() {
  const featured = getFeaturedProject();
  const otherProjects = projects.filter((project) => project.slug !== featured.slug);
  const previewSkills = skills.filter((group) => HOME_SKILL_LABELS.includes(group.label));

  return (
    <>
      <section className="hero-glow border-b border-border">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <ProfilePhoto />
            <p className="mt-5 font-mono text-sm text-signal">{profile.role}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{profile.name}</h1>
            <p className="prose-body mt-5 text-lg leading-relaxed text-muted">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                View Projects
              </Link>
              <Link
                href="/resume/Khalil_Lamrabet_CV.pdf"
                className="rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                Download CV
              </Link>
              <a
                href={profile.github.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroShowcase />
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading index="01" title="Featured project" description="The project that best represents how I build software." />
        <FeaturedProject project={featured} />
      </section>

      <section className="border-y border-border bg-surface/60">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            index="02"
            title="Selected work"
            description={`The other ${otherProjects.length} projects, from data pipelines to computer vision.`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading index="03" title="Technical Skills" description="A fuller breakdown is on the About page." />
        <SkillsSection groups={previewSkills} />
        <div className="mt-8">
          <Link href="/about" className="text-sm font-medium text-accent hover:underline">
            See the full skill set and background
          </Link>
        </div>
      </section>

      <section className="dark-band">
        <div className="container-page py-16 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-wide text-code-accent">04</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Looking for an internship in</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.targetRoles.map((role) => (
              <span
                key={role}
                className="inline-flex items-center rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[0.72rem] text-code-ink/80"
              >
                {role}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-code-accent px-4 py-2.5 text-sm font-medium text-code-bg transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
