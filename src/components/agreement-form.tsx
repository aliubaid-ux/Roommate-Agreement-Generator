
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import type { AgreementData } from "@/lib/schema";
import { agreementSchema } from "@/lib/schema";
import { useRouter } from "next/navigation";
import {
  Banknote,
  CalendarIcon,
  FilePlus2,
  Hammer,
  Home,
  LogOut,
  PartyPopper,
  PlusCircle,
  Receipt,
  Shield,
  Trash2,
  Users,
  Volume2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const UTILITY_OPTIONS = ["Electricity", "Water", "Internet", "Gas", "Trash"];

export default function AgreementForm() {
  const router = useRouter();
  const form = useForm<AgreementData>({
    resolver: zodResolver(agreementSchema),
    defaultValues: {
      agreementDate: new Date(),
      roommates: [{ name: "" }],
      rent: { individualShares: [], paymentMethod: "Bank Transfer", dueDate: "1st of the month" },
      securityDeposit: { individualShares: [] },
      utilities: UTILITY_OPTIONS.map(name => ({ name, isShared: true, paymentMethod: 'equal' })),
      cleaning: { commonAreas: "Kitchen, Living Room, Bathroom(s)" },
      terminationNoticePeriod: 30,
      conflictResolution: "In case of a disagreement, roommates agree to discuss the issue respectfully. If a resolution cannot be reached, they will seek mediation.",
    },
  });

  const { fields: roommates, append: appendRoommate, remove: removeRoommate } = useFieldArray({
    control: form.control,
    name: "roommates",
  });

  const { fields: utilities, update: updateUtility } = useFieldArray({
    control: form.control,
    name: "utilities",
  });

  function onSubmit(data: AgreementData) {
    const id = Date.now().toString();
    try {
      localStorage.setItem(`agreement-${id}`, JSON.stringify(data));
      router.push(`/agreement/${id}`);
    } catch (error) {
      console.error("Could not save agreement to local storage.", error);
      form.setError("root", { type: "storage", message: "Failed to save agreement. Your browser storage might be full or disabled." });
    }
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Create Your Agreement</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Accordion type="multiple" defaultValue={["basic-info"]} className="w-full">
              <AccordionItem value="basic-info">
                <AccordionTrigger className="text-lg font-semibold"><Users className="mr-2 h-5 w-5 text-primary" />Basic Info</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  {/* Form fields for basic info */}
                  <FormField control={form.control} name="propertyAddress" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Address</FormLabel>
                      <FormControl><Input placeholder="123 Main St, Anytown, USA" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField control={form.control} name="agreementDate" render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Agreement Date</FormLabel>
                        <Popover><PopoverTrigger asChild><FormControl><Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}><CalendarIcon className="mr-2 h-4 w-4" />{field.value ? format(field.value, "PPP") : <span>Pick a date</span>}</Button></FormControl></PopoverTrigger><PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus /></PopoverContent></Popover>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="agreementDuration.startDate" render={({ field }) => (
                       <FormItem className="flex flex-col">
                        <FormLabel>Start Date</FormLabel>
                        <Popover><PopoverTrigger asChild><FormControl><Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}><CalendarIcon className="mr-2 h-4 w-4" />{field.value ? format(field.value, "PPP") : <span>Pick a date</span>}</Button></FormControl></PopoverTrigger><PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date("1900-01-01")} initialFocus /></PopoverContent></Popover>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="agreementDuration.endDate" render={({ field }) => (
                       <FormItem className="flex flex-col">
                        <FormLabel>End Date</FormLabel>
                        <Popover><PopoverTrigger asChild><FormControl><Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}><CalendarIcon className="mr-2 h-4 w-4" />{field.value ? format(field.value, "PPP") : <span>Pick a date</span>}</Button></FormControl></PopoverTrigger><PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date("1900-01-01")} initialFocus /></PopoverContent></Popover>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>Roommates</FormLabel>
                    {roommates.map((field, index) => (
                      <div key={field.id} className="flex items-center gap-2">
                        <FormField control={form.control} name={`roommates.${index}.name`} render={({ field }) => (
                          <FormItem className="flex-grow"><FormControl><Input placeholder={`Roommate ${index + 1} Name`} {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeRoommate(index)} disabled={roommates.length <= 1}><X className="h-4 w-4" /></Button>
                      </div>
                    ))}
                    <Button type="button" variant="outline" size="sm" onClick={() => appendRoommate({ name: "" })}><PlusCircle className="mr-2 h-4 w-4" />Add Roommate</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="financial">
                <AccordionTrigger className="text-lg font-semibold"><Banknote className="mr-2 h-5 w-5 text-primary" />Financial Terms</AccordionTrigger>
                <AccordionContent className="space-y-6 pt-4">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField control={form.control} name="rent.total" render={({ field }) => ( <FormItem><FormLabel>Total Monthly Rent</FormLabel><FormControl><Input type="number" placeholder="2000" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} /></FormControl><FormMessage /></FormItem> )} />
                      <FormField control={form.control} name="rent.paymentMethod" render={({ field }) => ( <FormItem><FormLabel>Payment Method</FormLabel><FormControl><Input placeholder="e.g., Venmo, Zelle" {...field} /></FormControl><FormMessage /></FormItem> )} />
                      <FormField control={form.control} name="rent.dueDate" render={({ field }) => ( <FormItem><FormLabel>Rent Due Date</FormLabel><FormControl><Input placeholder="e.g., 1st of the month" {...field} /></FormControl><FormMessage /></FormItem> )} />
                   </div>
                    <FormField control={form.control} name="latePaymentPolicy" render={({ field }) => ( <FormItem><FormLabel>Late Payment Policy</FormLabel><FormControl><Textarea placeholder="e.g., A fee of $50 will be charged if rent is more than 5 days late." {...field} /></FormControl><FormMessage /></FormItem> )} />
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="securityDeposit.total" render={({ field }) => ( <FormItem><FormLabel>Total Security Deposit</FormLabel><FormControl><Input type="number" placeholder="2000" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="securityDeposit.refundConditions" render={({ field }) => ( <FormItem><FormLabel>Deposit Refund Conditions</FormLabel><FormControl><Textarea placeholder="e.g., To be returned within 30 days of move-out, less any costs for damages beyond normal wear and tear." {...field} /></FormControl><FormMessage /></FormItem> )} />
                   </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="expenses">
                <AccordionTrigger className="text-lg font-semibold"><Receipt className="mr-2 h-5 w-5 text-primary" />Shared Expenses</AccordionTrigger>
                <AccordionContent className="space-y-6 pt-4">
                  <div>
                    <FormLabel>Utilities</FormLabel>
                    <FormDescription>Configure how utilities will be shared.</FormDescription>
                    <div className="space-y-4 mt-2">
                      {utilities.map((field, index) => (
                        <div key={field.id} className="flex flex-col md:flex-row items-center gap-4 p-3 border rounded-lg">
                          <FormField
                            control={form.control}
                            name={`utilities.${index}.isShared`}
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={(checked) => {
                                      field.onChange(checked);
                                      updateUtility(index, { ...utilities[index], isShared: !!checked });
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal w-24">{utilities[index].name}</FormLabel>
                              </FormItem>
                            )}
                          />
                          {form.watch(`utilities.${index}.isShared`) && (
                            <>
                              <FormField
                                control={form.control}
                                name={`utilities.${index}.paymentMethod`}
                                render={({ field }) => (
                                  <FormItem className="flex-grow w-full md:w-auto">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl><SelectTrigger><SelectValue placeholder="Split Method" /></SelectTrigger></FormControl>
                                      <SelectContent>
                                        <SelectItem value="equal">Split Equally</SelectItem>
                                        <SelectItem value="fixed">Fixed Split</SelectItem>
                                        <SelectItem value="percentage">By Percentage</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`utilities.${index}.payer`}
                                render={({ field }) => (
                                  <FormItem className="flex-grow w-full md:w-auto">
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl><SelectTrigger><SelectValue placeholder="Who pays the bill?" /></SelectTrigger></FormControl>
                                      <SelectContent>
                                        {form.getValues('roommates').map(r => r.name && <SelectItem key={r.name} value={r.name}>{r.name}</SelectItem>)}
                                        <SelectItem value="rotate">Rotate Monthly</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormItem>
                                )}
                              />
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <FormField control={form.control} name="householdSupplies" render={({ field }) => ( <FormItem><FormLabel>Household Supplies Policy</FormLabel><FormControl><Textarea placeholder="e.g., Shared items like toilet paper and cleaning supplies will be purchased on a rotating basis, or costs will be split equally each month." {...field} /></FormControl><FormMessage /></FormItem> )} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="chores">
                <AccordionTrigger className="text-lg font-semibold"><Trash2 className="mr-2 h-5 w-5 text-primary" />Cleaning & Chores</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <FormField control={form.control} name="cleaning.commonAreas" render={({ field }) => ( <FormItem><FormLabel>Common Areas</FormLabel><FormControl><Input placeholder="e.g., Kitchen, Living Room, Bathroom(s)" {...field} /></FormControl><FormMessage /></FormItem> )} />
                  <FormField control={form.control} name="cleaning.schedule" render={({ field }) => ( <FormItem><FormLabel>Cleaning Schedule</FormLabel><FormControl><Textarea placeholder="e.g., All roommates are responsible for keeping common areas clean. A deep clean of the apartment will be done on the first Saturday of each month, with tasks rotating." {...field} /></FormControl><FormMessage /></FormItem> )} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="policies">
                <AccordionTrigger className="text-lg font-semibold"><PartyPopper className="mr-2 h-5 w-5 text-primary" />General Policies</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <FormField control={form.control} name="guestPolicy" render={({ field }) => ( <FormItem><FormLabel>Guest Policy</FormLabel><FormControl><Textarea placeholder="e.g., Overnight guests are allowed for a maximum of 3 consecutive nights. Roommates must provide 24-hour notice for any overnight guest." {...field} /></FormControl><FormMessage /></FormItem> )} />
                  <FormField control={form.control} name="noisePolicy" render={({ field }) => ( <FormItem><FormLabel>Noise / Quiet Hours</FormLabel><FormControl><Textarea placeholder="e.g., Quiet hours are from 10 PM to 8 AM on weekdays and 12 AM to 9 AM on weekends." {...field} /></FormControl><FormMessage /></FormItem> )} />
                  <FormField control={form.control} name="petsPolicy" render={({ field }) => ( <FormItem><FormLabel>Pets Policy</FormLabel><FormControl><Textarea placeholder="e.g., No pets are allowed on the premises, except for those agreed upon in writing by all roommates and the landlord." {...field} /></FormControl><FormMessage /></FormItem> )} />
                  <FormField control={form.control} name="smokingAlcoholDrugsPolicy" render={({ field }) => ( <FormItem><FormLabel>Smoking, Alcohol, and Drugs Policy</FormLabel><FormControl><Textarea placeholder="e.g., Smoking is not permitted inside the apartment. Illegal drug use is strictly prohibited." {...field} /></FormControl><FormMessage /></FormItem> )} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="property">
                <AccordionTrigger className="text-lg font-semibold"><Home className="mr-2 h-5 w-5 text-primary" />Property & Belongings</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <FormField control={form.control} name="sharedProperty" render={({ field }) => ( <FormItem><FormLabel>Shared Items</FormLabel><FormControl><Textarea placeholder="e.g., Kitchen appliances, living room furniture, and television are considered shared property." {...field} /></FormControl><FormMessage /></FormItem> )} />
                  <FormField control={form.control} name="borrowingPolicy" render={({ field }) => ( <FormItem><FormLabel>Borrowing Personal Items</FormLabel><FormControl><Textarea placeholder="e.g., Personal items may only be borrowed with express permission from the owner." {...field} /></FormControl><FormMessage /></FormItem> )} />
                  <FormField control={form.control} name="damageAndRepairsPolicy" render={({ field }) => ( <FormItem><FormLabel>Damage and Repairs</FormLabel><FormControl><Textarea placeholder="e.g., Damage caused by a roommate or their guest is the financial responsibility of that roommate. General repairs will be reported to the landlord." {...field} /></FormControl><FormMessage /></FormItem> )} />
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="termination">
                <AccordionTrigger className="text-lg font-semibold"><LogOut className="mr-2 h-5 w-5 text-primary" />Exit & Termination</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                   <FormField control={form.control} name="terminationNoticePeriod" render={({ field }) => ( <FormItem><FormLabel>Move-out Notice Period (days)</FormLabel><FormControl><Input type="number" placeholder="30" {...field} onChange={e => field.onChange(parseInt(e.target.value, 10))} /></FormControl><FormMessage /></FormItem> )} />
                   <FormField control={form.control} name="replacementRules" render={({ field }) => ( <FormItem><FormLabel>Replacement Roommate Rules</FormLabel><FormControl><Textarea placeholder="e.g., A departing roommate is responsible for finding a suitable replacement, subject to approval by the remaining roommates and the landlord." {...field} /></FormControl><FormMessage /></FormItem> )} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="conflict">
                <AccordionTrigger className="text-lg font-semibold"><Shield className="mr-2 h-5 w-5 text-primary" />Conflict Resolution</AccordionTrigger>
                <AccordionContent className="pt-4">
                  <FormField control={form.control} name="conflictResolution" render={({ field }) => ( <FormItem><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem> )} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="custom-clauses">
                <AccordionTrigger className="text-lg font-semibold"><FilePlus2 className="mr-2 h-5 w-5 text-primary" />Custom Clauses</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                    <FormField control={form.control} name="customClauses" render={({ field }) => ( <FormItem><FormLabel>Your Custom Clauses</FormLabel><FormDescription>Add any additional clauses here.</FormDescription><FormControl><Textarea rows={5} placeholder="e.g., 1. The south-facing balcony is designated as a quiet reading area from 9 AM to 5 PM..." {...field} /></FormControl><FormMessage /></FormItem> )} />
                </AccordionContent>
              </AccordionItem>

            </Accordion>
            
            {form.formState.errors.root && (
              <div className="text-sm font-medium text-destructive">{form.formState.errors.root.message}</div>
            )}

            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Generating..." : "Generate Agreement"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
