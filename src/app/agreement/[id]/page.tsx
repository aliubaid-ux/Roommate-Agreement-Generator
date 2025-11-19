'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { AgreementData } from '@/lib/schema';
import { AgreementPreview } from '@/components/agreement-preview';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Download, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function AgreementPage() {
    const params = useParams();
    const router = useRouter();
    const { toast } = useToast();
    const [agreement, setAgreement] = useState<AgreementData | null>(null);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const id = params.id as string;
        if (!id) return;
        
        // Links are valid for 24 hours (86400000 ms)
        const timeGenerated = parseInt(id, 10);
        if (isNaN(timeGenerated) || (Date.now() - timeGenerated > 86400000)) {
            setIsExpired(true);
            return;
        }

        try {
            const data = localStorage.getItem(`agreement-${id}`);
            if (data) {
                setAgreement(JSON.parse(data));
            } else {
                setIsExpired(true); // Treat as expired if not found
            }
        } catch (error) {
            console.error("Failed to parse agreement data", error);
            setIsExpired(true);
        }
    }, [params.id]);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        toast({
            title: "Link Copied!",
            description: "The shareable link has been copied to your clipboard.",
        });
    };

    if (isExpired) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
                <Card className="max-w-md">
                    <CardContent className="p-8 space-y-4">
                        <h1 className="text-2xl font-bold">Agreement Expired</h1>
                        <p className="text-muted-foreground">
                            This agreement link was valid for 24 hours and has now expired. Please generate a new agreement.
                        </p>
                        <Button onClick={() => router.push('/')}>Create New Agreement</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
    
    if (!agreement) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p>Loading agreement...</p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex flex-col sm:flex-row gap-2 justify-between items-center no-print">
                        <h1 className="text-2xl font-bold font-headline">Your Agreement is Ready</h1>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={handleShare}><Share2 className="mr-2 h-4 w-4" /> Share</Button>
                            <Button onClick={() => window.print()} className="bg-accent hover:bg-accent/90 text-accent-foreground"><Download className="mr-2 h-4 w-4" /> Download PDF</Button>
                        </div>
                    </div>
                    <div className="printable-area">
                        <AgreementPreview data={agreement} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t no-print">
                        <p className="text-sm text-muted-foreground">Was this tool helpful?</p>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" onClick={() => toast({ title: "Thanks for your feedback!" })}><ThumbsUp className="h-4 w-4" /></Button>
                            <Button variant="outline" size="icon" onClick={() => toast({ title: "Thanks for your feedback!" })}><ThumbsDown className="h-4 w-4" /></Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
