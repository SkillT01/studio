import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'si', 'ta'],
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(si|ta|en)/:path*']
};