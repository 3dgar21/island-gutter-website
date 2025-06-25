import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';

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
            Island Gutter: Your trusted partner for <br />
            roofing, siding, windows, doors, kitchens, <br />
            bathrooms, and professional gutter services <br />
            (installation, repair, cleaning) in Staten Island
          </h1>

          <p className="mt-6 text-muted-foreground text-lg max-w-prose">
            Island Gutter Home Improvement & Supply Corp: Your trusted partner for roofing, siding, windows, doors,
            kitchens, bathrooms, and professional gutter services (installation, repair, cleaning) in Staten Island.
            We also sell a wide range of home improvement materials and tools.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#services"
              className="bg-foreground text-background text-sm px-6 py-3 rounded-md shadow hover:shadow-md transition"
            >
              Our Services →
            </Link>
            <Link
              href="#shop"
              className="border text-sm px-6 py-3 rounded-md shadow hover:shadow-md transition flex items-center gap-2"
            >
              Browse Our Products 🛒
            </Link>
            <Link
              href="#contact"
              className="border text-sm px-6 py-3 rounded-md shadow hover:shadow-md transition flex items-center gap-2"
            >
              Get A Free Estimate 📞
            </Link>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative aspect-[4/3] w-full max-w-lg mx-auto md:mx-0 rounded-xl overflow-hidden shadow-xl bg-muted">
          <Image
            src="/IMG_2404.jpg"
            alt="Island Gutter Storefront"
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
