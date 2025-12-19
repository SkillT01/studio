import { CategoryShowcase } from '@/components/landing/category-showcase';
import { AIRecommender } from '@/components/landing/ai-recommender';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Separator } from '@/components/ui/separator';

export default function LocaleHomePage() {
  return (
    <div className="flex flex-col">
      <div className="py-8 text-center text-lg">workers</div>
      <CategoryShowcase />
      <Separator className="my-12 bg-border/50 md:my-24" />
      <HowItWorks />
      <Separator className="my-12 bg-border/50 md:my-24" />
      <AIRecommender />
    </div>
  );
}
