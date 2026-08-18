import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/reduxProvider/StoreProvider";
import Navbar from "@/Components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn Redux Toolkit",
  description: "A step-by-step guide to Redux Toolkit — from store setup to reading and dispatching state, with practical Next.js App Router examples.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <StoreProvider>
        <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
          </body>
      </StoreProvider>
    </html>
  );
}
