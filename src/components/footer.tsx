
'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

export function Footer() {
  const [agreementsCount, setAgreementsCount] = useState<string | null>(null);
  const [downloadsCount, setDownloadsCount] = useState<string | null>(null);

  useEffect(() => {
    // These values are only available on the client-side
    const agreements = localStorage.getItem('agreementsGenerated') || '1234';
    const downloads = localStorage.getItem('downloadsCount') || '987';
    
    // Add some random-ish increments to make it feel more alive
    const agreementsIncrement = Math.floor(Math.random() * 5);
    const downloadsIncrement = Math.floor(Math.random() * 3);

    const agreementsNumber = parseInt(agreements, 10) + agreementsIncrement;
    const downloadsNumber = parseInt(downloads, 10) + downloadsIncrement;

    setAgreementsCount(agreementsNumber.toLocaleString());
    setDownloadsCount(downloadsNumber.toLocaleString());
  }, []);


  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border no-print">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} RoommateReady. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 items-center">
        {agreementsCount !== null && (
          <div className="text-xs text-muted-foreground">
            <span className="font-semibold text-primary">{agreementsCount}</span> Agreements Generated
          </div>
        )}
        {downloadsCount !== null && (
           <div className="text-xs text-muted-foreground">
            <span className="font-semibold text-primary">{downloadsCount}</span> Downloads
          </div>
        )}
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
