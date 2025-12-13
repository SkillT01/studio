import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function CategoryShowcase() {
  return (
    <section className="bg-secondary/30 py-12 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Explore Our Services</h2>
          <p className="mx-auto mt-2 max-w-xl text-lg text-muted-foreground">
            Find professionals in a wide range of categories.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category) => {
            const categoryImage = PlaceHolderImages.find(p => p.imageUrl === category.image);
            return (
              <Link href={`/services?category=${category.slug}`} key={category.id} className="group">
                <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative h-60 w-full">
                      <Image
                        src={category.image}
                        alt={`Image for ${category.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        data-ai-hint={categoryImage?.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <category.icon className="mb-2 h-8 w-8 text-primary" />
                          <h3 className="font-headline text-2xl font-semibold">{category.name}</h3>
                        </div>
                        <ArrowRight className="h-6 w-6 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
