const navigation = [
  { label: "نمونه‌کارها", href: "/projects" },
  { label: "خدمات", href: "/services" },
  { label: "درباره ما", href: "/about" },
  { label: "مجله", href: "/journal" },
  { label: "تماس با ما", href: "/contact" },
] as const;

export const siteConfig = {
  name: "هادس بورد",
  englishName: "HadesBoard",
  description:
    "هادس بورد، استودیوی فارسی طراحی و توسعه وب برای ساخت تجربه‌های دیجیتال هدفمند، کاربردی و فنی است.",
  navigation,
  footerNavigation: navigation,
} as const;
