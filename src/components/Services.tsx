import { services } from '@/config/services';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function Services() {
  return (
    <SectionWrapper id="services" title="Our Professional Gutter Services" subtitle="What We Offer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <Card key={service.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center flex-grow">
                <div className="mb-4 p-4 bg-primary/10 rounded-full inline-block">
                  <IconComponent className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
