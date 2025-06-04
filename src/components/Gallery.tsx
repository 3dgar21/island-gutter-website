import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { siteConfig } from '@/config/site';

export default function Gallery() {
  return (
    <SectionWrapper id="gallery" title="Project Gallery" subtitle="See Our Work">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.gallery.map((item, index) => (
          <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src={item.imageUrl}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute bottom-0 w-full p-2 bg-black/50 text-white text-sm text-center">
              {item.caption}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
