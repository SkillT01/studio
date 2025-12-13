'use server';

/**
 * @fileOverview AI-powered service provider recommendation engine.
 *
 * - getRecommendations - A function that returns a list of recommended service providers.
 * - RecommendationEngineInput - The input type for the getRecommendations function.
 * - RecommendationEngineOutput - The return type for the getRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendationEngineInputSchema = z.object({
  userRequirements: z
    .string()
    .describe('The user requirements and preferences for the service.'),
  userLocation: z.string().describe('The current location of the user.'),
  historicalRatings: z
    .string()
    .optional()
    .describe('Historical ratings and reviews data for service providers.'),
});
export type RecommendationEngineInput = z.infer<typeof RecommendationEngineInputSchema>;

const RecommendationEngineOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of recommended service providers based on user requirements and preferences.'),
});
export type RecommendationEngineOutput = z.infer<typeof RecommendationEngineOutputSchema>;

export async function getRecommendations(input: RecommendationEngineInput): Promise<RecommendationEngineOutput> {
  return recommendationEngineFlow(input);
}

const recommendationPrompt = ai.definePrompt({
  name: 'recommendationPrompt',
  input: {schema: RecommendationEngineInputSchema},
  output: {schema: RecommendationEngineOutputSchema},
  prompt: `You are an AI-powered recommendation engine specializing in suggesting service providers to users based on their needs and preferences.

  Based on the user requirements, location, and historical ratings (if available), provide a list of recommended service providers.

  User Requirements: {{{userRequirements}}}
  User Location: {{{userLocation}}}
  Historical Ratings: {{{historicalRatings}}}

  Recommendations:`,
});

const recommendationEngineFlow = ai.defineFlow(
  {
    name: 'recommendationEngineFlow',
    inputSchema: RecommendationEngineInputSchema,
    outputSchema: RecommendationEngineOutputSchema,
  },
  async input => {
    const {output} = await recommendationPrompt(input);
    return output!;
  }
);
