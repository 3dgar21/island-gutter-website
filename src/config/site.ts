import { Wrench, Hammer, Home, ShieldCheck } from 'lucide-react';

export const siteConfig = {
  name: "Island Gutter",
  description: "Island Gutter: Your trusted home improvement partner in gutters, roofing, and exterior services.",
  
  contact: {
    address: "123 Main St, YourTown, USA",
    phone: "123-456-7890",
    email: "info@islandgutter.com",
    serviceArea: "Proudly serving YourTown and surrounding areas."
  },

  navLinks: [
    { title: "Home", href: "/#home" },
    { title: "About", href: "/#about" },
    { title: "Services", href: "/#services" },
    { title: "Gallery", href: "/#gallery" },
    { title: "Testimonials", href: "/#testimonials" },
    { title: "Contact", href: "/#contact" },
    { title: "Shop", href: "/shop" }
  ],

  services: [
    { title: "Gutter Installation", description: "Professional gutter installation with quality materials.", icon: Wrench },
    { title: "Roofing Repair", description: "Fix and replace damaged roofs quickly and safely.", icon: Hammer },
    { title: "Siding & Windows", description: "Improve your home’s energy efficiency and look.", icon: Home },
    { title: "Storm Protection", description: "Reliable storm guard solutions for peace of mind.", icon: ShieldCheck }
  ],

  gallery: [
    { imageUrl: "https://placehold.co/600x400", alt: "Roof Project", caption: "New shingle roof" },
    { imageUrl: "https://placehold.co/600x400", alt: "Gutter Work", caption: "Aluminum gutter install" },
    { imageUrl: "https://placehold.co/600x400", alt: "Window Install", caption: "Vinyl replacement windows" }
  ],

  testimonials: [
    { name: "Maria G.", feedback: "They did an amazing job on my roof. Professional and fast!" },
    { name: "James L.", feedback: "Great pricing and even better service. Highly recommend!" },
    { name: "Sophia W.", feedback: "My new gutters look great. Will hire again for future projects." }
  ]
};
