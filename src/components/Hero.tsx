
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <SectionWrapper id="home" title="Welcome to Island Gutter" className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 !py-20 md:!py-28">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="md:text-left text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            {siteConfig.name}: {siteConfig.description.split(':')[1]?.trim().split('.')[0] || 'Your Home Improvement Experts'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0">
            {siteConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#services">
                Our Services <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-shadow border-primary text-primary hover:bg-primary/5">
              <Link href="/shop">
                Browse Our Products <ShoppingCart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://placehold.co/800x600.png"
            alt={`${siteConfig.name} hero image - illustrative work`}
            width={800}
            height={600}
            priority
            className="object-cover"
            data-ai-hint="modern house exterior"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

    