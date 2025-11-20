
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, FileText, Hammer, Home, PartyPopper, Shield, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "What to Include in a Roommate Agreement | Essential Clauses",
    description: "A comprehensive guide on what to include in your roommate agreement. Cover rent, utilities, chores, guests, and more to create a legally-sound roommate contract.",
    keywords: "roommate agreement clauses, what to put in roommate contract, roommate agreement checklist, roommate rules template",
};

const ClauseSection = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex gap-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
            <h3 className="text-lg font-bold text-primary">{title}</h3>
            <p className="text-muted-foreground mt-1">{description}</p>
        </div>
    </div>
);


export default function WhatToIncludePage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-20 md:py-32 lg:py-40">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                                What to Include in Your Roommate Agreement
                            </h1>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                A strong roommate agreement is detailed and unambiguous. It sets clear expectations from day one to prevent future disputes. Here’s a checklist of essential clauses to include in your contract.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 bg-secondary/20">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
                            <ClauseSection 
                                icon={<FileText className="w-8 h-8 text-primary" />}
                                title="1. Basic Information"
                                description="Start with the basics: the full legal names of all roommates, the property address, and the effective start and end dates of the agreement."
                            />
                             <ClauseSection 
                                icon={<Banknote className="w-8 h-8 text-primary" />}
                                title="2. Financial Terms"
                                description="Clearly document the total rent, each person's share, the due date, and payment method. Include policies for late fees and the security deposit."
                            />
                             <ClauseSection 
                                icon={<Sparkles className="w-8 h-8 text-primary" />}
                                title="3. Utilities & Shared Expenses"
                                description="Define how bills like electricity, water, and internet are split. Create a system for purchasing shared household supplies like toilet paper and cleaning products."
                            />
                             <ClauseSection 
                                icon={<Home className="w-8 h-8 text-primary" />}
                                title="4. Cleaning & Chores"
                                description="Outline responsibilities for common areas (kitchen, living room). A rotating cleaning schedule can ensure fairness and prevent resentment."
                            />
                             <ClauseSection 
                                icon={<PartyPopper className="w-8 h-8 text-primary" />}
                                title="5. Guest & Party Policies"
                                description="Set rules for overnight guests, including how long they can stay and how much notice is required. Agree on rules for hosting parties or large gatherings."
                            />
                             <ClauseSection
                                icon={<Hammer className="w-8 h-8 text-primary" />}
                                title="6. Repairs & Damages"
                                description="Specify who is financially responsible for damages. Differentiate between normal wear and tear and damage caused by negligence."
                            />
                            <ClauseSection 
                                icon={<Shield className="w-8 h-8 text-primary" />}
                                title="7. Exit & Termination"
                                description="Detail the notice period required for moving out and the rules for finding a replacement roommate. This ensures a smooth transition."
                            />
                             <ClauseSection 
                                icon={<Users className="w-8 h-8 text-primary" />}
                                title="8. Conflict Resolution"
                                description="Establish a process for handling disagreements. Agreeing to a mediation process can help resolve disputes respectfully before they escalate."
                            />
                        </div>
                    </div>
                </section>
                
                <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6 text-center">
                        <div className="max-w-2xl mx-auto">
                             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Build a Rock-Solid Agreement?</h2>
                            <p className="mt-4 text-muted-foreground md:text-lg">
                                Our free tool walks you through every essential clause, helping you create a comprehensive roommate contract in minutes.
                            </p>
                            <Button asChild size="lg" className="mt-6">
                                <Link href="/#generator">Generate Your Free Agreement</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
