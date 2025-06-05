import type { NavItem, Service, GalleryImage, Testimonial, Credential, Product } from '../lib/utils';
import {
  PackagePlus, Wrench, Layers, ShieldCheck, BadgeCheck, Award, Home,
  Briefcase, Images, Users, MessageSquare, ShoppingCart,
  Construction, LayoutGrid, DoorOpen, Hammer, Shovel
} from 'lucide-react';

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
  { src: "https://placehold.co/400x300.png", alt: "Gutter installation project", dataAiHint: "gutter installation", category: "gutters" },
  { src: "https://placehold.co/400x300.png", alt: "New siding on a house", dataAiHint: "house siding", category: "siding" },
  { src: "https://placehold.co/400x300.png", alt: "Window replacement project", dataAiHint: "window replacement", category: "windows" },
  { src: "https://placehold.co/400x300.png", alt: "Roof repair work", dataAiHint: "roof repair", category: "roof" },
  { src: "https://placehold.co/400x300.png", alt: "New front door installation", dataAiHint: "front door", category: "doors" },
  { src: "https://placehold.co/400x300.png", alt: "Cleaned gutters", dataAiHint: "gutter cleaning", category: "gutters" },
  { src: "https://placehold.co/400x300.png", alt: "Vinyl siding detail", dataAiHint: "vinyl siding", category: "siding" },
  { src: "https://placehold.co/400x300.png", alt: "Energy efficient windows", dataAiHint: "efficient windows", category: "windows" },
  { src: "https://placehold.co/400x300.png", alt: "Shingle roofing", dataAiHint: "shingle roof", category: "roof" },
  { src: "https://placehold.co/400x300.png", alt: "Patio door", dataAiHint: "patio door", category: "doors" },
  { src: "https://placehold.co/400x300.png", alt: "Gutter guard installation", dataAiHint: "gutter guard", category: "gutters" },
  { src: "https://placehold.co/400x300.png", alt: "General home improvement", dataAiHint: "home exterior", category: "general" },
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
    id: "mat001",
    name: "Seamless Aluminum Gutters (per ft)",
    description: "High-quality, custom-fit seamless aluminum gutters. Durable and long-lasting.",
    price: "$8.50 / ft",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "aluminum gutters"
  },
  {
    id: "mat002",
    name: "Downspout Assembly (10ft)",
    description: "Complete 10ft downspout assembly, includes elbow and fasteners.",
    price: "$25.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "downspout assembly"
  },
  {
    id: "tool001",
    name: "Gutter Cleaning Scoop",
    description: "Ergonomic scoop designed for easy removal of leaves and debris from gutters.",
    price: "$15.99",
    imageUrl: "https://placehold.co/400x300.png",
    category: "tools",
    dataAiHint: "gutter scoop"
  },
  {
    id: "mat003",
    name: "Leaf Guard Mesh (20ft roll)",
    description: "Durable mesh to prevent leaves and debris from clogging your gutters.",
    price: "$30.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "leaf guard"
  },
  {
    id: "tool002",
    name: "Gutter Sealer Caulk",
    description: "Professional grade caulk for sealing gutter seams and preventing leaks.",
    price: "$12.50",
    imageUrl: "https://placehold.co/400x300.png",
    category: "tools",
    dataAiHint: "gutter caulk"
  },
   {
    id: "tool003",
    name: "Heavy Duty Ladder",
    description: "Extendable heavy-duty ladder, perfect for reaching high gutters safely.",
    price: "$175.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "tools",
    dataAiHint: "ladder construction"
  },
  {
    id: "mat004",
    name: "Vinyl Siding Panels (per sq ft)",
    description: "Durable and low-maintenance vinyl siding panels for exterior walls.",
    price: "$4.50 / sq ft",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "vinyl siding"
  },
  {
    id: "mat005",
    name: "Exterior Steel Door (Pre-hung)",
    description: "Secure and energy-efficient pre-hung exterior steel door.",
    price: "$250.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "steel door"
  },
  {
    id: "mat006",
    name: "Double-Hung Vinyl Window (30x48)",
    description: "Energy-efficient double-hung vinyl replacement window, 30in x 48in.",
    price: "$180.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "vinyl window"
  },
  {
    id: "mat007",
    name: "Copper Gutters (per ft)",
    description: "Premium copper gutters for a classic, high-end look and longevity.",
    price: "$25.00 / ft",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "copper gutters"
  },
  {
    id: "mat008",
    name: "Brush Gutter Guards (4ft sections)",
    description: "Easy-to-install brush-style gutter guards to keep debris out.",
    price: "$18.00 / section",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "brush guard"
  },
  {
    id: "mat009",
    name: "Vinyl Downspout (10ft)",
    description: "Standard white vinyl downspout, 10ft length.",
    price: "$15.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "vinyl downspout"
  },
  {
    id: "mat010",
    name: "Decorative Leader Head (Aluminum)",
    description: "Ornamental aluminum leader head to enhance downspout aesthetics.",
    price: "$45.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "leader head"
  },
  {
    id: "mat011",
    name: "Gutter Elbow (A-Style, White)",
    description: "Standard A-style white aluminum gutter elbow for directing water flow.",
    price: "$5.50",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "gutter elbow"
  },
  {
    id: "mat012",
    name: "Siding Panels (Box of 10)",
    description: "High-quality vinyl siding panels for exterior home finishing.",
    price: "$120.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "siding panels"
  },
  {
    id: "mat013",
    name: "Exterior Entry Door (Pre-hung, Steel)",
    description: "Secure and durable pre-hung steel exterior entry door with frame.",
    price: "$350.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "entry door"
  },
  {
    id: "mat014",
    name: "Replacement Windows (Vinyl, Double-Hung)",
    description: "Energy-efficient vinyl double-hung replacement windows, standard size.",
    price: "$190.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "replacement window"
  },
  {
    id: "mat015",
    name: "Seamless Gutters (Per Foot, Aluminum)",
    description: "Custom-length seamless aluminum gutters, various colors available.",
    price: "$7.50 / ft",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "seamless gutters"
  },
  {
    id: "mat016",
    name: "Gutter Guards (Mesh, 50ft Roll)",
    description: "Heavy-duty mesh gutter guards to prevent debris buildup.",
    price: "$75.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "mesh guards"
  },
  {
    id: "mat017",
    name: "Downspouts (Aluminum, 10ft Section)",
    description: "Standard aluminum downspout section, 10-foot length.",
    price: "$22.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "aluminum downspout"
  },
  {
    id: "mat018",
    name: "Leader Heads (Copper, Decorative)",
    description: "Ornate copper leader heads for enhanced water collection aesthetics.",
    price: "$85.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "copper leader"
  },
  {
    id: "mat019",
    name: "Gutter Elbows (Aluminum, Pack of 5)",
    description: "Pack of 5 aluminum gutter elbows, A-style or B-style.",
    price: "$20.00",
    imageUrl: "https://placehold.co/400x300.png",
    category: "materials",
    dataAiHint: "gutter elbows"
  }
];

    