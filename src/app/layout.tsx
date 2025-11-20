
import type { Metadata } from "next";
import { Inter, PT_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-headline',
})

export const metadata: Metadata = {
  title: "Free Roommate Agreement Generator - Create a Roommate Contract",
  description: "Generate a free Roommate Agreement contract in minutes. Define clear rules for rent, utilities, chores, guests, and more to prevent disputes and roommate drama. No sign-up required.",
  keywords: "roommate agreement, roommate contract, roommate agreement template, free roommate agreement, roommate contract template, shared housing agreement, flatmate rules contract, rent and utilities contract, co-tenant roommate agreement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased", ptSans.variable, inter.variable)} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
