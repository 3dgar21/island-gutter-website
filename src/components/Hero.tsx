import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <SectionWrapper
      id="home"
      title=""
      className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 !py-20 md:!py-28"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {siteConfig.description}
          </h1>
        </div>

        {/* Image Block */}
        <div className="relative aspect-[4/3] w-full max-w-lg mx-auto md:mx-0 rounded-xl overflow-hidden shadow-xl bg-muted">
          <Image
            src="/hero.jpg" // replace with your actual image in /public
            alt="Island Gutter Hero Image"
            width={800}
            height={600}
            priority
            className="object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
