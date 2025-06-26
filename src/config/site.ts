import type {
  NavItem,
  Service,
  GalleryImage,
  Testimonial,
  Credential
} from '../lib/utils';

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
  description:
    "Island Gutter Home Improvement & Supply Corp: Your trusted partner for roofing, siding, windows, doors, kitchens, bathrooms, and professional gutter services (installation, repair, cleaning) in Staten Island. We also sell a wide range of home improvement materials and tools.",
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
    instagram: "https://www.instagram.com/island_gutter/"
  }
};

export const navLinks: NavItem[] = [
  { title: "Home", href: "/#home", icon: Home },
  { title: "Services", href: "/#services", icon: Briefcase },
  { title: "Shop", href: "/shop", icon: ShoppingCart },
  { title: "Gallery", href: "/gallery", icon: Images },
  { title: "Testimonials", href: "/#testimonials", icon: Users },
  { title: "About Us", href: "/#about", icon: Award },
  { title: "Contact", href: "/#contact", icon: MessageSquare }
];

export const services: Service[] = [
  {
    title: "Gutter Installation",
    description: "Expert installation of high-quality seamless gutter systems tailored to your home's specific needs, ensuring optimal water diversion and protection.",
    icon: PackagePlus
  },
  {
    title: "Gutter Repair",
    description: "Prompt and reliable repairs for leaks, sagging, storm damage, and all other gutter issues to restore full functionality and prevent water damage.",
    icon: Wrench
  },
  {
    title: "Gutter Cleaning",
    description: "Thorough cleaning services to remove leaves, debris, and blockages, ensuring your gutters perform optimally and prevent costly water overflow problems.",
    icon: Layers
  },
  {
    title: "Gutter Guards",
    description: "Installation of effective, low-maintenance gutter guards to keep out leaves and debris, significantly reducing the need for frequent cleaning.",
    icon: ShieldCheck
  },
  {
    title: "Roofing",
    description: "Comprehensive roofing services, from repairs to full replacements, using quality materials to protect your home.",
    icon: Construction
  },
  {
    title: "Siding",
    description: "Enhance your home's curb appeal and protection with our professional siding installation and repair services.",
    icon: Layers
  },
  {
    title: "Windows",
    description: "Installation and replacement of energy-efficient windows to improve your home's comfort and appearance.",
    icon: LayoutGrid
  },
  {
    title: "Doors",
    description: "Secure and stylish door installation services for entryways, patios, and interiors.",
    icon: DoorOpen
  },
  {
    title: "Masonry Work",
    description: "Expert masonry services including brickwork, stonework, and repairs for a durable and aesthetic finish.",
    icon: Hammer
  },
  {
    title: "Concrete Services",
    description: "Professional concrete pouring and finishing for driveways, patios, foundations, and more.",
    icon: Shovel
  }
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

export const testimonials: Testimonial[] = [

  {
    quote: "I recently hired Jesus and his team from Island Gutter and Home Improvement for work on my deck, windows, and siding, and I couldn’t be more pleased with the results! From start to finish, the experience was outstanding. Jesus was professional, reliable, and clearly takes pride in his work. His crew was equally impressive—skilled, respectful, and efficient. The craftsmanship on my deck is excellent, the windows were installed perfectly, and the new siding has completely transformed the exterior of my home. They paid attention to every detail and made sure everything was done right. I also appreciated how clean they left the job site each day. I highly recommend Jesus and Island Gutter and Home Improvement to anyone looking for quality home improvement work. Thank you for the fantastic service!",
    author: "Neal M. ",
    location: "Staten Island, NY"
  },
  {
    quote: "My attached neighbor and I met with Jesus a few times to discuss the scope of the work. We requested an estimate which he emailed within one day of our last meeting. When I reviewed the estimate, I thought it was on the high side so my neighbor and I asked around and we learned that although it was a bit higher than other contractors, it was not unreasonable. The old expression which says you get what you pay for is so true. The work was outstanding and Jesus was a total gentleman and an outstanding professional. During the installation of the siding. There were two instances where there were issues not to my liking. I showed them to Jesus and in both cases, he had the men redo the work. He consistently went out of his way to satisfy us. His reputation for excellent work is well deserved. The quality of the work performed by Island Gutter and Home Improvement was the best I have ever had. It was and continues to be a pleasure dealing with Jesus and his men. I highly recommend him.",
    author: "sagzik59.",
    location: "Staten Island, NY"
  },
  {
    quote: "We recently had new gutters installed on our house on Staten Island, and the experience was excellent from start to finish. Jesus (the owner) and his entire team were extremely professional, punctual, and highly skilled. They took the time to assess our home’s needs and provided helpful recommendations. The installation was quick and clean, with no mess left behind. The gutters look great and have already handled heavy rain without any issues. We’re very satisfied with the high quality of work and would strongly recommend their services to anyone in need of new gutters!",
    author: "Andrew E.",
    location: "Staten Island, NY"
  },
  {
    quote: "I went into the showroom on Friday. Spoke with Jesus about an estimate for new gutters. He was at my house in 45 minutes, and was ready to work the next day! The workers were on time, and clean. The price of the job was reasonable, the cherry on top was a FREE gutter guard system. Can’t recommend Jesus and his company enough. Professional through and through.",
    author: "Sean B.",
    location: "Staten Island, NY"
  },
  {
    quote: "Jesus and team were top notch! I had exterior work done that required immediate attention and could not praise the team enough for the work that was done. They were timely, courteous and performed very high quality work throughout all phases of the project! I would highly recommend",
    author: "Justin S.",
    location: "Staten Island, NY"
  },
  {
    quote:"Nothing but good things to say about Island Gutter. I needed to replace my gutters and went with the new seamless ones. Jesus and his crew were timely, courteous, professional and clean. Everything was explained to me throughout the project. The gutters look great. I already told Jesus I would be calling them again for future projects. Much appreciated",
    author: "Thomas J.",
    location: "Staten Island, NY"
  },
  {
    quote: "Jesus and his Crew are awesome. Their work is high quality and they are so considerate of their clients needs. Jesus did work for me many years ago and we liked him from the beginning. When we saw his truck recently, we immediately hired him to do our Roof and Gutters because we know he is trustworthy and meticulous with his jobs. They did a great job in the past and he did a phenomenal job with our Roof. He is someone we will call for everything that needs to be taken care of. Give him a call and see for yourself. He is very accommodating and considerate of what his customers need.",
    author: "Donna S.",
    location: "Staten Island, NY" 
  },
  {
    quote: "Jesus and his team are very professional and helped guide us in our project. Jesus is very knowledgeable and had solutions for all our needs. I highly recommend Island gutter home improvement.",
    author: "Barbara L.",
    location: "Staten Island, NY" 
  },
  {
    quote: "It is with great pleasure to write this review of two projects I have experienced with Island Gutter and Home Improvement Corp. Island Gutter performed the renovation of a bathroom with shower and renovation of a washer-dryer room. Working with Jesus Pavia was a pleasure. He is extremely knowledgeable, friendly and easy to work with. He provided expert advice in planning and executing both projects. He was always willing to listen to my questions and requests, and work with me to achieve the results that I expected. His advice on overall design and selection of materials was excellent. The outcome of his work was meticulous and the end-result, in both projects, fulfilled the plans perfectly. I was extremely impressed with the professionalism, courtesy, workmanship, and expertise of his staff, especially his foreman, Victor. His staff was always friendly, courteous, neat, careful, and diligent. The workmanship was first class. They provided prompt service and worked very well with the plumbing company, PAC. Each day that they worked, they left the work area clean and safe. (This was greatly appreciated!) All in all, I cannot recommend PAC too highly. I truly appreciate and trust Jesus' professionalism and advice. I look forward to future projects with him and his company.",
    author: "Leonard B.",
    location: "Staten Island, NY" 
  },
   {
    quote: "Renovated my bathroom, their workmanship is excellent, very professional, pleasure to work with. Would highly recommend, cannot say enough good things about this company and the work they do.",
    author: "Robert L.",
    location: "Staten Island, NY" 
  },
   {
    quote: "Owning a home can be very stressful! You want work done and you don't know who you can trust. We were recommended Jesus, Island Gutter and Home Improvement by PAC to do some patching and sheet rock after some major electrical work we had done! Jesus called me back immediately! We needed a lot of other major work done...kitchen countertops, backsplash, interior doors, exterior doors, storm doors and molding and painting for the entire house, and all new closet fixtures. They also power washed the whole exterior of the house the fences and the concrete! Jesus explained in detail how he was going to complete everything in the home! He is very professional and goes above and beyond to make you happy and satisfied as the work is being completed! Jesus and his staff are professional, understanding and very articulate and skilled and take pride in their work! Island Gutter and Home Improvement are highly trusted and qualified to complete any home project you need! We will definitely continue to use them for our future projects and most definitely will be recommending his business to family and friends! We are very satisfied customers and give this company a rating of hundreds of stars ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ accross the board! If you ever need a recommendation we will definitely provide it! Thank you Jesus and your staff for all you guys did! Our house looks amazing!",
    author: "JEANMARIE L.",
    location: "Staten Island, NY" 
  },
   {
    quote: "We had an unexpected plumbing issue that required more intensive work than we originally anticipated. Our plumbing contractor, PAC, recommended Island Gutters. Jesus and his team responded quickly, provided cost saving options, and were able to immediately attend to our 'unexpected' issue that enabled the plumbers to complete their work. Rene came back the second day to paint the outside work done, and cap off the professional job. We were concerned when PAC was unable to access the leaky pipe, but Island Gutter was able to go through the outside of house (scary stuff) and save the day. Very quick. Very responsive. The crew took pains to clean up and communicate. We were impressed the finished outside job. Kudos!",
    author: "Daniel Velez",
    location: "Staten Island, NY" 
  },
   {
    quote: `Mr. Jesus Pavia was very interested in delivering a complete and professional job for the client I proposed his services for. Jesus quoted the entire job and the specifications accurately and very fairly, specifying the use of top-quality materials to be installed, after removal and demo, by his highly efficient and experienced crew.

It was also necessary to demo and then do additional carpentry work to build back several fascia board areas which were found to be rotting and unserviceable, and in order to correct previously poor installation and positioning of the old gutters.

When the job was completed, not only did everything look beautiful but the new leaders and gutters were up to code and will perform significantly better than the original system which they replaced.

The price was very reasonable, the work very professional and the whole experience of contracting Island Gutter & Home Inprovement Corp. a pleasure. I would highly recommend them for all who wish to improve their home the right way!`,
    author: "Dennis Brown",
    location: "Staten Island, NY" 
  },
   // Add more testimonials as needed
];

export const credentials: Credential[] = [
  {
    title: "Home Improvement Contractor License",
    description: "We are fully licensed (State License #2109379-DCA) and comprehensively insured, providing you with complete peace of mind for all our services.",
    icon: ShieldCheck
  },
  {
    title: "CIRTIFICATED OF CONTRACTOR REGISTRATION",
    description: "Our team consists of highly trained and certified specialists dedicated to delivering top-quality workmanship and customer satisfaction across all home improvement services.",
    icon: BadgeCheck
  },
  {
    title: "Quality Guarantee",
    description: "We stand behind our work with a comprehensive quality guarantee on all installations and repairs, ensuring long-lasting performance.",
    icon: Award
  }
];

export const contactFormFields = {
  name: { label: "Full Name", placeholder: "Enter your full name" },
  email: { label: "Email Address", placeholder: "Enter your email address" },
  phone: { label: "Phone Number (Optional)", placeholder: "Enter your phone number" },
  message: { label: "Message", placeholder: "How can we help you today?" }
};

export const shopProducts: Product[] = [
  {
    name: '1" #2 Phillips Drywall Screw Setter Carded',
    price: "$2.15 / Each",
    image: "/phillips_drywall_screw_setter_carded.png",
    category: 'Tools',
  },
  {
    name: '5 Pack Heavy Duty Utility Blades',
    category: 'Tools',
    price: '$1.09',
    image: "/5_Pack_Heavy_Duty_Utility_blades.png",
  },
  {
    name: '5 Pack Heavy Duty Hook Blades',
    category: 'Tools',
    price: '$6.49',
    image: '/5_Pack_Heavy_Duty_Hook_Blades.png',
  },
]