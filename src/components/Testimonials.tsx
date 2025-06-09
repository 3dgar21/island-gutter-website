import { testimonials } from '@/config/site';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" title="What Our Clients Say" subtitle="Real Feedback from Real Customers">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col md:flex-row items-start gap-4 p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={`/images/testimonials/${index + 1}.jpg`}
              alt={`Photo of ${testimonial.author}`}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
            <CardContent className="p-0">
              <p className="italic mb-2">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
