import localFont from "next/font/local";

export const ravi = localFont({
  src: "../assets/fonts/Ravi-VF.woff2",
  display: "swap",
  variable: "--font-ravi",
  weight: "100 900",
  style: "normal",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});
