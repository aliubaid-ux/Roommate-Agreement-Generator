
'use client';
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col gap-8 py-8 w-full shrink-0 px-4 md:px-6 border-t border-border no-print">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
            <h3 className="font-bold text-sm mb-2 text-foreground">Generator</h3>
            <nav className="flex flex-col gap-2">
                <Link href="/#generator" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>Create Agreement</Link>
                <Link href="/how-it-works" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>How It Works</Link>
                <Link href="/sample-roommate-agreement" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>Sample Agreement</Link>
            </nav>
        </div>
         <div>
            <h3 className="font-bold text-sm mb-2 text-foreground">Resources</h3>
            <nav className="flex flex-col gap-2">
                <Link href="/blog" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>Blog</Link>
                <Link href="/faq" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>FAQ</Link>
                <Link href="/what-to-include" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>What to Include</Link>
                <Link href="/templates" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>Templates</Link>
            </nav>
        </div>
        <div>
            <h3 className="font-bold text-sm mb-2 text-foreground">Company</h3>
            <nav className="flex flex-col gap-2">
                 <Link href="/about" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>About Us</Link>
                 <Link href="/#generator" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>Contact (Coming Soon)</Link>
                 <Link href="/locations" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>Locations</Link>
            </nav>
        </div>
         <div>
            <h3 className="font-bold text-sm mb-2 text-foreground">Legal</h3>
            <nav className="flex flex-col gap-2">
                <Link href="/legal-disclaimer" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>Legal Disclaimer</Link>
                <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>Terms of Service</Link>
                <Link href="/privacy" className="text-xs text-muted-foreground hover:underline underline-offset-4" prefetch={false}>Privacy Policy</Link>
            </nav>
        </div>
      </div>
      <div className="flex items-center justify-center pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} RoommateReady. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
