"use client";

import { useState } from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { suggestClauses, SuggestClausesOutput } from "@/ai/flows/ai-clause-suggestions";
import { Loader, Sparkles, Copy, PlusCircle } from "lucide-react";
import { FormDescription, FormLabel } from "./ui/form";
import type { AgreementData } from "@/lib/schema";
import { useToast } from "@/hooks/use-toast";

interface AIClauseSuggestionProps {
  form: UseFormReturn<AgreementData>;
}

export default function AiClauseSuggestion({ form }: AIClauseSuggestionProps) {
  const [scenario, setScenario] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setSuggestions([]);
    try {
      const currentAgreementDetails = JSON.stringify(form.getValues());
      const result: SuggestClausesOutput = await suggestClauses({
        agreementDetails: `Current draft: ${currentAgreementDetails}. Specific scenario to address: ${scenario}`,
        numSuggestions: 3,
      });
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error("AI suggestion failed:", error);
      toast({
        title: "Error",
        description: "Failed to generate AI suggestions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addClauseToForm = (clause: string) => {
    const currentClauses = form.getValues("customClauses") || "";
    const newClauses = currentClauses + (currentClauses ? "\n\n" : "") + clause;
    form.setValue("customClauses", newClauses, { shouldValidate: true, shouldDirty: true });
    toast({
        title: "Clause Added",
        description: "The suggestion has been added to your custom clauses.",
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <FormLabel>Describe a situation</FormLabel>
        <FormDescription>Need a rule for something specific? Describe it and let AI suggest a clause.</FormDescription>
        <Textarea
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          placeholder="e.g., 'What if someone consistently leaves dirty dishes in the sink for days?' or 'How do we handle shared food expenses for a vegan roommate?'"
          className="mt-2"
        />
      </div>
      <Button onClick={handleGenerate} disabled={isLoading || !scenario}>
        {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
        Suggest Clauses
      </Button>

      {isLoading && (
        <div className="flex items-center justify-center p-8">
            <Loader className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-semibold">Suggestions:</h4>
          {suggestions.map((suggestion, index) => (
            <Card key={index} className="bg-background/50">
              <CardContent className="p-4 flex items-start justify-between gap-4">
                <p className="text-sm flex-grow">{suggestion}</p>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => addClauseToForm(suggestion)}>
                        <PlusCircle className="h-4 w-4" />
                        <span className="sr-only">Add</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => {
                        navigator.clipboard.writeText(suggestion);
                        toast({ title: "Copied!", description: "Suggestion copied to clipboard." });
                    }}>
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy</span>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
