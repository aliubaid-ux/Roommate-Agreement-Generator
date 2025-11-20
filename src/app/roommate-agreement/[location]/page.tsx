
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Helper to format the location slug into a readable title
function formatLocation(slug: string): string {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Dynamically generate metadata for each location
export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
    const locationName = formatLocation(params.location);
    if (!locationName) {
        return {};
    }
    return {
        title: `Free Roommate Agreement for ${locationName} | Create Contract`,
        description: `Generate a free roommate agreement tailored for ${locationName}. Create a clear contract for rent, bills, and house rules to prevent disputes.`,
        keywords: `roommate agreement ${locationName}, roommate contract ${locationName}, shared housing ${locationName}, flatmate agreement ${locationName}`,
    };
}


export default function LocationPage({ params }: { params: { location: string } }) {
    if (!params.location) {
        notFound();
    }
    const locationName = formatLocation(params.location);

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Roommate Agreement for {locationName}
                        </h1>
                        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
                            Create a free, customized roommate contract to meet the specific needs of tenants in {locationName}. Set clear rules for rent, utilities, and chores to ensure a harmonious living environment.
                        </p>
                         <Button asChild size="lg" className="mt-6">
                            <Link href="/#generator">Generate Your {locationName} Agreement</Link>
                        </Button>
                    </div>
                </section>

                 <section className="w-full py-12 md:py-24 bg-secondary/20">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why You Need a Written Agreement in {locationName}</h2>
                             <p className="mt-4 text-muted-foreground md:text-lg">
                                Whether you're in a busy city or a quiet suburb, a written roommate agreement is the best way to protect yourself and prevent common disputes. It clarifies financial responsibilities and sets house rules before they become problems.
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto mt-10 grid gap-6 md:grid-cols-2">
                             <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-primary mt-1" />
                                <div>
                                    <h3 className="font-bold">Clarify Financial Terms</h3>
                                    <p className="text-muted-foreground">Document each roommate's share of the rent and security deposit. Define how utility bills are split to avoid confusion and ensure timely payments.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-primary mt-1" />
                                <div>
                                    <h3 className="font-bold">Set House Rules</h3>
                                    <p className="text-muted-foreground">Establish clear policies for cleaning, guests, quiet hours, and parties that work for everyone sharing the space.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-primary mt-1" />
                                <div>
                                    <h3 className="font-bold">Protect Your Deposit</h3>
                                    <p className="text-muted-foreground">Outline conditions for the return of the security deposit and specify who is responsible for damages, helping ensure everyone gets their fair share back.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-primary mt-1" />
                                <div>
                                    <h3 className="font-bold">Plan for the Unexpected</h3>
                                    <p className="text-muted-foreground">An agreement can define the notice period for moving out and the process for finding a replacement, making transitions smoother.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6 text-center">
                        <div className="max-w-2xl mx-auto">
                             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Create a Peaceful Home in {locationName}?</h2>
                            <p className="mt-4 text-muted-foreground md:text-lg">
                               Our tool guides you through every essential clause. Build your free, customized roommate agreement in minutes and start your co-living experience on the right foot.
                            </p>
                            <Button asChild size="lg" className="mt-6">
                                <Link href="/#generator">Start Your Agreement Now</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
