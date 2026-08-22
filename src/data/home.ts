export type ProcessItem = {
  id: string;
  name: string;
  title: string;
  description: string;
};

export const capabilities = [
  "راهبرد و تجربه کاربر",
  "طراحی رابط",
  "توسعه فرانت‌اند",
  "سیستم‌های محتوایی",
] as const;

export const process = [
  { id: "01", name: "Discover", title: "شناخت کسب‌وکار", description: "هدف، مخاطب و مسئله را پیش از طراحی روشن می‌کنیم." },
  { id: "02", name: "Structure", title: "ساختار و تجربه کاربر", description: "محتوا و مسیرهای استفاده را به یک ساختار قابل فهم تبدیل می‌کنیم." },
  { id: "03", name: "Design", title: "طراحی رابط", description: "زبان بصری و جزئیات رابط را در امتداد هویت محصول می‌سازیم." },
  { id: "04", name: "Build", title: "توسعه", description: "طراحی را با کد تمیز، واکنش‌گرا و قابل نگهداری پیاده می‌کنیم." },
  { id: "05", name: "Launch", title: "انتشار و پشتیبانی", description: "پیش از انتشار بررسی می‌کنیم و مسیر ادامه محصول را روشن نگه می‌داریم." },
] satisfies readonly ProcessItem[];

export const principles = [
  { id: "01", title: "طراحی با هدف", description: "هر تصمیم باید پاسخی به یک نیاز واقعی باشد." },
  { id: "02", title: "ساخت اصولی", description: "کیفیت فنی بخشی از تجربه کاربر و دوام محصول است." },
  { id: "03", title: "همراهی پس از انتشار", description: "انتشار پایان کار نیست؛ شروع سنجش و بهترکردن است." },
] as const;

export const philosophyPoints = ["طراحی سنجیده", "استفاده آسان", "عملکرد سریع", "ارزش برای کسب‌وکار"] as const;

export const featuredCaseStudy = {
  projectSlug: "madar",
  image: {
    src: "/projects/madar-featured-case-study.webp",
    alt: "ترکیب صفحات وب‌سایت مفهومی مدار با عکاسی و جزئیات زیرساختی",
    width: 1448,
    height: 1086,
  },
} as const;

export const technologies = ["NEXT.JS", "TYPESCRIPT", "REACT", "TAILWIND CSS", "RTL"] as const;
