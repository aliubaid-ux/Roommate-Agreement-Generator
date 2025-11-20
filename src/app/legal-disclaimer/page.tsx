
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal Disclaimer | RoommateReady",
    description: "Our roommate agreement generator is for informational purposes only and does not provide legal advice. Consult with a qualified attorney.",
};

export default function LegalDisclaimerPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12 px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-8 prose prose-invert">
                    <h1 className="text-4xl font-bold">Legal Disclaimer</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <h2 className="text-2xl font-semibold">Not Legal Advice</h2>
                    <p>RoommateReady is a software tool designed to help users create their own roommate agreements. We are not a law firm, and the information, templates, and documents provided on this website are for informational purposes only. They are not intended to be a substitute for professional legal advice.</p>
                    <p>The law regarding cohabitation and tenant rights varies significantly by jurisdiction. An agreement that is enforceable in one state or city may not be in another. Using our service does not create an attorney-client relationship.</p>

                    <h2 className="text-2xl font-semibold">No Warranty of Enforceability</h2>
                    <p>While a signed roommate agreement can often be a legally binding contract, RoommateReady makes no warranty or guarantee about the legal validity or enforceability of any document created with our tool. The responsibility for ensuring that your agreement is legally sound and meets your specific needs rests entirely with you.</p>

                    <h2 className="text-2xl font-semibold">Consult an Attorney</h2>
                    <p>We strongly recommend that you consult with a qualified attorney licensed to practice in your jurisdiction before finalizing any legal document. An attorney can review your agreement, provide advice tailored to your situation, and ensure compliance with all applicable laws and regulations.</p>

                    <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
                    <p>By using RoommateReady, you agree that we are not liable for any claims, damages, or disputes arising from your use of the generated agreements. You assume full responsibility for any risks associated with creating and entering into a roommate contract.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
