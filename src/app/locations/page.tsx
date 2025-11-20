
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";
import Link from "next/link";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Roommate Agreement Locations | USA, UK, Canada, India & More",
    description: "Find roommate agreement templates for major cities and countries worldwide. Generate a localized contract for New York, London, Toronto, Sydney, Berlin, Dubai, and more.",
};

const locations = {
    "United States": ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Columbus", "Charlotte", "Indianapolis", "San Francisco", "Seattle", "Denver", "Boston", "Washington, D.C.", "Nashville", "Portland", "Baltimore", "Las Vegas", "Oklahoma City", "Milwaukee", "Minneapolis", "Atlanta", "Miami", "Kansas City"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Edinburgh", "Liverpool", "Bristol", "Nottingham", "Sheffield"],
    "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Hamilton", "London (Ontario)", "Mississauga"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra", "Gold Coast", "Hobart"],
    "Europe": {
        "Germany": ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart"],
        "Netherlands": ["Amsterdam", "Rotterdam", "Utrecht"],
        "France": ["Paris", "Lyon", "Marseille"],
        "Spain": ["Barcelona", "Madrid", "Valencia"]
    },
    "Middle East": ["Dubai", "Abu Dhabi", "Sharjah", "Doha", "Riyadh", "Jeddah", "Kuwait City", "Muscat"],
    "India": ["Bengaluru", "Mumbai", "Delhi", "Pune", "Hyderabad", "Chennai", "Gurgaon", "Noida", "Kolkata", "Ahmedabad"],
    "Asia": ["Singapore", "Kuala Lumpur", "Bangkok", "Tokyo", "Osaka", "Seoul", "Hong Kong"]
};

const LocationLink = ({ city }: { city: string }) => (
    <Link href={`/roommate-agreement/${slugify(city)}`} className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-2">
        {city}
    </Link>
);

const LocationSection = ({ title, cities }: { title: string, cities: string[] }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2">
            {cities.map(city => <LocationLink key={city} city={city} />)}
        </div>
    </div>
);

export default function LocationsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                            Roommate Agreements Worldwide
                        </h1>
                        <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl">
                            We provide roommate agreement templates tailored for cities and countries across the globe. Find your location and create a localized contract to ensure a smooth living experience, no matter where you are.
                        </p>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 bg-secondary/20">
                    <div className="container px-4 md:px-6">
                        <Card className="p-6 sm:p-10">
                            <LocationSection title="United States" cities={locations["United States"]} />
                            <LocationSection title="United Kingdom" cities={locations["United Kingdom"]} />
                            <LocationSection title="Canada" cities={locations["Canada"]} />
                            <LocationSection title="Australia" cities={locations["Australia"]} />
                             <LocationSection title="India" cities={locations["India"]} />
                            <LocationSection title="Middle East" cities={locations["Middle East"]} />
                            <LocationSection title="Asia" cities={locations["Asia"]} />

                            <div>
                                <h3 className="text-2xl font-bold mb-4">Europe</h3>
                                 <div className="pl-4 border-l-2 border-border">
                                    <LocationSection title="Germany" cities={locations.Europe.Germany} />
                                    <LocationSection title="Netherlands" cities={locations.Europe.Netherlands} />
                                    <LocationSection title="France" cities={locations.Europe.France} />
                                    <LocationSection title="Spain" cities={locations.Europe.Spain} />
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
