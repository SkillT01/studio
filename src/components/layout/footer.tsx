import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">LankanServ</span>
            </Link>
            <p className="text-sm text-muted-foreground">Connecting you with Sri Lanka's finest service professionals.</p>
          </div>
          <div>
            <h4 className="mb-4 font-headline font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services?category=carpenters" className="text-sm text-muted-foreground hover:text-primary">Carpenters</Link></li>
              <li><Link href="/services?category=masons" className="text-sm text-muted-foreground hover:text-primary">Masons</Link></li>
              <li><Link href="/services?category=salons" className="text-sm text-muted-foreground hover:text-primary">Salons</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">All Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-headline font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-headline font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LankanServ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
