import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | false | null)[]): string {
  return twMerge(clsx(inputs));
}

// --- Type Definitions for site.ts usage ---

export type NavItem = {
  title: string;
  href: string;
  icon?: React.ElementType;
};

export type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
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
  icon: React.ElementType;
};

export type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
  productnumber?: string;
};
