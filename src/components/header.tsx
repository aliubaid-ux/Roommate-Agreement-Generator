
import { Home } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-card shadow-sm no-print">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Home className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-semibold font-headline">Roommate Agreement Generator</span>
      </Link>
    </header>
  );
}
