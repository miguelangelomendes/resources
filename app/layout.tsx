import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-smartbanner/dist/main.css";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable}`}>
      <head>
        <meta name="apple-itunes-app" content="app-id=284882215" />
        <meta name="google-play-app" content="app-id=com.facebook.katana" />
        <meta name="msApplication-ID" content="82a23635-5bd9-df11-a844-00237de2db9e" />
        <meta name="msApplication-PackageFamilyName" content="facebook_9wzdncrfhv5g" />
        <link rel="apple-touch-icon" href="icon.png" />
        <link rel="android-touch-icon" href="icon.png" />
        <link rel="windows-touch-icon" href="icon.png" />
      </head>
      <body className="custom-scrollbar min-h-screen overflow-x-hidden bg-background">{children}</body>
    </html>
  );
}
