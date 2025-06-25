import { testimonials } from '@/config/site';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      title="What Our Clients Say"
      subtitle="Customer Stories"
    >
      <div className="relative">
        <div
          className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-sm snap-center shrink-0"
            >
              <Card className="flex flex-col justify-between h-full p-6 shadow-md bg-white rounded-xl text-left">
                <div className="mb-4">
                  <Quote className="text-primary w-6 h-6 mb-4" />
                  <p className="italic text-muted-foreground text-sm sm:text-base break-words">
                    &ldquo;{testimonial.quote || 'No testimonial provided.'}&rdquo;
                  </p>
                </div>

                {/* ⭐ Star Rating + Extra Info */}
                <div className="flex flex-col items-start mb-4 space-y-1">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-green-600 font-medium">Verified Customer</p>
                  <p className="text-xs text-gray-400">Reviewed June 2025</p>
                </div>

                <div className="pt-6 text-right mt-auto">
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    {testimonial.author || 'Anonymous'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location || 'Staten Island'}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
