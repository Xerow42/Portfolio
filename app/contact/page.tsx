import type { Metadata } from "next";
import Link from "next/link";
import { ContactLinks } from "@/components/ContactLinks";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Khalil Lamrabet.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Contact</h1>
        <p className="mt-4 text-muted">
          I&apos;m looking for an internship in Big Data, Data Engineering, Artificial Intelligence or Software
          Engineering. The fastest way to reach me is by e-mail.
        </p>
      </div>

      <div className="mt-10 max-w-xl">
        <ContactLinks />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Send an e-mail
        </a>
        <Link
          href="/resume/Khalil_Lamrabet_CV.pdf"
          className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Download CV
        </Link>
      </div>
    </div>
  );
}
