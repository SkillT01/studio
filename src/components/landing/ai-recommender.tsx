"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getRecommendations } from '@/ai/flows/ai-recommendation-engine';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from 'next-intl';

const formSchema = z.object({
  userRequirements: z.string().min(10, 'Please describe your needs in more detail.'),
  userLocation: z.string().min(2, 'Please enter a valid location.'),
});

type FormData = z.infer<typeof formSchema>;

export function AIRecommender() {
  const t = useTranslations('HomePage');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userRequirements: '',
      userLocation: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setRecommendations([]);
    try {
      const result = await getRecommendations({
        userRequirements: data.userRequirements,
        userLocation: data.userLocation,
      });
      setRecommendations(result.recommendations);
    } catch (error) {
      console.error("AI recommendation failed:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Could not get AI recommendations. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-primary/5 py-12 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">{t('aiRecommenderTitle')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('aiRecommenderSubtitle')}
            </p>
          </div>
          <Card className="shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>Get AI Recommendations</CardTitle>
                  <CardDescription>Fill in the details below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="userRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What do you need?</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., 'I need a custom wooden bookshelf for my living room, about 6ft tall.'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="userLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 'Colombo 7'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                    Get Suggestions
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>

        { (isLoading || recommendations.length > 0) && (
            <div className="mt-8">
              <h3 className="mb-4 text-center font-headline text-2xl font-semibold">Our Top Suggestions for You</h3>
              {isLoading ? (
                 <div className="flex items-center justify-center p-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                 </div>
              ) : (
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {recommendations.map((rec, index) => (
                    <li key={index}>
                      <Card className="bg-background/80">
                        <CardContent className="p-4">
                          <p className="font-medium">{rec}</p>
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ul>
              )}
            </div>
        )}
      </div>
    </section>
  );
}
