import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Register as a Professional',
  description: 'Join SkillTrust and start offering your services to clients across Sri Lanka.',
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-secondary/30 text-center">
      <div className="container py-12">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          සාදරයෙන් පිළිගන්නවා!
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Register වෙලා profile එක හදන්න
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSci0hAcTTLoJU_oY0Ga8_BwOWFHQTpJklKlGT-bJ3lrVLrfVQ/viewform?usp=header" target="_blank">
              Register Now
            </Link>
          </Button>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-sm text-muted-foreground">
            Service providers can register using the form above. We will review your application and get in touch with you to create your profile on SkillTrust.
        </p>
      </div>
    </div>
  );
}
