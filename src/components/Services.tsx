import { services } from '@/config/services';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import SectionWrapper from '@/components/shared/SectionWrapper';

function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Our Professional Gutter Services"
      subtitle="What We Offer"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <Card
              key={service.title}
              className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow bg-white rounded-xl"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                {IconComponent && <IconComponent className="w-8 h-8" />}
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-semibold mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
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

export default Services;
