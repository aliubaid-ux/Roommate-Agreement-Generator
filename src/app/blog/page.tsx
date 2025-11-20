
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Roommate Agreement Blog | Tips for Harmonious Living",
    description: "Our blog provides advice, guides, and tips for roommates. Learn how to handle common conflicts, split rent fairly, and create effective roommate contracts.",
};

const blogPosts = [
    {
        title: "Top 10 Roommate Conflicts & How to Avoid Them",
        description: "From dirty dishes to overdue bills, we break down the most common roommate disputes and show you how a clear agreement can prevent them before they start.",
        link: "#", // In the future, this would be a real link e.g. /blog/top-10-conflicts
        date: "Coming Soon"
    },
    {
        title: "How to Split Rent Fairly: A Complete Guide",
        description: "Splitting rent isn't always about a 50/50 division. We explore different methods for splitting rent based on room size, income, and other factors.",
         link: "#",
        date: "Coming Soon"
    },
    {
        title: "Guest Policy Rules Every Shared House Should Have",
        description: "Overnight guests can be a major source of tension. Learn how to set fair and clear guest policies that respect everyone's space and comfort.",
         link: "#",
        date: "Coming Soon"
    },
    {
        title: "How to Write a Chore Schedule That Actually Works",
        description: "Tired of arguing about who's turn it is to clean the bathroom? We provide templates and strategies for creating a chore schedule that keeps your home tidy and conflict-free.",
         link: "#",
        date: "Coming Soon"
    }
]

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-20 md:py-32 lg:py-40">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                                The RoommateReady Blog
                            </h1>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                Advice, guides, and tips for creating a harmonious and conflict-free living situation with your roommates.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 bg-secondary/20">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2">
                            {blogPosts.map((post) => (
                                <Card key={post.title} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle>{post.title}</CardTitle>
                                        <CardDescription>{post.date}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{post.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild variant="outline" className="w-full" disabled>
                                            <Link href={post.link}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
