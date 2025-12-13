import { serviceProviders, categories } from '@/lib/data';
import { ServiceCard } from '@/components/services/service-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse Services',
  description: 'Find and book service professionals in Sri Lanka.',
};

export default function ServicesPage({ searchParams }: { searchParams: { q?: string; category?: string } }) {
  const searchTerm = searchParams.q?.toLowerCase() || '';
  const categoryParam = searchParams.category || '';

  const filteredProviders = serviceProviders.filter(provider => {
    const slug = provider.category.toLowerCase().replace(/ /g, '-');
    const matchesCategory = categoryParam ? slug === categoryParam : true;
    const matchesSearch = searchTerm
      ? provider.name.toLowerCase().includes(searchTerm) || provider.description.toLowerCase().includes(searchTerm) || provider.location.toLowerCase().includes(searchTerm)
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-8 md:py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Professionals</h1>
        <p className="mx-auto mt-2 max-w-xl text-lg text-muted-foreground">
          Search, find, and connect with the best service providers.
        </p>
      </div>

      <div className="my-8 rounded-lg border bg-card p-4 shadow-sm md:p-6">
        <form className="grid grid-cols-1 items-end gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-2">
            <label htmlFor="search" className="mb-1 block text-sm font-medium">Search by keyword</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="search" name="q" placeholder="e.g., 'Custom furniture' or 'Colombo'" className="pl-10" defaultValue={searchTerm} />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="mb-1 block text-sm font-medium">Category</label>
            <Select name="category" defaultValue={categoryParam}>
              <SelectTrigger id="category">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat.id} value={cat.slug}>{cat.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </form>
      </div>
      
      {filteredProviders.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProviders.map(provider => (
            <ServiceCard key={provider.id} provider={provider} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border-2 border-dashed py-16 text-center">
            <h3 className="font-headline text-2xl font-semibold">No providers found</h3>
            <p className="mt-2 text-muted-foreground">Try adjusting your search filters.</p>
        </div>
      )}
    </div>
  );
}
