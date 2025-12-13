import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, Calendar, Star } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Find a Service',
      description: 'Search by category or location to find the right professional for your needs.',
    },
    {
      icon: Calendar,
      title: 'Book & Schedule',
      description: 'Easily book an appointment or request a service at a time that works for you.',
    },
    {
      icon: Star,
      title: 'Rate & Review',
      description: 'Share your experience by leaving a rating and review to help the community.',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Simple Steps to Get Started</h2>
          <p className="mx-auto mt-2 max-w-xl text-lg text-muted-foreground">
            Three easy steps to connect with trusted service providers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="p-8">
                <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-4 text-primary">
                  <step.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                <CardDescription className="pt-2">{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
