'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryImages } from '@/config/gallery';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const categories = [...new Set(galleryImages.map((img) => img.category))];

export default function GalleryPage() {
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % lightboxImages.length);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length
      );
    }
  };

  const scroll = (category: string, direction: 'left' | 'right') => {
    const container = scrollRefs.current[category];
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const setScrollRef = (category: string) => (el: HTMLDivElement | null) => {
    scrollRefs.current[category] = el;
  };

  return (
    <SectionWrapper
      id="gallery"
      title="Our Project Gallery"
      subtitle="See Our Work... more pictures coming soon! stay tuned!"
    >
      {/* Floating Top-Left Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <button className="bg-white border px-4 py-2 shadow rounded-lg hover:bg-gray-100 transition">
            ← Home
          </button>
        </Link>
      </div>

      <div className="space-y-20">
        {categories.map((category) => {
          const filteredImages = galleryImages.filter(
            (img) => img.category === category
          );

          return (
            <section key={category} className="space-y-6">
              <h2 className="text-2xl font-bold text-center">{category}</h2>

              <div className="relative">
                {/* Left Scroll Button */}
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
                  onClick={() => scroll(category, 'left')}
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Scrollable Container */}
                <div
                  ref={setScrollRef(category)}
                  className="flex overflow-x-auto space-x-4 scroll-smooth scrollbar-hide px-10"
                >
                  {filteredImages.map((image, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        openLightbox(
                          filteredImages.map((img) => img.src),
                          index
                        )
                      }
                      className="cursor-pointer flex-shrink-0 w-[300px] h-[220px] rounded-xl overflow-hidden shadow-md"
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

                {/* Right Scroll Button */}
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
                  onClick={() => scroll(category, 'right')}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </section>
          );
        })}

        {/* Bottom Back to Home Button */}
        <div className="flex justify-center mt-16">
          <Link href="/">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-xl shadow hover:bg-gray-700 transition">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* LIGHTBOX OVERLAY */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-6 left-6 text-white z-50"
            onClick={closeLightbox}
          >
            <X size={36} />
          </button>

          <button
            className="absolute left-4 text-white"
            onClick={prevImage}
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative max-w-[90vw] max-h-[80vh] w-[90vw] h-[80vh]">
            <Image
              src={lightboxImages[lightboxIndex]}
              alt="Fullscreen"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            className="absolute right-4 text-white"
            onClick={nextImage}
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
