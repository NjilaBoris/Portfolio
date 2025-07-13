import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiako Loic",
  description:
    "A perfect portfolio website that shows my skills, minimal and smooth microinteractions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased bg-neutral-100 dark:bg-neutral-700 dark:text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
