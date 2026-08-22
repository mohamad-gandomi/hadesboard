export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type PreparationItem = {
  id: string;
  title: string;
  description: string;
};

export const contactChannels = [
  { id: "01", label: "تلفن", value: "09355396804", href: "tel:+989355396804", external: false },
  { id: "02", label: "ایمیل", value: "info@hadesboard.com", href: "mailto:info@hadesboard.com", external: false },
  { id: "03", label: "واتساپ", value: "09355396804", href: "https://wa.me/989355396804", external: true },
  { id: "04", label: "تلگرام", value: "09355396804", href: "https://t.me/+989355396804", external: true },
  { id: "05", label: "لینکدین", value: "Mohamad Gandomi", href: "https://www.linkedin.com/in/mohamad-gandomi-a7364085/", external: true },
] as const satisfies readonly ContactChannel[];

export const preparationItems = [
  {
    id: "01",
    title: "هدف کسب‌وکار",
    description: "این پروژه قرار است چه تغییری برای کسب‌وکار یا مخاطب ایجاد کند؟",
  },
  {
    id: "02",
    title: "نوع پروژه",
    description: "وب‌سایت، محصول تعاملی، فروشگاه یا بازنگری یک تجربه موجود؟",
  },
  {
    id: "03",
    title: "وضعیت فعلی",
    description: "اگر وب‌سایت، طراحی، محتوا یا زیرساختی وجود دارد، اشاره کوتاه به آن کمک می‌کند.",
  },
  {
    id: "04",
    title: "زمان‌بندی مدنظر",
    description: "اگر تاریخ یا محدودیت مشخصی وجود دارد، بهتر است از ابتدای گفتگو روشن باشد.",
  },
] as const satisfies readonly PreparationItem[];
