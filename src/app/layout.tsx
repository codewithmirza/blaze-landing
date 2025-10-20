import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blaze It - Gamified Crypto Trading on Aptos",
  description: "A brutalist, swipe-based crypto trading platform with competitive portfolio quests on the Aptos network. Trade crypto like a game.",
  keywords: "crypto trading, aptos, gamified trading, portfolio quests, brutalist design, swipe trading",
  openGraph: {
    title: "Blaze It - Gamified Crypto Trading on Aptos",
    description: "A brutalist, swipe-based crypto trading platform with competitive portfolio quests on the Aptos network.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
