import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Correct path to the font file
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Correct path to the font file
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Manikandan S | Portfolio",
  description: "A college student and versatile full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}