import type { TimelineEntry } from "@/data/profile";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="space-y-8 border-l border-border pl-6">
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.period}`} className="relative">
          <span className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent" />
          <p className="font-mono text-xs text-muted">{entry.period}</p>
          <h3 className="mt-1 text-base font-semibold text-ink">{entry.title}</h3>
          <p className="text-sm text-muted">
            {entry.org} · {entry.location}
          </p>
          {entry.bullets.length > 0 ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/90">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
