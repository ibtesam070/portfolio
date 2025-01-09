import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: [
    {
      path: "../fonts/Roboto-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Ibtesam Ansari",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
