
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/what-to-include", label: "What to Include" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
];

export function NavMenu() {
    const pathname = usePathname();

    return (
        <>
            {/* Desktop Menu */}
            <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
                {mainNavLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            "text-sm font-medium hover:underline underline-offset-4",
                            pathname === href ? "text-primary" : "text-muted-foreground"
                        )}
                        prefetch={false}
                    >
                        {label}
                    </Link>
                ))}
                 <Button asChild>
                    <Link href="/#generator">Create Agreement</Link>
                </Button>
            </nav>
            
            {/* Mobile Menu */}
            <div className="ml-auto md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-4 w-4" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="grid gap-6 text-lg font-medium mt-8">
                             {mainNavLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={cn(
                                        "hover:text-primary",
                                        pathname === href ? "text-primary" : "text-muted-foreground"
                                    )}
                                    prefetch={false}
                                >
                                    {label}
                                </Link>
                            ))}
                             <Button asChild size="lg" className="mt-4">
                                <Link href="/#generator">Create Agreement</Link>
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
