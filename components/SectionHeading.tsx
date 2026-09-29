type Props = {
  title: string;
  description?: string;
  id?: string;
  /** Short decorative label shown before the title, e.g. "01". Purely visual — not a claimed ranking. */
  index?: string;
};

export function SectionHeading({ title, description, id, index }: Props) {
  return (
    <div className="mb-8 max-w-2xl" id={id}>
      <div className="flex items-center gap-3">
        {index ? <span className="index-mark">{index}</span> : null}
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
      </div>
      {description ? <p className="mt-3 text-muted">{description}</p> : null}
    </div>
  );
}
