type DividerProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export function Divider({ className = "", orientation = "horizontal" }: DividerProps) {
  return (
    <span
      aria-hidden="true"
      className={`${orientation === "horizontal" ? "block h-px w-full" : "block h-full w-px"} bg-line ${className}`}
    />
  );
}
