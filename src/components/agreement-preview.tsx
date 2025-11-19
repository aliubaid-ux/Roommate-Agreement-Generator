import type { AgreementData } from "@/lib/schema";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface AgreementPreviewProps {
  data: AgreementData;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold font-headline border-b pb-2 mb-3">{title}</h2>
    <div className="space-y-3 text-sm text-foreground/90">{children}</div>
  </div>
);

const Clause: React.FC<{ label: string; value?: string | number | null }> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div>
      <h3 className="font-semibold">{label}</h3>
      <p className="whitespace-pre-wrap">{value}</p>
    </div>
  );
};


export function AgreementPreview({ data }: AgreementPreviewProps) {
    const roommateNames = data.roommates.map(r => r.name).join(', ');

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center border-b">
        <CardTitle className="text-3xl font-bold font-headline">Roommate Agreement</CardTitle>
        <p className="text-muted-foreground">
          Effective Date: {data.agreementDate ? format(new Date(data.agreementDate), "MMMM d, yyyy") : 'N/A'}
        </p>
      </CardHeader>
      <CardContent className="p-6 md:p-10">
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
                <h3 className="font-semibold">Utilities</h3>
                <ul className="list-disc pl-5 mt-1 space-y-1">
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

        <Section title="5. General Policies">
            <Clause label="Guest Policy" value={data.guestPolicy} />
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
             <Section title="9. Custom Clauses">
                <p className="whitespace-pre-wrap">{data.customClauses}</p>
            </Section>
        )}

        <div className="mt-12 pt-6 border-t">
            <h2 className="text-xl font-bold font-headline mb-4">Signatures</h2>
            <p className="text-sm text-muted-foreground mb-8">By signing below, the roommates acknowledge that they have read, understood, and agree to the terms of this Agreement.</p>
            <div className="space-y-8">
                {data.roommates.map(r => (
                    <div key={r.name} className="flex gap-4 items-end">
                        <div className="flex-grow border-b border-foreground"></div>
                        <div className="text-center">
                            <p className="font-semibold">{r.name}</p>
                            <p className="text-xs text-muted-foreground">Signature</p>
                        </div>
                        <div className="flex-grow border-b border-foreground"></div>
                         <div className="text-center">
                            <p className="font-semibold">{format(new Date(), "MMMM d, yyyy")}</p>
                            <p className="text-xs text-muted-foreground">Date</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="text-center mt-12 text-xs text-muted-foreground">
            <p>Generated by RoommateReady</p>
        </div>
      </CardContent>
    </Card>
  );
}
