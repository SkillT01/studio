"use client";

import { Logo } from './logo';
import { categories } from '@/lib/data';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="font-headline text-xl font-bold text-primary">SkillTrust</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t('description')}</p>
          </div>
          <div>
            <h4 className="mb-4 font-headline font-semibold">{t('services')}</h4>
            <ul className="space-y-2">
              {categories.slice(0, 4).map(category => (
                <li key={category.id}><Link href={`/services?category=${category.slug}`} className="text-sm text-muted-foreground hover:text-primary">{category.name}</Link></li>
              ))}
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">{t('allServices')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-headline font-semibold">{t('company')}</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">{t('aboutUs')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">{t('contact')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">{t('privacyPolicy')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-headline font-semibold">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">{t('facebook')}</a>
              <a href="#" className="text-muted-foreground hover:text-primary">{t('twitter')}</a>
              <a href="#" className="text-muted-foreground hover:text-primary">{t('instagram')}</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          {t('copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
