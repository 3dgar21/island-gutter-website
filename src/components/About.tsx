import { siteConfig } from '@/config/site';
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
            to expert gutter services and a wide range of supplies, we have you covered. With years of experience, 
            state-of-the-art tools, and a commitment to quality, your satisfaction is always our top priority.
          </p>
        </div>
        <div className="w-full h-[300px] bg-muted rounded-lg shadow-inner flex items-center justify-center text-muted-foreground text-xl">
          {/* You can add a custom image or illustration here later */}
          Company Photo Placeholder
        </div>
      </div>
    </SectionWrapper>
  );
}
