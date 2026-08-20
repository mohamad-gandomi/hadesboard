type ProjectMetadataProps = {
  category: string;
  scope: readonly string[];
  year: string;
};

export function ProjectMetadata({ category, scope, year }: ProjectMetadataProps) {
  const items = [
    { label: "دسته", value: category },
    { label: "دامنه", value: scope.join("، ") },
    { label: "سال", value: year },
  ];

  return (
    <dl className="grid grid-cols-2 border-t border-line text-xs sm:grid-cols-[1fr_1.5fr_.5fr]">
      {items.map((item) => (
        <div
          className="border-b border-line py-4 even:border-r even:pr-4 last:col-span-2 sm:col-span-1 sm:border-b-0 sm:border-r sm:px-4 sm:first:border-r-0 sm:first:pr-0 sm:last:col-span-1"
          key={item.label}
        >
          <dt className="text-muted">{item.label}</dt>
          <dd className="mt-1.5 text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
