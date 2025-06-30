import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Loader from "@/components/loader";
import HamburgerMenu from "@/components/hamburger-menu";
import Logo from "@/components/logo";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tursunaliyev",
  description: "Portfolio of Tursunaliyev",
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
        <Loader />

        <div className=" fixed top-0 left-0 z-50 w-full">
          <Logo />
          <HamburgerMenu />
          <ToastContainer />
        </div>
        {children}
      </body>
    </html>
  );
}
