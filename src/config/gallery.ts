export type GalleryImage = {
  src: string;
  alt: string;
  category: 'Gutters' | 'Decks' | 'Siding' | 'Concrete & Masonry Work' | 'Before & After' | 'bathrooms' | 'Kitchens' | 'Roofing'| 'Other';
};

export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/before1.jpeg',
    alt: 'Gutter installation',
    category: 'Before & After',
  },
  {
    src: '/gallery/after1.jpeg',
    alt: 'Gutter installation',
    category: 'Before & After',
  },
  {
    src: '/gallery/bathroom1.jpeg',
    alt: 'Bathroom renovation project',
    category: 'bathrooms',
  },
  {
    src: '/gallery/bathroom2.jpeg',
    alt: 'Bathroom renovation project',
    category: 'bathrooms',
  },
  {
    src: '/gallery/bathroom3.jpeg',
    alt: 'bathroom renovation project',
    category: 'bathrooms',
    
  },
   {
    src: '/gallery/bathroom4.jpeg',
    alt: 'bathroom renovation project',
    category: 'bathrooms',
    
  },

  {
    src: '/gallery/Concrete1.jpeg',
    alt: 'Concrete and masonry work',
    category: 'Concrete & Masonry Work',
    
  },
  {
    src: '/gallery/Concrete2.jpeg',
    alt: 'Concrete and masonry work',
    category: 'Concrete & Masonry Work',
    
  },

   {
    src: '/gallery/sidding1.jpeg',
    alt: 'sidding installation',
    category: 'Siding',
  },
  {
    src: '/gallery/sidding2.jpeg',
    alt: 'sidding installation',
    category: 'Siding',
  },
  // Add the rest here...
];