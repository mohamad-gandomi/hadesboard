import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  size?: number;
};

export function BrandMark({ className = "", size = 36 }: BrandMarkProps) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      height={size}
      src="/brand/hadesboard-mark-v1.png"
      width={size}
    />
  );
}
