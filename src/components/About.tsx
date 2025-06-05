
import Image from 'next/image';
import { siteConfig, credentials } from '@/config/site';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" title={`About ${siteConfig.name}`} subtitle="Our Commitment to You">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">Your Trusted Home Improvement Experts</h3>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            At Island Gutter Home Improvement & Supply Corp, we are dedicated to providing homeowners and businesses 
            with top-tier solutions for all their home improvement needs. From roofing, siding, windows, and doors 
            to expert gutter services and a wide range of supplies, we have you covered.
            With years of experience, state-of-the-art equipment, and a commitment to customer satisfaction,
            we ensure your property is enhanced and protected.
          </p>
          <div className="space-y-6">
            {credentials.map((cred) => {
              const IconComponent = cred.icon;
              return (
                <div key={cred.title} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{cred.title}</h4>
                    <p className="text-muted-foreground text-sm">{cred.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://placehold.co/500x500.png"
            alt={`Image representing ${siteConfig.name} commitment`}
            width={500}
            height={500}
            className="object-cover"
            data-ai-hint="team work construction"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

    