
import { Home } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background border-b border-border no-print">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Home className="h-6 w-6 text-primary" />
        <span className="ml-3 text-xl font-bold font-headline">RoommateReady</span>
      </Link>
    </header>
  );
}
