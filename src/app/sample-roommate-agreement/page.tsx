
'use client';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Link from "next/link";
import { AgreementPreview } from "@/components/agreement-preview";
import type { AgreementData } from "@/lib/schema";
import { Button } from "@/components/ui/button";

const sampleData: AgreementData = {
    propertyAddress: "123 Main Street, Anytown, USA 12345",
    agreementDate: new Date("2024-01-01"),
    roommates: [{ name: "Alex Doe" }, { name: "Jordan Smith" }],
    agreementDuration: {
        startDate: new Date("2024-01-01"),
        endDate: new Date("2024-12-31"),
    },
    rent: {
        total: 2000,
        individualShares: [],
        paymentMethod: "Zelle",
        dueDate: "1st of each month",
    },
    securityDeposit: {
        total: 2000,
        individualShares: [],
        refundConditions: "To be returned within 30 days of move-out, less any costs for damages beyond normal wear and tear and any unpaid rent.",
    },
    latePaymentPolicy: "A fee of $50 will be charged if rent is more than 5 days late. An additional $10 per day will be added thereafter.",
    utilities: [
        { name: "Electricity", isShared: true, paymentMethod: "equal", payer: "Alex Doe" },
        { name: "Water", isShared: true, paymentMethod: "equal", payer: "Alex Doe" },
        { name: "Internet", isShared: true, paymentMethod: "equal", payer: "Jordan Smith" },
        { name: "Gas", isShared: true, paymentMethod: "equal", payer: "Alex Doe" },
        { name: "Trash", isShared: true, paymentMethod: "equal", payer: "Landlord Paid" },
    ],
    householdSupplies: "A shared fund of $40 ($20 per person) will be created at the beginning of each month for purchasing common household supplies like cleaning products, toilet paper, etc. Purchases will be made by whoever notices a need.",
    cleaning: {
        commonAreas: "Kitchen, Living Room, Shared Bathroom, Hallways",
        schedule: "All roommates are responsible for cleaning up after themselves immediately in common areas. A rotating weekly cleaning schedule will be followed for deep cleaning: Week 1 - Alex cleans bathroom, Jordan cleans kitchen/living room. Week 2 - Roles switch.",
    },
    guestPolicy: "Overnight guests are permitted for a maximum of 3 consecutive nights and no more than 7 nights per month per roommate. A 24-hour notice to other roommates is required.",
    noisePolicy: "Quiet hours are from 11:00 PM to 7:00 AM on weeknights (Sunday-Thursday) and 1:00 AM to 9:00 AM on weekends (Friday-Saturday).",
    partyPolicy: "Any gathering of more than 5 guests requires approval from all roommates at least 48 hours in advance. Host is responsible for all guests and cleanup.",
    petsPolicy: "No pets are allowed on the premises, temporarily or permanently, without prior written consent from all roommates and the landlord.",
    smokingAlcoholDrugsPolicy: "Smoking of any kind (including vaping) is strictly prohibited inside the apartment. Illegal drug use is forbidden on the premises.",
    sharedProperty: "Living room furniture (sofa, coffee table, TV stand) and kitchen appliances are shared property. The TV belongs to Alex Doe but may be used by all roommates respectfully.",
    borrowingPolicy: "Personal items may only be borrowed with express verbal or written permission from the owner. Items must be returned in the same condition.",
    damageAndRepairsPolicy: "Any damage caused by a roommate or their guest is the financial responsibility of that roommate. For general repairs, the landlord will be notified within 24 hours.",
    terminationNoticePeriod: 30,
    replacementRules: "A departing roommate must provide 30 days written notice. They are responsible for finding a suitable replacement roommate, who must be approved by the remaining roommates and the landlord. The departing roommate's financial obligations continue until a replacement is found and has paid their deposit and first month's rent.",
    conflictResolution: "Roommates agree to first discuss any conflicts calmly and directly. If a resolution cannot be reached, they agree to attend mediation with a neutral third party before pursuing any legal action.",
    customClauses: "1. Food designated as 'shared' will be labeled on a specific shelf in the refrigerator. All other food is considered private.\n2. The thermostat shall be kept at 68°F in the winter and 74°F in the summer, unless all roommates agree to a different temperature.",
};

export default function SampleAgreementPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                     <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">Sample Roommate Agreement</h1>
                        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
                            This is an example of a completed roommate agreement generated with our tool. See how clear and comprehensive your contract can be.
                        </p>
                    </div>

                    <div className="printable-area">
                        <AgreementPreview data={sampleData} />
                    </div>

                    <div className="text-center pt-8 border-t border-border">
                        <h2 className="text-3xl font-bold tracking-tighter">Ready to Create Yours?</h2>
                        <p className="max-w-xl mx-auto mt-4 text-muted-foreground md:text-lg">
                            It's free, fast, and covers all the important details to ensure a harmonious living situation.
                        </p>
                        <Button asChild size="lg" className="mt-6">
                            <Link href="/#generator">Generate Your Free Agreement</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
