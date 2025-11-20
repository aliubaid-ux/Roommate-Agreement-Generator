
'use client';
import type { AgreementData } from "@/lib/schema";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AgreementPreviewProps {
  data: AgreementData;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2 mb-4 text-primary">{title}</h2>
    <div className="space-y-4 text-sm text-foreground/90">{children}</div>
  </div>
);

const Clause: React.FC<{ label: string; value?: string | number | null }> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div>
      <h3 className="font-semibold text-base mb-1">{label}</h3>
      <p className="whitespace-pre-wrap pl-4 border-l-2 border-border">{value}</p>
    </div>
  );
};

type SignaturesState = {
    [key: string]: { signature: string; date: string | null };
};

export function AgreementPreview({ data }: AgreementPreviewProps) {
    const roommateNames = data.roommates.filter(r => r.name).map(r => r.name).join(', ');
    const [signatures, setSignatures] = useState<SignaturesState>({});

    useEffect(() => {
        const initialSignatures: SignaturesState = {};
        data.roommates.forEach(r => {
            if (r.name) {
                initialSignatures[r.name] = { signature: "", date: null };
            }
        });
        setSignatures(initialSignatures);
    }, [data.roommates]);

    const handleSignatureChange = (name: string, signature: string) => {
        setSignatures(prev => ({
            ...prev,
            [name]: {
                signature,
                date: signature ? format(new Date(), "MMMM d, yyyy") : null,
            }
        }));
    };
    
    const clearSignatures = () => {
        const clearedSignatures: SignaturesState = {};
        data.roommates.forEach(r => {
            if (r.name) {
                clearedSignatures[r.name] = { signature: "", date: null };
            }
        });
        setSignatures(clearedSignatures);
    };

  return (
    <Card className="shadow-2xl rounded-lg border-2 border-border bg-background">
      <CardHeader className="text-center border-b border-border bg-secondary/20 p-8">
        <CardTitle className="text-4xl font-bold text-primary">Roommate Agreement</CardTitle>
        <p className="text-muted-foreground pt-1">
          Effective Date: {data.agreementDate ? format(new Date(data.agreementDate), "MMMM d, yyyy") : 'N/A'}
        </p>
      </CardHeader>
      <CardContent className="p-8 md:p-12">
        <Section title="1. Parties & Premises">
            <p>This Roommate Agreement (the "Agreement") is made and entered into on {data.agreementDate ? format(new Date(data.agreementDate), "MMMM d, yyyy") : 'N/A'}, by and between the following roommates: <strong>{roommateNames}</strong>.</p>
            <p>The roommates agree to share the premises located at: <strong>{data.propertyAddress}</strong> (the "Premises").</p>
            <p>The term of this agreement runs from <strong>{data.agreementDuration.startDate ? format(new Date(data.agreementDuration.startDate), "MMMM d, yyyy") : 'N/A'}</strong> to <strong>{data.agreementDuration.endDate ? format(new Date(data.agreementDuration.endDate), "MMMM d, yyyy") : 'N/A'}</strong>.</p>
        </Section>
        
        <Section title="2. Financial Terms">
            <Clause label="Rent" value={`The total monthly rent for the Premises is $${data.rent.total}. Payment is due on the ${data.rent.dueDate} via ${data.rent.paymentMethod}.`} />
            <Clause label="Late Payment Policy" value={data.latePaymentPolicy} />
            <Clause label="Security Deposit" value={`A total security deposit of $${data.securityDeposit.total} has been paid.`} />
            <Clause label="Deposit Refund Conditions" value={data.securityDeposit.refundConditions} />
        </Section>

        <Section title="3. Shared Expenses">
            <div>
                <h3 className="font-semibold text-base mb-2">Utilities</h3>
                <ul className="list-disc pl-5 mt-1 space-y-2">
                    {data.utilities.filter(u => u.isShared).map(u => (
                        <li key={u.name}>{u.name}: To be split {u.paymentMethod}. {u.payer && `The bill will be paid by ${u.payer}.`}</li>
                    ))}
                </ul>
            </div>
            <Clause label="Household Supplies" value={data.householdSupplies} />
        </Section>

        <Section title="4. Cleaning & Chores">
            <Clause label="Common Areas" value={data.cleaning.commonAreas} />
            <Clause label="Cleaning Schedule" value={data.cleaning.schedule} />
        </Section>

        <Section title="5. Conduct & Policies">
            <Clause label="Guest Policy" value={data.guestPolicy} />
            <Clause label="Party Rules" value={data.partyPolicy} />
            <Clause label="Noise & Quiet Hours" value={data.noisePolicy} />
            <Clause label="Pets Policy" value={data.petsPolicy} />
            <Clause label="Smoking, Alcohol, and Drugs" value={data.smokingAlcoholDrugsPolicy} />
        </Section>
        
        <Section title="6. Property & Belongings">
            <Clause label="Shared Property" value={data.sharedProperty} />
            <Clause label="Borrowing Personal Items" value={data.borrowingPolicy} />
            <Clause label="Damage and Repairs" value={data.damageAndRepairsPolicy} />
        </Section>
        
        <Section title="7. Termination & Exit">
            <Clause label="Move-out Notice" value={`A notice period of ${data.terminationNoticePeriod} days is required to move out.`} />
            <Clause label="Replacement Roommate Rules" value={data.replacementRules} />
        </Section>
        
        <Section title="8. Conflict Resolution">
            <Clause label="Procedure" value={data.conflictResolution} />
        </Section>

        {data.customClauses && (
             <Section title="9. Additional Clauses">
                <p className="whitespace-pre-wrap">{data.customClauses}</p>
            </Section>
        )}

        <div className="mt-12 pt-8 border-t border-border no-print">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-primary">E-Signatures</h2>
                <Button variant="outline" size="sm" onClick={clearSignatures}>Clear Signatures</Button>
            </div>
            <p className="text-sm text-muted-foreground mb-6">By typing your name below, you acknowledge that you have read, understood, and agree to the terms of this Roommate Agreement. This constitutes a legal and binding electronic signature.</p>
            <div className="space-y-6">
                {data.roommates.map(r => {
                    if (!r.name) return null;
                    return (
                        <div key={r.name} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                            <div className="md:col-span-2">
                                <label htmlFor={`signature-${r.name}`} className="text-sm font-medium">{r.name}</label>
                                <Input
                                    id={`signature-${r.name}`}
                                    type="text"
                                    placeholder={`Type '${r.name}' to sign`}
                                    value={(signatures[r.name]?.signature) || ''}
                                    onChange={(e) => handleSignatureChange(r.name, e.target.value)}
                                    className="mt-1 font-serif text-lg bg-input"
                                    disabled={signatures[r.name]?.signature === r.name}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Date</label>
                                <p className="h-10 border-b border-border mt-1 flex items-center px-3 text-muted-foreground text-sm">
                                    {(signatures[r.name]?.date) || '---'}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        <div className="mt-12 pt-6 border-t border-foreground print-signatures">
             <h2 className="text-xl font-bold mb-4">Signatures</h2>
            <p className="text-sm text-muted-foreground mb-8">By signing below, the roommates acknowledge that they have read, understood, and agree to the terms of this Agreement.</p>
            <div className="space-y-8">
                {data.roommates.map(r => {
                    if (!r.name) return null;
                    return (
                        <div key={r.name} className="grid grid-cols-2 gap-8 items-end">
                        <div>
                                <p className="font-serif text-lg border-b border-foreground pb-1">
                                    {signatures[r.name]?.signature === r.name ? `/e-signed/ ${r.name}` : ''}
                                </p>
                                <p className="text-xs text-muted-foreground pt-1">Signature ({r.name})</p>
                            </div>
                            <div>
                                <p className="font-sans border-b border-foreground pb-1 h-8">
                                    {signatures[r.name]?.date}
                                </p>
                                <p className="text-xs text-muted-foreground pt-1">Date</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>


        <div className="text-center mt-12 text-xs text-muted-foreground">
            <p>Generated by RoommateReady</p>
        </div>
      </CardContent>
    </Card>
  );
}
