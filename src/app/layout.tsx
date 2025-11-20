
import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

export const metadata: Metadata = {
  title: "Free Roommate Agreement Generator - Create a Roommate Contract",
  description: "Generate a free Roommate Agreement contract in minutes. Define clear rules for rent, utilities, chores, guests, and more to prevent disputes and roommate drama. No sign-up required.",
  keywords: "roommate agreement, roommate contract template, shared housing agreement, flatmate rules contract, rent and utilities contract, co-tenant roommate agreement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased", ptSans.variable)} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
