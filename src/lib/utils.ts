import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
// --- Type Definitions for site.ts usage ---

export type NavItem = {
  title: string;
  href: string;
  icon?: any;
};

export type Service = {
  title: string;
  description: string;
  icon: any;
};

export type GalleryImage = {
  src: string;
  alt: string;
  dataAiHint: string;
  category: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  location?: string;
};

export type Credential = {
  title: string;
  description: string;
  icon: any;
};

export type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
  productnumber: string;
};
