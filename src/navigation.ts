import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'si', 'ta'] as const;
export const localePrefix = 'always'; // Default

export const pathnames = {
  '/': '/',
  '/services': '/services',
  '/register': '/register',
  '/services/[id]': '/services/[id]',
} as const;
 
export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});