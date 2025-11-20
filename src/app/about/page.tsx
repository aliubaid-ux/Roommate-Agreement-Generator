
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, FileText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About RoommateReady | Our Mission to Prevent Roommate Conflicts",
    description: "Learn about RoommateReady's mission to help roommates prevent disputes by creating clear, comprehensive, and free roommate agreements. Find out why we built this tool.",
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-20 md:py-32 lg:py-40">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                                Preventing Roommate Drama, One Agreement at a Time
                            </h1>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                RoommateReady was born from a simple idea: clear communication is the key to a harmonious home. We believe that a well-drafted roommate agreement is the best way to prevent conflicts over rent, chores, and everything in between.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 bg-secondary/20">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                            <div className="flex flex-col items-center text-center gap-4">
                                <FileText className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Comprehensive & Free</h3>
                                <p className="text-muted-foreground">
                                    We cover all the essential clauses you need, from financial terms to guest policies, completely free of charge. No hidden fees, no sign-ups required.
                                </p>
                            </div>
                             <div className="flex flex-col items-center text-center gap-4">
                                <Users className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Built for Roommates</h3>
                                <p className="text-muted-foreground">
                                    Our tool is designed based on real-world roommate problems and legal templates to ensure your contract is practical and effective.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center gap-4">
                                <Shield className="w-12 h-12 text-primary" />
                                <h3 className="text-xl font-bold">Private & Secure</h3>
                                <p className="text-muted-foreground">
                                    Your agreement is yours. We store it temporarily for 24 hours for you to share, then it's gone forever. We respect your privacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6 text-center">
                        <div className="max-w-2xl mx-auto">
                             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Create a Harmonious Home?</h2>
                            <p className="mt-4 text-muted-foreground md:text-lg">
                                Build your free roommate agreement today and set the foundation for a great co-living experience. It only takes a few minutes.
                            </p>
                            <Button asChild size="lg" className="mt-6">
                                <Link href="/#generator">Create Your Agreement Now</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
