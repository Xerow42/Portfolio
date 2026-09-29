import Link from "next/link";
import { profile } from "@/data/profile";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-paper/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight text-ink">
          {profile.name}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-sm text-muted transition-colors hover:text-ink sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume/Khalil_Lamrabet_CV.pdf"
            className="rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            Download CV
          </Link>
        </nav>
      </div>
      {/* Mobile nav: shown below the bar so it never overlaps the CV button. */}
      <nav aria-label="Primary mobile" className="container-page flex gap-5 pb-3 sm:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-ink">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
