'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { title: 'Home', href: '/#home' },
  { title: 'Services', href: '/#services' },
  { title: 'Shop', href: '/#shop' },
  { title: 'Gallery', href: '/#gallery' },
  { title: 'Testimonials', href: '/#testimonials' },
  { title: 'About Us', href: '/#about' },
  { title: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        {/* Logo and Brand Name */}
        <Link href="/#home" className="flex items-center gap-3">
          <Image
            src="/photo env logo.png"
            alt="Island Gutter logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <span className="font-bold text-lg md:text-xl text-accentBlack whitespace-nowrap">
            ISLAND GUTTER HOME IMPROVEMENT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="transition-colors hover:text-primary text-accentBlack"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-accentBlack" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[360px] p-6">
              <Link
                href="/#home"
                className="flex items-center gap-3 mb-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src="/photo env logo.png"
                  alt="Island Gutter logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <span className="font-bold text-lg text-accentBlack">
                  ISLAND GUTTER HOME IMPROVEMENT
                </span>
              </Link>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.title}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary text-accentBlack"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
