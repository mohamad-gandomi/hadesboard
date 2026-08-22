export const projectCategoryIds = ["web", "ecommerce", "app"] as const;

export type ProjectCategory = (typeof projectCategoryIds)[number];

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectLinkSet = {
  live?: string;
  github?: string;
  caseStudy?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  description: string;
  services: readonly string[];
  image: ProjectImage;
  gallery: readonly ProjectImage[];
  links: ProjectLinkSet;
  featured: boolean;
  status: "concept";
  content: {
    overview: string;
    challenge: string;
    approach: string;
    designDirection: string;
    developmentNotes: string;
    outcome: string;
  };
};

export const projectCategories = [
  { id: "web", label: "وب‌سایت" },
  { id: "ecommerce", label: "فروشگاه اینترنتی" },
  { id: "app", label: "وب‌اپلیکیشن" },
] as const satisfies readonly { id: ProjectCategory; label: string }[];

export const projects = [
  {
    id: "001",
    slug: "madar",
    title: "مدار",
    category: "web",
    categoryLabel: "وب‌سایت سازمانی مفهومی",
    year: "۱۴۰۵",
    description: "مطالعه‌ای مفهومی برای تبدیل یک محصول فنی پیچیده به روایتی روشن، دقیق و قابل بررسی.",
    services: ["راهبرد محتوا", "طراحی تجربه", "طراحی رابط"],
    image: { src: "/projects/madar-cover-v2.webp", alt: "ماکاپ رابط زیرساختی پروژه مفهومی مدار در فضای استودیویی روشن", width: 1568, height: 1003 },
    gallery: [{ src: "/projects/madar-screen-v2.webp", alt: "نمای صفحات سیستم، محتوا و مشخصات پروژه مفهومی مدار", width: 1536, height: 1024 }],
    links: { caseStudy: "/projects/madar" },
    featured: true,
    status: "concept",
    content: {
      overview: "مدار یک تمرین مفهومی برای وب‌سایت یک محصول زیرساختی است؛ جایی که جزئیات فنی باید بدون از دست‌دادن دقت، برای تصمیم‌گیرندگان قابل فهم شوند.",
      challenge: "پرسش طراحی این پروژه، ساختن تعادل میان اعتبار فنی و خوانایی بود. محتوا باید عمیق بماند، اما مسیر شناخت محصول را پیچیده نکند.",
      approach: "ساختار از مسئله‌های مخاطب آغاز شد و سپس قابلیت‌ها، منطق سیستم و مسیر شروع همکاری در یک روایت مرحله‌ای قرار گرفتند.",
      designDirection: "زبان بصری بر شبکه دقیق، تایپوگرافی بزرگ و سطوح کنترل‌شده استوار است. آبی کبالت فقط برای نقاط تصمیم و وضعیت‌های مهم استفاده می‌شود.",
      developmentNotes: "مسیر فنی پیشنهادی بر رندر سمت سرور، محتوای ساخت‌یافته و اجزای کوچک قابل استفاده مجدد تکیه دارد تا توسعه و نگهداری شفاف بماند.",
      outcome: "این یک پروژه مفهومی است و نتیجه تجاری، داده عملکرد یا ادعای مربوط به مشتری واقعی برای آن ثبت نشده است.",
    },
  },
  {
    id: "002",
    slug: "nova",
    title: "نُوا",
    category: "ecommerce",
    categoryLabel: "فروشگاه اینترنتی مفهومی",
    year: "۱۴۰۵",
    description: "یک مسیر خرید مفهومی با تمرکز بر انتخاب آرام، اطلاعات شفاف محصول و حذف اصطکاک‌های غیرضروری.",
    services: ["تجربه خرید", "طراحی رابط", "معماری محتوا"],
    image: { src: "/projects/nova-cover-v2.webp", alt: "ماکاپ فروشگاه مفهومی نُوا با عکاسی محصولات سرامیکی", width: 1586, height: 992 },
    gallery: [{ src: "/projects/nova-screen-v2.webp", alt: "نمای جزئیات محصول، دسته‌بندی و فرایند خرید فروشگاه مفهومی نُوا", width: 1536, height: 1024 }],
    links: { caseStudy: "/projects/nova" },
    featured: true,
    status: "concept",
    content: {
      overview: "نُوا یک فروشگاه مفهومی برای بررسی تجربه خریدی کم‌تنش است؛ تجربه‌ای که به‌جای شلوغی تبلیغاتی، انتخاب آگاهانه را در مرکز قرار می‌دهد.",
      challenge: "پرسش اصلی، حفظ شخصیت یک برند پریمیوم در کنار دسترسی سریع به مشخصات، مقایسه و اقدام خرید بود.",
      approach: "مسیرها پیرامون سه تصمیم اصلی کاربر شکل گرفتند: کشف، ارزیابی و خرید. هر صفحه فقط اطلاعات لازم برای همان تصمیم را برجسته می‌کند.",
      designDirection: "فضای خالی سخاوتمندانه، تصاویر بزرگ و تایپوگرافی تحریریه‌ای، ریتم فروشگاه را می‌سازند و عناصر سیستمی وضعیت و قیمت را دقیق نگه می‌دارند.",
      developmentNotes: "برای نسخه قابل توسعه، مدل داده محصول، مدیریت وضعیت سبد و بهینه‌سازی تصویر باید مستقل از لایه ارائه طراحی شوند.",
      outcome: "نُوا پروژه‌ای مفهومی است؛ هنوز نسخه زنده، داده فروش یا نتیجه قابل انتساب به کسب‌وکار واقعی ندارد.",
    },
  },
  {
    id: "003",
    slug: "arq",
    title: "آرک",
    category: "app",
    categoryLabel: "وب‌اپلیکیشن مفهومی",
    year: "۱۴۰۵",
    description: "داشبوردی مفهومی برای مرتب‌کردن داده‌های عملیاتی و تبدیل وضعیت‌های پراکنده به تصمیم‌های روشن.",
    services: ["معماری رابط", "طراحی محصول", "سیستم طراحی"],
    image: { src: "/projects/arq-cover-v2.webp", alt: "ماکاپ داشبورد عملیاتی پروژه مفهومی آرک روی نمایشگر و تبلت", width: 1586, height: 992 },
    gallery: [{ src: "/projects/arq-screen-v2.webp", alt: "نمای داشبورد، زمان‌بندی و گزارش پروژه مفهومی آرک", width: 1536, height: 1024 }],
    links: { caseStudy: "/projects/arq" },
    featured: true,
    status: "concept",
    content: {
      overview: "آرک یک مطالعه مفهومی در طراحی ابزارهای کاری است؛ محصولی که باید حجم زیادی از وضعیت‌ها را بدون ایجاد بار شناختی نمایش دهد.",
      challenge: "پرسش پروژه این بود که چگونه می‌توان جزئیات عملیاتی را حفظ کرد و در همان زمان، اولویت‌ها و اقدام بعدی را بی‌ابهام نشان داد.",
      approach: "اطلاعات بر اساس فوریت و نوع تصمیم گروه‌بندی شد. نمای کلی برای تشخیص وضعیت و نماهای جزئی برای پیگیری و اقدام طراحی شدند.",
      designDirection: "یک شبکه متراکم اما آرام، تایپ مونو برای داده‌های سیستمی و رنگ تأکیدی محدود، سلسله‌مراتب رابط را کنترل می‌کنند.",
      developmentNotes: "معماری پیشنهادی رابط بر ترکیب اجزای سروری با تعامل‌های محلی کوچک استوار است تا جاوااسکریپت سمت کاربر فقط در نقاط ضروری بارگذاری شود.",
      outcome: "آرک پروژه‌ای مفهومی است و هیچ معیار استفاده، نتیجه عملیاتی یا ادعای مشتری برای آن ارائه نمی‌شود.",
    },
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export function isProjectCategory(value: unknown): value is ProjectCategory {
  return typeof value === "string" && projectCategoryIds.includes(value as ProjectCategory);
}

export function getProjectsByCategory(category?: ProjectCategory) {
  return category ? projects.filter((project) => project.category === category) : projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return projects[(currentIndex + 1) % projects.length];
}
