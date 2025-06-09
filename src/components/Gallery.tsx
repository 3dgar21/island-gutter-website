import Link from 'next/link';
import Image from 'next/image';
import { galleryImages } from '@/config/site';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Info } from 'lucide-react';

const IMAGES_TO_PREVIEW = 6;

export default function Gallery() {
  const previewImages = galleryImages.slice(0, IMAGES_TO_PREVIEW);

  return (
    <SectionWrapper id="gallery" title="Our Project Gallery" subtitle="See Our Work">
      <div className="w-full max-w-7xl mx-auto px-4">
        {previewImages.length > 0 ? (
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[1280px] place-items-center">
            {previewImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-[420px] min-h-[315px]"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative w-full h-[315px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      data-ai-hint={image.dataAiHint}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-muted/30 rounded-lg">
            <Info className="mx-auto h-12 w-12 text-primary mb-4" />
            <p className="text-muted-foreground text-lg">
              Our project gallery is currently being updated. Please check back soon!
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow bg-primary text-white">
            <Link href="/gallery">
              View Full Categorized Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-muted-foreground mt-4">
            Want to see more of our work?{' '}
            <Link href="/gallery" className="text-primary hover:underline font-medium">Visit our full gallery</Link> or{' '}
            <Link href="/#contact" className="text-primary hover:underline font-medium">contact us</Link>.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
