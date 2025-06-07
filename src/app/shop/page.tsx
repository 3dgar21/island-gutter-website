'use client';

import Image from 'next/image';
import { useState } from 'react';

const allProducts = [
  {
    name: 'Masonry Cut-Off Wheel',
    category: 'Tools',
    price: '$1.29',
    image: '/products/cutoff-wheel.png',
  },
  {
    name: '12\" Rafter Square',
    category: 'Tools',
    price: '$9.99',
    image: '/products/rafter-square.png',
  },
  {
    name: 'Drywall Jab Saw',
    category: 'Tools',
    price: '$6.49',
    image: '/products/jab-saw.png',
  },
  {
    name: 'Contractor Chalk Reel',
    category: 'Materials',
    price: '$5.99',
    image: '/products/chalk-reel.png',
  },
  {
    name: 'Carbide Tipped Saw Blade',
    category: 'Tools',
    price: '$12.75',
    image: '/products/saw-blade.png',
  },
  {
    name: 'Heavy-Duty Gloves',
    category: 'Materials',
    price: '$3.95',
    image: '/products/gloves.png',
  },
];

export default function ShopPage() {
  const [category, setCategory] = useState('All');

  const filteredProducts =
    category === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === category);

  return (
    <section className="py-12 px-4 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">All Products</h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {['All', 'Tools', 'Materials'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded border font-medium hover:bg-primary hover:text-white transition ${
              category === cat ? 'bg-primary text-white' : 'bg-white text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.name}
            className="border p-4 rounded-lg shadow hover:shadow-md flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">Category: {product.category}</p>
            <p className="text-primary font-medium">{product.price}</p>
            <button className="mt-3 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

