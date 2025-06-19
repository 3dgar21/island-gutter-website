export type GalleryImage = {
  src: string;
  alt: string;
  category: 'Gutters' | 'Decks' | 'Siding' | 'Concrete' | 'Before & After' | 'bathrooms' | 'Kitchens' | 'Roofing'| 'Other';
};

export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/before1.jpeg',
    alt: 'Gutter installation',
    category: 'Before & After',
  },
  {
    src: '/gallery/after1.jpg',
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
  // Add the rest here...
];