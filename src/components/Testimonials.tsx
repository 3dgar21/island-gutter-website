import { testimonials } from '@/config/site';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" title="What Our Clients Say" subtitle="Real Feedback from Real Customers">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={`/images/testimonials/${index + 1}.jpg`}
              alt={`Photo of ${testimonial.author}`}
              className="w-full h-auto rounded-md mb-4"
            />
            <CardHeader>
              <CardDescription className="italic mb-2">"{testimonial.quote}"</CardDescription>
              <CardTitle className="text-lg font-semibold">{testimonial.author}</CardTitle>
              <p className="text-xs text-muted-foreground">{testimonial.location}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}