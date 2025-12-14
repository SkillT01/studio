"use client";

import { useTranslations } from 'next-intl';
import { locales, usePathname, useRouter, Link } from '@/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Languages, Menu } from 'lucide-react';
import { Logo } from './logo';

function LanguageSwitcher() {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages />
          <span className="sr-only">{t('language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleLocaleChange('en')}>{t('english')}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange('si')}>{t('sinhala')}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange('ta')}>{t('tamil')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const t = useTranslations('Header');

  const navLinks = [
    { href: '/services', label: t('services') },
    { href: '/#how-it-works', label: t('howItWorks') },
    { href: '/about', label: t('aboutUs') },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-headline text-xl font-bold text-primary">SkillTrust</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground/70 transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher />
          <Button variant="ghost">{t('logIn')}</Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/register">{t('signUp')}</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Link href="/" className="mb-8 flex items-center gap-2">
                  <Logo className="h-8 w-8" />
                  <span className="font-headline text-xl font-bold text-primary">SkillTrust</span>
                </Link>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-foreground/70 transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  ))}
                  <div className='flex flex-col gap-2 pt-4 border-t'>
                     <Button variant="ghost">{t('logIn')}</Button>
                     <Button asChild className="bg-primary hover:bg-primary/90"><Link href="/register">{t('signUp')}</Link></Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
