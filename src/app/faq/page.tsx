
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Roommate Agreement FAQ | Answers to Common Questions",
    description: "Find answers to frequently asked questions about roommate agreements. Learn about rent payments, security deposits, legal validity, guests, and more.",
};

export default function FaqPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-20 md:py-32 lg:py-40">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                                Frequently Asked Questions
                            </h1>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                Have questions about roommate agreements? We have answers. Here are some of the most common questions we see from roommates.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 bg-secondary/20">
                    <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg">Do roommate agreements hold up in court?</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    Yes, a signed roommate agreement can be a legally binding contract. While enforcement can vary by jurisdiction, courts generally recognize written agreements between co-tenants. It serves as strong evidence of the agreed-upon terms, especially for financial disputes over rent or security deposits. We always recommend consulting with a local attorney for specific legal advice.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg">What happens if my roommate doesn't pay their share of the rent?</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    This is a common and serious issue. If your roommate fails to pay, you are likely still responsible for the full rent amount to the landlord. Your roommate agreement can be used to sue your roommate in small claims court to recover their unpaid share. The agreement makes their financial obligation clear.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg">Should a roommate pay utilities if they are away for a long time?</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    This should be defined in your agreement. Typically, fixed costs like internet are split regardless of presence. For variable utilities like electricity or gas, you can agree on a different split if someone is absent for an extended period (e.g., more than two weeks). The key is to decide this in advance.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg">Can a roommate's partner move in without paying rent?</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    No, not without the consent of all other roommates and, most likely, the landlord. Your agreement's guest policy should specify limits for how long guests can stay. If a guest becomes a de-facto resident, they should be added to the lease and contribute to rent and utilities. The agreement protects you from this scenario.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-5">
                                <AccordionTrigger className="text-lg">How should we split the security deposit refund?</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    The security deposit refund should be split according to the initial contributions. If one roommate caused specific damages beyond normal wear and tear, the cost of repairs for that damage should be deducted from their share of the deposit first. Your agreement should outline this process.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
