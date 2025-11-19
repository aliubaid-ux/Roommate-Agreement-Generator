import { z } from "zod";

export const agreementSchema = z.object({
  // Basic Info
  propertyAddress: z.string().min(1, "Property address is required."),
  agreementDate: z.date({ required_error: "Agreement date is required." }),
  roommates: z.array(z.object({ name: z.string().min(1, "Roommate name is required.") })).min(1),
  agreementDuration: z.object({
    startDate: z.date({ required_error: "Start date is required." }),
    endDate: z.date({ required_error: "End date is required." }),
  }),

  // Financial Terms
  rent: z.object({
    total: z.coerce.number().positive("Total rent must be a positive number."),
    individualShares: z.array(z.object({ roommateName: z.string(), share: z.coerce.number().nonnegative() })),
    paymentMethod: z.string().min(1, "Payment method is required."),
    dueDate: z.string().min(1, "Rent due date is required."),
  }),
  securityDeposit: z.object({
    total: z.coerce.number().nonnegative(),
    individualShares: z.array(z.object({ roommateName: z.string(), share: z.coerce.number().nonnegative() })),
    refundConditions: z.string().optional(),
  }),
  latePaymentPolicy: z.string().optional(),

  // Shared Expenses
  utilities: z.array(z.object({
    name: z.string(),
    isShared: z.boolean(),
    paymentMethod: z.enum(['equal', 'fixed', 'percentage']).optional(),
    payer: z.string().optional(),
  })),
  householdSupplies: z.string().optional(),

  // Chores
  cleaning: z.object({
    commonAreas: z.string().optional(),
    schedule: z.string().optional(),
    choreAssignments: z.string().optional(),
  }),

  // Policies
  guestPolicy: z.string().optional(),
  noisePolicy: z.string().optional(),
  partyPolicy: z.string().optional(),
  petsPolicy: z.string().optional(),
  smokingAlcoholDrugsPolicy: z.string().optional(),
  
  // Shared Property
  sharedProperty: z.string().optional(),
  borrowingPolicy: z.string().optional(),
  
  // Damage and Repairs
  damageAndRepairsPolicy: z.string().optional(),
  
  // Exit and Termination
  terminationNoticePeriod: z.coerce.number().int().positive().optional(),
  replacementRules: z.string().optional(),
  
  // Conflict Resolution
  conflictResolution: z.string().optional(),

  // Custom Clauses
  customClauses: z.string().optional(),
});

export type AgreementData = z.infer<typeof agreementSchema>;
