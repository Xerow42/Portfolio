import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} · {profile.location}
        </p>
        <div className="flex gap-5">
          <a href={profile.github.url} className="hover:text-ink" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin.url} className="hover:text-ink" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
