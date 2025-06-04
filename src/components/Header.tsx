'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/#home" className="flex items-center space-x-2">
          <Home className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[360px]">
              <div className="p-6">
                <Link
                  href="/#home"
                  className="flex items-center space-x-2 mb-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="h-8 w-8 text-primary" />
                  <span className="font-bold text-xl">{siteConfig.name}</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {siteConfig.navLinks.map((link) => (
                    <SheetClose asChild key={link.title}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
