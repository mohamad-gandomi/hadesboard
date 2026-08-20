type SystemLabelProps = {
  code: string;
  label: string;
  value: string;
};

export function SystemLabel({ code, label, value }: SystemLabelProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-line py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-body" dir="ltr">
      <span>{code}</span>
      <span>{label}: {value}</span>
    </div>
  );
}
