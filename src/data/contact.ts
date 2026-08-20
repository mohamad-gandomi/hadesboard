export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  status: "pending";
};

export type PreparationItem = {
  id: string;
  title: string;
  description: string;
};

export const contactChannels = [
  { id: "01", label: "ایمیل", value: "در انتظار ثبت نشانی تأییدشده", status: "pending" },
  { id: "02", label: "شبکه‌های اجتماعی", value: "در انتظار ثبت پیوندهای تأییدشده", status: "pending" },
  { id: "03", label: "راه ارتباطی دیگر", value: "هنوز تعریف نشده است", status: "pending" },
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
