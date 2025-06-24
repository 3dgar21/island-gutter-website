import Image from 'next/image';
import { siteConfig, credentials } from '@/config/site';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" title={`About ${siteConfig.name}`} subtitle="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Your Trusted Home Improvement Experts
          </h3>
          <p className="text-muted-foreground mb-6 text-base sm:text-lg leading-relaxed">
            At Island Gutter Home Improvement & Supply Corp, we are dedicated to providing homeowners and businesses
            with top-tier solutions for all their home improvement needs. From roofing, siding, windows, and doors
            to expert gutter services and a wide range of supplies, we have you covered. With years of experience,
            state-of-the-art equipment, and a commitment to customer satisfaction, we ensure your property is enhanced
            and protected.
          </p>

          <div className="space-y-6">
            {credentials.map((cred) => {
              const IconComponent = cred.icon;
              return (
                <div key={cred.title} className="flex items-start">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{cred.title}</h4>
                    <p className="text-sm text-muted-foreground">{cred.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-xl mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-xl bg-muted aspect-[4/3] relative">
           <Image
           src="/companycars.jpeg"
           alt={`Image representing ${siteConfig.name} commitment`}
           fill
           className="object-cover"
           data-ai-hint="about us team photo"
           />
           </div>
           </div>
    </SectionWrapper>
  );
}
