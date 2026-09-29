export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.72rem] text-muted">
      {children}
    </span>
  );
}
