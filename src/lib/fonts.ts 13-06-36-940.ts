import localFont from "next/font/local";

export const grande = localFont({
  src: [
    {
      path: "../public/fonts/grande.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-grande",
  display: "swap",
});
