export type AboutPrinciple = {
  id: string;
  title: string;
  description: string;
};

export type BackgroundField = {
  label: string;
  value: string;
};

export const aboutPrinciples = [
  {
    id: "01",
    title: "فکر پیش از ظاهر",
    description: "پیش از انتخاب فرم و رنگ، باید مسئله، مخاطب و دلیل هر تصمیم روشن باشد.",
  },
  {
    id: "02",
    title: "استفاده پیش از نمایش",
    description: "یک تجربه خوب باید در کار روزمره ساده، قابل فهم و قابل اتکا بماند.",
  },
  {
    id: "03",
    title: "کیفیت درون و بیرون",
    description: "دقت بصری و کیفیت فنی دو بخش جدا نیستند؛ هر دو تجربه محصول را می‌سازند.",
  },
  {
    id: "04",
    title: "ارزش فراتر از صفحه",
    description: "طراحی وقتی معنا دارد که به هدف کسب‌وکار و نیاز واقعی کاربر متصل باشد.",
  },
] as const satisfies readonly AboutPrinciple[];

export const backgroundFields = [
  { label: "آغاز استودیو", value: "نیازمند اطلاعات تأییدشده" },
  { label: "مسیر حرفه‌ای", value: "روایت شخصی بعداً اضافه می‌شود" },
  { label: "تجربه‌های منتخب", value: "فقط پس از مستندسازی پروژه‌های واقعی" },
] as const satisfies readonly BackgroundField[];

export const collaborationPrinciples = [
  "گفت‌وگوی مستقیم و روشن",
  "تصمیم‌های قابل توضیح",
  "دامنه و انتظار مشخص",
  "همراهی پس از انتشار",
] as const;
