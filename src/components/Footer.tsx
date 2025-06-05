
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Mail, Phone, MapPin, Home, Facebook, Instagram } from 'lucide-react'; // Added Facebook and Instagram icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border/40 py-12">
      <div className="container max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <Link href="/#home" className="flex items-center space-x-2 mb-4">
            <Home className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg">{siteConfig.name}</span>
          </Link>
          <p className="text-muted-foreground mb-4">{siteConfig.description}</p>
          <div className="flex space-x-4 mt-4">
            {siteConfig.socialLinks.facebook && (
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            )}
            {siteConfig.socialLinks.instagram && (
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            )}
            {/* Add other social links here similarly */}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">Shop</Link></li>
            <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-foreground">Contact Info</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 shrink-0 text-primary" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">{siteConfig.contact.phone}</a>
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 shrink-0 text-primary" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">{siteConfig.contact.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container max-w-screen-2xl mt-8 pt-8 border-t border-border/40 text-center text-xs text-muted-foreground">
        <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        {/* Optional: Add links to privacy policy, terms of service */}
      </div>
    </footer>
  );
}
