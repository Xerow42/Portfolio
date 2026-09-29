import type { Metadata } from "next";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsSection } from "@/components/SkillsSection";
import { Timeline } from "@/components/Timeline";
import { certifications, education, experience, languages, profile, skills } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "Education, experience, technical skills, certifications and languages of Khalil Lamrabet.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <ProfilePhoto size={112} />
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">About</h1>
          <div className="prose-body mt-4 space-y-4 leading-relaxed text-ink/90">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading index="01" title="Experience" />
        <Timeline entries={experience} />
      </div>

      <div className="mt-16">
        <SectionHeading index="02" title="Education" />
        <Timeline entries={education} />
      </div>

      <div className="mt-16">
        <SectionHeading index="03" title="Technical Skills" />
        <SkillsSection groups={skills} />
      </div>

      <div className="mt-16">
        <SectionHeading index="04" title="Certifications" />
        <div className="space-y-5">
          {certifications.map((cert) => (
            <div key={cert.org} className="rounded-lg border border-border bg-surface p-5">
              <p className="font-medium text-ink">{cert.org}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                {cert.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading index="05" title="Languages" />
        <div className="flex flex-wrap gap-3">
          {languages.map((language) => (
            <span key={language.name} className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm">
              <span className="font-medium text-ink">{language.name}</span>{" "}
              <span className="text-muted">— {language.level}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
