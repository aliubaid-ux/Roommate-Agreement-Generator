
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { File, FileText, Home, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Roommate Agreement Templates | Free & Customizable Contracts",
    description: "Browse free roommate agreement templates for any living situation: 2 roommates, 3 roommates, couples, and more. Customize and download your contract in minutes.",
};

const templates = [
    {
        title: "Basic Roommate Agreement",
        description: "A simple, one-page agreement covering the most essential terms like rent, utilities, and house rules. Perfect for a straightforward living situation.",
        icon: <FileText className="w-10 h-10 text-primary" />,
    },
    {
        title: "Detailed Roommate Agreement",
        description: "A comprehensive contract covering everything from chores and guests to quiet hours and conflict resolution. Recommended for most roommates.",
        icon: <File className="w-10 h-10 text-primary" />,
    },
    {
        title: "Agreement for 2 Roommates",
        description: "A template specifically designed for two people sharing a space. Clearly defines financial and living responsibilities between two co-tenants.",
        icon: <Users className="w-10 h-10 text-primary" />,
    },
    {
        title: "Agreement for 3+ Roommates",
        description: "Manage a household with multiple roommates. This template helps organize complex chore schedules and financial splits for larger groups.",
        icon: <Users className="w-10 h-10 text-primary" />,
    },
    {
        title: "Agreement for Couples",
        description: "A template for when one or more roommates are in a relationship, addressing common issues like shared space and overnight guest policies for partners.",
        icon: <Users className="w-10 h-10 text-primary" />,
    },
    {
        title: "Shared Utilities Agreement",
        description: "A focused agreement just for managing shared bills like electricity, water, and internet. Use it standalone or as part of a larger agreement.",
        icon: <Home className="w-10 h-10 text-primary" />,
    },
]

export default function TemplatesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                            Roommate Agreement Templates
                        </h1>
                        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
                            Find the perfect roommate contract for your living situation. Our templates are customizable, easy to use, and completely free.
                        </p>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 bg-secondary/20">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3">
                            {templates.map((template) => (
                                <Card key={template.title} className="flex flex-col">
                                    <CardHeader className="items-center text-center">
                                        {template.icon}
                                        <CardTitle className="mt-4">{template.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-center">{template.description}</CardDescription>
                                    </CardContent>
                                    <div className="p-6 pt-0">
                                        <Button asChild className="w-full">
                                            <Link href="/#generator">Customize Template</Link>
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                 <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6 text-center">
                        <div className="max-w-2xl mx-auto">
                             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Don't See What You Need?</h2>
                            <p className="mt-4 text-muted-foreground md:text-lg">
                                Our powerful generator lets you build a fully custom roommate agreement from scratch. Add your own clauses and tailor every detail.
                            </p>
                            <Button asChild size="lg" className="mt-6">
                                <Link href="/#generator">Create a Custom Agreement</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
