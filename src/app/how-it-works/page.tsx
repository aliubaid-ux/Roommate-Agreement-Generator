
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Download, FilePen, Share2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How It Works | RoommateReady Agreement Generator",
    description: "Learn how to create a free roommate agreement in 3 simple steps: fill out the form, preview & sign, and share or download your contract.",
};

const Step = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center gap-4 p-6 bg-secondary/30 rounded-lg">
        {icon}
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

export default function HowItWorksPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                            Create Your Roommate Agreement in 3 Simple Steps
                        </h1>
                        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
                           Our intuitive generator makes it easy to build a comprehensive roommate contract. No sign-up, no hassle, no cost.
                        </p>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 bg-secondary/20">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-3">
                            <Step
                                icon={<FilePen className="w-16 h-16 text-primary" />}
                                title="Step 1: Fill Out the Form"
                                description="Answer a series of questions about your living situation. Cover everything from rent and utilities to chores and guest policies. Our form guides you through all the essential clauses."
                            />
                            <Step
                                icon={<Share2 className="w-16 h-16 text-primary" />}
                                title="Step 2: Preview & E-Sign"
                                description="Instantly generate a professional agreement based on your answers. Review the document with your roommates and use the e-signature feature to make it official."
                            />
                            <Step
                                icon={<Download className="w-16 h-16 text-primary" />}
                                title="Step 3: Share or Download"
                                description="Get a unique, shareable link that's valid for 24 hours. You can also print the agreement or save it as a PDF for your records, ensuring everyone has a copy."
                            />
                        </div>
                    </div>
                </section>
                
                 <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6 text-center">
                        <div className="max-w-2xl mx-auto">
                             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
                            <p className="mt-4 text-muted-foreground md:text-lg">
                                Prevent future conflicts by setting clear expectations today. Build your free, customized roommate agreement now.
                            </p>
                            <Button asChild size="lg" className="mt-6">
                                <Link href="/#generator">Generate Your Agreement</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
