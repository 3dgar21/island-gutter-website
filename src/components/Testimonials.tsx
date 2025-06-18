import { testimonials } from '@/config/site';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      title="What Our Clients Say"
      subtitle="Customer Stories"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between h-full p-6 shadow-md bg-white rounded-xl text-left"
          >
            <div className="mb-4">
              <Quote className="text-primary w-6 h-6 mb-4" />
              <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
            </div>
            <div className="pt-6 text-right mt-auto">
              <p className="font-semibold text-foreground">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
