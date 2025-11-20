
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | RoommateReady",
    description: "Read the Terms of Service for RoommateReady. By using our free roommate agreement generator, you agree to these terms.",
};

export default function TermsOfServicePage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12 px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-8 prose prose-invert">
                    <h1 className="text-4xl font-bold">Terms of Service</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <p>Please read these Terms of Service ("Terms") carefully before using the RoommateReady website (the "Service") operated by us.</p>
                    <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
                    
                    <h2 className="text-2xl font-semibold">1. Disclaimer of Legal Advice</h2>
                    <p>RoommateReady is not a law firm and does not provide legal advice. The roommate agreement generator, templates, and all other content on this site are for informational purposes only. The documents and information are not a substitute for legal advice from a qualified attorney licensed in your jurisdiction.</p>
                    <p>We strongly recommend that you consult with a lawyer to ensure that any agreement you create meets your specific legal needs and is enforceable in your area.</p>

                    <h2 className="text-2xl font-semibold">2. Use of the Service</h2>
                    <p>Our service allows you to generate a roommate agreement based on the information you provide. You are responsible for the accuracy and completeness of the data you enter.</p>
                    <p>You agree not to use the Service for any unlawful purpose or to create any document that violates local, state, or federal laws.</p>
                    
                    <h2 className="text-2xl font-semibold">3. No Warranty</h2>
                    <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, regarding the accuracy, reliability, or completeness of the content and materials on the Service. We disclaim all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

                    <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
                    <p>In no event shall RoommateReady, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                    <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
                    <p>The Service and its original content, features, and functionality are and will remain the exclusive property of RoommateReady and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

                    <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>

                    <h2 className="text-2xl font-semibold">7. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
