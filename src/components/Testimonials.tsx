import { siteConfig } from '@/config/site';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" title="What Our Clients Say" subtitle="Real Feedback from Real Customers">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold mb-2">{testimonial.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{testimonial.feedback}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
