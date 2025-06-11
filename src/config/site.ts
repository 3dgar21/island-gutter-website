import type { NavItem, Service, GalleryImage, Testimonial, Credential } from '../lib/utils';
import {
  PackagePlus, Wrench, Layers, ShieldCheck, BadgeCheck, Award, Home,
  Briefcase, Images, Users, MessageSquare, ShoppingCart,
  Construction, LayoutGrid, DoorOpen, Hammer, Shovel
} from 'lucide-react';

export type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
};
export const siteConfig = {
  name: "Island Gutter",
  description: "Island Gutter Home Improvement & Supply Corp: Your trusted partner for roofing, siding, windows, doors, kitchens, bathrooms, and professional gutter services (installation, repair, cleaning) in Staten Island. We also sell a wide range of home improvement materials and tools.",
  url: "https://www.islandgutter.com",
  ogImage: "https://placehold.co/1200x630.png",
  contact: {
    email: "islandgutter1@gmail.com",
    phone: "718-255-3418",
    address: "420 Manor Road, Staten Island, NY 10314",
    serviceArea: "Serving Staten Island, NY and surrounding areas."
  },
  socialLinks: {
    facebook: "https://www.facebook.com/Islandgutter/",
    instagram: "https://www.instagram.com/island_gutter/",
  }
};

export const navLinks: NavItem[] = [
  { title: "Home", href: "/#home", icon: Home },
  { title: "Services", href: "/#services", icon: Briefcase },
  { title: "Shop", href: "/shop", icon: ShoppingCart },
  { title: "Gallery", href: "/gallery", icon: Images },
  { title: "Testimonials", href: "/#testimonials", icon: Users },
  { title: "About Us", href: "/#about", icon: Award },
  { title: "Contact", href: "/#contact", icon: MessageSquare },
];

export const services: Service[] = [
  { title: "Gutter Installation", description: "Expert installation of high-quality seamless gutter systems tailored to your home's specific needs, ensuring optimal water diversion and protection.", icon: PackagePlus },
  { title: "Gutter Repair", description: "Prompt and reliable repairs for leaks, sagging, storm damage, and all other gutter issues to restore full functionality and prevent water damage.", icon: Wrench },
  { title: "Gutter Cleaning", description: "Thorough cleaning services to remove leaves, debris, and blockages, ensuring your gutters perform optimally and prevent costly water overflow problems.", icon: Layers },
  { title: "Gutter Guards", description: "Installation of effective, low-maintenance gutter guards to keep out leaves and debris, significantly reducing the need for frequent cleaning.", icon: ShieldCheck },
  { title: "Roofing", description: "Comprehensive roofing services, from repairs to full replacements, using quality materials to protect your home.", icon: Construction },
  { title: "Siding", description: "Enhance your home's curb appeal and protection with our professional siding installation and repair services.", icon: Layers },
  { title: "Windows", description: "Installation and replacement of energy-efficient windows to improve your home's comfort and appearance.", icon: LayoutGrid },
  { title: "Doors", description: "Secure and stylish door installation services for entryways, patios, and interiors.", icon: DoorOpen },
  { title: "Masonry Work", description: "Expert masonry services including brickwork, stonework, and repairs for a durable and aesthetic finish.", icon: Hammer },
  { title: "Concrete Services", description: "Professional concrete pouring and finishing for driveways, patios, foundations, and more.", icon: Shovel },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/Deck.jpeg",
    alt: "Finished wooden deck with railing",
    dataAiHint: "custom deck installation",
    category: "general"
  },
  {
    src: "/deck2.jpeg",
    alt: "Wide view of deck area with seating",
    dataAiHint: "deck renovation project",
    category: "general"
  },
  {
    src: "/IMG_2404.jpg",
    alt: "Crew performing gutter installation",
    dataAiHint: "gutter installation worksite",
    category: "gutters"
  },
  {
    src: "/roof1.jpeg",
    alt: "New roof with gutters installed",
    dataAiHint: "roof and gutter project",
    category: "roof"
  },
  {
    src: "/sidding.jpeg",
    alt: "Newly installed siding on home",
    dataAiHint: "siding installation",
    category: "siding"
  },
  {
    src: "/worksite.jpeg",
    alt: "Construction worksite in progress",
    dataAiHint: "masonry or general home improvement site",
    category: "general"
  }
];


export const testimonials = [
  {
    quote: "Island Gutter is absolutely the best! They were professional and efficient.",
    author: "Sarah L.",
    location: "Staten Island, NY",
  },
  {
    quote: "The team did an amazing job on our gutters. Highly recommend!",
    author: "Michael R.",
    location: "Brooklyn, NY",
  },
  {
    quote: "Great service and very affordable. Will definitely use them again.",
    author: "David K.",
    location: "Queens, NY",
  },
];

export const credentials: Credential[] = [
  {
    title: "Licensed & Insured",
    description: "We are fully licensed (State License #IG12345) and comprehensively insured, providing you with complete peace of mind for all our services.",
    icon: ShieldCheck
  },
  {
    title: "Certified Professionals",
    description: "Our team consists of highly trained and certified specialists dedicated to delivering top-quality workmanship and customer satisfaction across all home improvement services.",
    icon: BadgeCheck
  },
  {
    title: "Quality Guarantee",
    description: "We stand behind our work with a comprehensive quality guarantee on all installations and repairs, ensuring long-lasting performance.",
    icon: Award
  },
];

export const contactFormFields = {
  name: { label: "Full Name", placeholder: "Enter your full name" },
  email: { label: "Email Address", placeholder: "Enter your email address" },
  phone: { label: "Phone Number (Optional)", placeholder: "Enter your phone number" },
  message: { label: "Message", placeholder: "How can we help you today?" },
};

export const shopProducts: Product[] = [
  {
    name: '1" #2 Phillips Drywall Screw Setter Carded',
    price: "$1.16 / Each",
    image: "/phillips_drywall_screw_setter_carded.png",
    category: 'Tools',
  },
  {
    name: '5 Pack Heavy Duty Utility Blades',
    category: 'Tools',
    price: '$2.99',
    image: "/5_Pack_Heavy_Duty_Utility_blades.png"
  },
  {
    name: '5 Pack Heavy Duty Hook Blades',
    category: 'Tools',
    price: '$6.49',
    image: '/5_Pack_Heavy_Duty_Hook_Bladesx.png',
  },
];