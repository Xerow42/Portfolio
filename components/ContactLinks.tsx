import { profile } from "@/data/profile";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { label: "LinkedIn", value: profile.linkedin.label, href: profile.linkedin.url },
  { label: "GitHub", value: profile.github.label, href: profile.github.url },
  { label: "Location", value: profile.location },
];

export function ContactLinks() {
  return (
    <dl className="divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between gap-4 px-5 py-4">
          <dt className="font-mono text-xs uppercase tracking-wide text-muted">{item.label}</dt>
          <dd className="text-right text-sm text-ink">
            {item.href ? (
              <a
                href={item.href}
                className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
