import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNave from "@/components/Home/Navbar/ResponsiveNave";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akram Mondal",
  description: "Portfolio built with next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0d0d1f]">
        <ResponsiveNave />
        {children}
      </body>
    </html>
  );
}
