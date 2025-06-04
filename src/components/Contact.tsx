import SectionWrapper from '@/components/shared/SectionWrapper';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { address, phone, email } = siteConfig.contact;

  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="We’re here to help">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">Address</h4>
              <p className="text-muted-foreground">{address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">Phone</h4>
              <a href={`tel:${phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                {phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">Email</h4>
              <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">
                {email}
              </a>
            </div>
          </div>
        </div>
        <div className="border border-border rounded-lg p-6 text-muted-foreground">
          {/* Optional: contact form here */}
          Contact form coming soon.
        </div>
      </div>
    </SectionWrapper>
  );
}
