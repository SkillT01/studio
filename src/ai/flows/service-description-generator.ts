'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating service descriptions using AI.
 *
 * The flow takes in service details and generates a professional description.
 * It exports: generateServiceDescription, ServiceDescriptionInput, ServiceDescriptionOutput.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceDescriptionInputSchema = z.object({
  serviceType: z.string().describe('Type of service offered (e.g., carpentry, salon).'),
  yearsOfExperience: z.number().describe('Number of years of experience.'),
  skills: z.array(z.string()).describe('List of skills and specializations.'),
  location: z.string().describe('Service location.'),
  availability: z.string().describe('Availability details (e.g., weekdays, weekends).'),
  hourlyRate: z.number().optional().describe('Hourly rate for the service.'),
  customerReviews: z.string().optional().describe('Summary of customer reviews.'),
});
export type ServiceDescriptionInput = z.infer<typeof ServiceDescriptionInputSchema>;

const ServiceDescriptionOutputSchema = z.object({
  description: z.string().describe('AI-generated service description.'),
});
export type ServiceDescriptionOutput = z.infer<typeof ServiceDescriptionOutputSchema>;

export async function generateServiceDescription(input: ServiceDescriptionInput): Promise<ServiceDescriptionOutput> {
  return generateServiceDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceDescriptionPrompt',
  input: {schema: ServiceDescriptionInputSchema},
  output: {schema: ServiceDescriptionOutputSchema},
  prompt: `You are a professional copywriter specializing in creating compelling service provider profiles.

  Based on the information provided, generate a professional and engaging description for the service provider's profile.
  Highlight their experience, skills, and availability.

  Service Type: {{{serviceType}}}
  Years of Experience: {{{yearsOfExperience}}}
  Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Location: {{{location}}}
  Availability: {{{availability}}}
  Hourly Rate: {{#if hourlyRate}}${{{hourlyRate}}}{{else}}Not specified{{/if}}
  Customer Reviews: {{#if customerReviews}}{{{customerReviews}}}{{else}}No reviews yet{{/if}}

  Write a concise and professional description that will attract potential clients.
  `,
});

const generateServiceDescriptionFlow = ai.defineFlow(
  {
    name: 'generateServiceDescriptionFlow',
    inputSchema: ServiceDescriptionInputSchema,
    outputSchema: ServiceDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
