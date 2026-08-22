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
  url: "https://hadesboard.com",
  googleAnalyticsId: "G-WE24NVC6RX",
  description:
    "هادس بورد، استودیوی فارسی طراحی و توسعه وب برای ساخت تجربه‌های دیجیتال هدفمند، کاربردی و فنی است.",
  email: "info@hadesboard.com",
  telephone: "+989355396804",
  socialLinks: ["https://www.linkedin.com/in/mohamad-gandomi-a7364085/"],
  navigation,
  footerNavigation: navigation,
} as const;
