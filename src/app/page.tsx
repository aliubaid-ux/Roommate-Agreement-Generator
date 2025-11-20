
'use client';

import AgreementForm from "@/components/agreement-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CheckCircle, Download, FileText, Users } from "lucide-react";
import { useEffect, useState } from "react";

function Stats() {
  const [agreementsCount, setAgreementsCount] = useState<string | null>(null);
  const [downloadsCount, setDownloadsCount] = useState<string | null>(null);

  useEffect(() => {
    // These values are only available on the client-side
    const agreements = localStorage.getItem('agreementsGenerated') || '1234';
    const downloads = localStorage.getItem('downloadsCount') || '987';
    
    const agreementsNumber = parseInt(agreements, 10);
    const downloadsNumber = parseInt(downloads, 10);

    setAgreementsCount(agreementsNumber.toLocaleString());
    setDownloadsCount(downloadsNumber.toLocaleString());
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <FileText className="w-12 h-12 text-primary" />
            <div className="text-4xl font-bold">{agreementsCount ?? '1,234+'}</div>
            <p className="text-sm text-muted-foreground">Agreements Generated</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <Download className="w-12 h-12 text-primary" />
            <div className="text-4xl font-bold">{downloadsCount ?? '987+'}</div>
            <p className="text-sm text-muted-foreground">PDF Downloads</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <Users className="w-12 h-12 text-primary" />
            <div className="text-4xl font-bold">100% Free</div>
            <p className="text-sm text-muted-foreground">No Sign-up Required</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                  Free Roommate Agreement Generator
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Create a clear, comprehensive, and legally-sound roommate contract in minutes. Prevent disputes over rent, bills, chores, and guests by setting clear expectations from the start.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg bg-secondary/50 p-6 md:p-8">
                  <h3 className="text-2xl font-bold">Why You Need a Written Roommate Agreement</h3>
                  <p className="text-muted-foreground">A roommate contract isn't just for bad roommates—it's a tool for good ones. It protects your friendship, finances, and peace of mind.</p>
                  <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Avoid Financial Disputes</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Clarify Cleaning Duties</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Set Clear Guest Policies</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Protect Your Security Deposit</li>
                  </ul>
              </div>
            </div>
          </div>
        </section>

        <Stats />

        <section id="generator" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <AgreementForm />
          </div>
        </section>

        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary/20">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Your Complete Shared Housing Solution</h2>
                  <p className="text-muted-foreground">Our free roommate agreement template covers every critical aspect of cohabitation. From rent and utility splits to overnight guest rules, we help you build a contract that leaves no room for ambiguity. A strong agreement is the foundation of a harmonious home.</p>
              </div>
              <div className="space-y-4">
                  <h3 className="font-bold text-xl">Key Clauses in Our Roommate Contract Template:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li><strong>Financial Terms:</strong> Document rent shares, security deposits, and late fee policies to ensure everyone pays their fair share on time.</li>
                      <li><strong>Utilities & Expenses:</strong> Define how to split bills like electricity, internet, and water, plus shared household supplies.</li>
                      <li><strong>Chores & Cleaning:</strong> Create a fair cleaning schedule and define responsibilities for common areas to keep your space tidy.</li>
                      <li><strong>Guests & Parties:</strong> Set clear rules for overnight guests, parties, and quiet hours to respect everyone's personal space.</li>
                      <li><strong>Move-Out Procedures:</strong> Outline the notice period and the process for finding a replacement roommate to ensure a smooth transition.</li>
                  </ul>
              </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
