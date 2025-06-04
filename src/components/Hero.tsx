import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <SectionWrapper id="home" className="bg-muted/50 py-20 md:py-28" title={''}>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="md:text-left text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Island Gutter: Your trusted partner for roofing, siding, windows, doors, kitchens, bathrooms, and professional gutter services (installation, repair, cleaning) in Staten Island
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto md:mx-0">
            Island Gutter Home Improvement & Supply Corp: Your trusted partner for roofing, siding, windows, doors, kitchens,
            bathrooms, and professional gutter services (installation, repair, cleaning) in Staten Island. We also sell a wide range of home improvement materials and tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <Button asChild size="lg" className="shadow hover:shadow-md transition bg-foreground text-background">
              <Link href="/#services">
                Our Services <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow hover:shadow-md transition border-foreground text-foreground">
              <Link href="/shop">
                Browse Our Products <ShoppingCart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 md:h-96 lg:h-[480px] rounded-lg overflow-hidden shadow-xl order-first md:order-last flex items-center justify-center">
          <Image
            src="https://placehold.co/800x600.png"
            alt="Island Gutter Home Improvement Services - Main Hero Image"
            width={800}
            height={600}
            className="transform hover:scale-105 transition-transform duration-500 ease-in-out object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}
