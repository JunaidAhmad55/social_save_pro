import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "..//components/Navbar";
import Footer from "..//components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SocialSave Pro - Download Instagram Reels & Facebook Videos",
  description: "Fast, reliable, and high-quality utility to download Instagram Reels and Facebook Videos. Secure social media content backup with SocialSave Pro.",
  keywords: ["instagram downloader", "facebook video downloader", "save instagram reels", "download facebook videos", "socialsave pro", "social media backup"],
  openGraph: {
    title: "SocialSave Pro - Social Media Downloader",
    description: "Download Instagram and Facebook content in high quality instantly.",
    type: "website",
    url: "https://socialsave.pro", // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script Placeholder */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
