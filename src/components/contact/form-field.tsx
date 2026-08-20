import type { ReactNode } from "react";

type FormFieldProps = {
  children: ReactNode;
  help?: string;
  id: string;
  label: string;
  required?: boolean;
};

export function FormField({ children, help, id, label, required = false }: FormFieldProps) {
  return (
    <div>
      <label className="flex items-center justify-between gap-4 text-sm font-medium text-ink" htmlFor={id}>
        <span>{label}</span>
        <span className="text-xs font-normal text-muted">{required ? "ضروری" : "اختیاری"}</span>
      </label>
      <div className="mt-3">{children}</div>
      {help ? <p className="mt-2 text-xs leading-6 text-muted" id={`${id}-help`}>{help}</p> : null}
    </div>
  );
}
