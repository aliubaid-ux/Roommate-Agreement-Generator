'use server';

/**
 * @fileOverview Provides AI-powered suggestions for custom clauses in a roommate agreement.
 *
 * - suggestClauses - A function that generates custom clause suggestions.
 * - SuggestClausesInput - The input type for the suggestClauses function.
 * - SuggestClausesOutput - The return type for the suggestClauses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestClausesInputSchema = z.object({
  agreementDetails: z
    .string()
    .describe(
      'Details about the roommate agreement, including existing terms and any specific needs or scenarios the user wants to address.'
    ),
  numSuggestions: z
    .number()
    .default(3)
    .describe('The number of custom clause suggestions to generate.'),
});
export type SuggestClausesInput = z.infer<typeof SuggestClausesInputSchema>;

const SuggestClausesOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of custom clause suggestions.'),
});
export type SuggestClausesOutput = z.infer<typeof SuggestClausesOutputSchema>;

export async function suggestClauses(
  input: SuggestClausesInput
): Promise<SuggestClausesOutput> {
  return suggestClausesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestClausesPrompt',
  input: {schema: SuggestClausesInputSchema},
  output: {schema: SuggestClausesOutputSchema},
  prompt: `You are a helpful AI assistant that suggests custom clauses for roommate agreements.

  Based on the details of the agreement provided, suggest {{{numSuggestions}}} custom clauses that address specific needs or scenarios not covered in standard roommate agreements.

  Agreement Details: {{{agreementDetails}}}

  Suggestions (only include the clause itself):
  `,
});

const suggestClausesFlow = ai.defineFlow(
  {
    name: 'suggestClausesFlow',
    inputSchema: SuggestClausesInputSchema,
    outputSchema: SuggestClausesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
