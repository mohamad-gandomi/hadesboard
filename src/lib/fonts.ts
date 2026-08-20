import localFont from "next/font/local";

export const ravi = localFont({
  src: "../../public/fonts/Ravi-VF.ttf",
  display: "swap",
  variable: "--font-ravi",
  weight: "100 900",
  style: "normal",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});
