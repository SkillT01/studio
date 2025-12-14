import { notFound } from 'next/navigation';
import Image from 'next/image';
import { serviceProviders } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Calendar, MessageSquare, Briefcase, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string, locale: string } }): Promise<Metadata> {
    const provider = serviceProviders.find(p => p.id === params.id);
    if (!provider) {
        return { title: 'Not Found' };
    }
    return {
        title: provider.name,
        description: `Profile and services of ${provider.name}, a ${provider.category} in ${provider.location}.`
    };
}

export function generateStaticParams() {
    const locales = ['en', 'si', 'ta'];
    const paths = serviceProviders.flatMap((provider) => 
        locales.map(locale => ({
            id: provider.id,
            locale: locale,
        }))
    );
    return paths;
}

const StarRating = ({ rating, className }: { rating: number, className?: string }) => (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}`}
        />
      ))}
    </div>
  );

export default function ServiceProviderProfilePage({ params }: { params: { id: string, locale: string } }) {
  const provider = serviceProviders.find(p => p.id === params.id);

  if (!provider) {
    notFound();
  }

  return (
    <div className="bg-secondary/30">
      <div className="container py-8 md:py-12">
        <header className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="flex justify-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
              <Image src={provider.image} alt={provider.name} fill className="object-cover" />
            </div>
          </div>
          <div className="text-center md:col-span-2 md:text-left">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">{provider.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{provider.category}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start">
              <div className="flex items-center gap-2">
                <StarRating rating={provider.rating} />
                <span className="text-muted-foreground">({provider.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>{provider.location}</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Calendar className="mr-2" /> Book Now</Button>
                <Button size="lg" variant="outline"><MessageSquare className="mr-2" /> Message</Button>
            </div>
          </div>
        </header>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="space-y-6 p-6 text-base leading-relaxed">
                <p>{provider.description}</p>
                <div className="grid grid-cols-1 gap-6 border-t pt-6 sm:grid-cols-2">
                    <div className="flex items-start gap-4">
                        <Briefcase className="h-6 w-6 flex-shrink-0 text-primary" />
                        <div>
                            <h4 className="font-headline font-semibold">Experience</h4>
                            <p className="text-muted-foreground">{provider.yearsOfExperience} years</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 flex-shrink-0 text-primary" />
                        <div>
                            <h4 className="font-headline font-semibold">Availability</h4>
                            <p className="text-muted-foreground">{provider.availability}</p>
                        </div>
                    </div>
                </div>
                 <div>
                    <h4 className="font-headline font-semibold">Skills</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {provider.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                    </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <Card>
              <CardHeader><CardTitle className="font-headline">Our Services</CardTitle></CardHeader>
              <CardContent>
                <ul className="divide-y">
                  {provider.services.map(service => (
                    <li key={service.name} className="flex flex-col items-start justify-between gap-2 py-4 sm:flex-row sm:items-center">
                      <span className="font-medium">{service.name}</span>
                      <Badge variant="outline" className="text-primary">{service.price}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Client Feedback</CardTitle>
                <CardDescription>What people are saying about {provider.name}.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {provider.reviews.map(review => (
                  <div key={review.id} className="flex gap-4 border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                         <h4 className="font-semibold">{review.clientName}</h4>
                         <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                       <StarRating rating={review.rating} className="my-1"/>
                       <p className="text-muted-foreground italic">"{review.comment}"</p>
                    </div>
                  </div>
                ))}
                {provider.reviews.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">No reviews yet.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
