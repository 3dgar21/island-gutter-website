import SectionWrapper from '@/components/shared/SectionWrapper';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Contact() {
  const { address, phone, email } = siteConfig.contact;

  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="Contact Us">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-muted-foreground">
            Serving Staten Island, NY and surrounding areas.
          </p>
          <div className="flex items-start justify-center md:justify-start gap-3">
            <MapPin className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">Address</h4>
              <p className="text-muted-foreground">{address}</p>
            </div>
          </div>
          <div className="flex items-start justify-center md:justify-start gap-3">
            <Phone className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">Phone</h4>
              <a
                href={`tel:${phone}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>
          <div className="flex items-start justify-center md:justify-start gap-3">
            <Mail className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">Email</h4>
              <a
                href={`mailto:${email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {email}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a href="https://www.facebook.com/islandgutter" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/islandgutter" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@islandgutter" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-background border border-border rounded-xl p-6 shadow-sm space-y-5 w-full">
          <h4 className="text-lg font-semibold text-foreground">Send Us a Message</h4>
          <p className="text-sm text-muted-foreground">
            Fill out the form below, and we’ll get back to you as soon as possible.
          </p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-border rounded-md bg-muted/20 text-foreground"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-border rounded-md bg-muted/20 text-foreground"
          />
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="w-full px-4 py-2 border border-border rounded-md bg-muted/20 text-foreground"
          />
          <textarea
            placeholder="How can we help you today?"
            rows={4}
            className="w-full px-4 py-2 border border-border rounded-md bg-muted/20 text-foreground"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 bg-foreground text-background font-medium rounded-md flex items-center justify-center gap-2 hover:opacity-90"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
