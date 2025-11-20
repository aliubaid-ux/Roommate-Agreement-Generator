
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | RoommateReady",
    description: "Read the Privacy Policy for RoommateReady. We are committed to protecting your data and being transparent about how we handle information.",
};

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12 px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-8 prose prose-invert">
                    <h1 className="text-4xl font-bold">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <p>Welcome to RoommateReady. We are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our roommate agreement generator.</p>

                    <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
                    <p>We do not require you to create an account or provide any personal information to use our service. The information you enter into the agreement form is processed as follows:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Agreement Data:</strong> The data you enter (names, addresses, rules) is used solely to generate your roommate agreement.</li>
                        <li><strong>Usage Metrics:</strong> We may count anonymous events, like the number of agreements generated or downloaded, to understand how our tool is used. This data is completely anonymous and cannot be tied to any individual.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">2. Data Storage and Retention</h2>
                    <p>To provide you with a shareable link, the data from your generated agreement is stored temporarily. Here’s how it works:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Local Storage:</strong> The primary copy of your agreement data is stored in your browser's local storage.</li>
                        <li><strong>Temporary Link:</strong> When you generate an agreement, a unique link is created. This link is valid for 24 hours. After 24 hours, the link expires, and the data becomes inaccessible.</li>
                        <li><strong>No Long-Term Storage:</strong> We do not store your agreement data on our servers long-term. Your privacy is paramount.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">3. Data Security</h2>
                    <p>We take reasonable measures to protect the information you provide. Our website uses SSL/HTTPS to encrypt data transmitted between your browser and our server.</p>
                    
                    <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
                    <p>We do not share your data with any third-party services for marketing or advertising purposes.</p>

                    <h2 className="text-2xl font-semibold">5. Your Rights</h2>
                    <p>Since we do not maintain user accounts or store personal information long-term, you have control over your data. You can clear your browser's local storage at any time to remove any saved agreement data.</p>
                    
                    <h2 className="text-2xl font-semibold">6. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

                    <h2 className="text-2xl font-semibold">7. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please feel free to contact us.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
