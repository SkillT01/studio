import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { ServiceProvider } from '@/lib/types';
import { Star, MapPin } from 'lucide-react';

export function ServiceCard({ provider }: { provider: ServiceProvider }) {
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={provider.image}
            alt={`Profile of ${provider.name}`}
            fill
            className="rounded-t-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Badge variant="secondary" className="mb-2">{provider.category}</Badge>
        <h3 className="font-headline text-xl font-semibold">{provider.name}</h3>
        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            <span>{provider.rating} ({provider.reviewCount} reviews)</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{provider.location}</span>
          </div>
        </div>
        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{provider.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/services/${provider.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
