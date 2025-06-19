'use client';

import Image from 'next/image';
import { galleryImages } from '@/config/gallery';
import SectionWrapper from '@/components/shared/SectionWrapper';

const categories = [...new Set(galleryImages.map((img) => img.category))];

export default function GalleryPage() {
  return (
    <SectionWrapper
      id="gallery"
      title="Our Project Gallery"
      subtitle="See Our Work"
    >
      <div className="space-y-20">
        {categories.map((category) => {
          const filteredImages = galleryImages.filter(
            (img) => img.category === category
          );
          if (filteredImages.length === 0) return null;

          return (
            <section key={category} className="space-y-6">
              <h2 className="text-2xl font-bold text-center">{category}</h2>
              <div className="overflow-hidden relative">
                <div className="flex w-max animate-scroll space-x-6">
                  {[...filteredImages, ...filteredImages].map((image, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[300px] h-[220px] rounded-xl overflow-hidden shadow-md"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={220}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
