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
    name: '12" Rafter Square',
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
];

export default function ShopPreview() {
  return (
    <section id="shop" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-sm tracking-widest text-muted-foreground font-semibold uppercase mb-2">
          Featured Materials & Tools
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-foreground">
          Our Products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
            >
              <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={`Photo of ${product.name}`}
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm text-foreground mb-1">
                  {product.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-1">
                  Category: {product.category}
                </p>
                <p className="text-sm text-foreground font-medium">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/shop"
            className="inline-block px-6 py-2 text-sm font-medium border border-input text-foreground hover:bg-muted rounded-md transition"
          >
            View All Products
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            For bulk orders or specific inquiries, please{' '}
            <a href="/#contact" className="underline text-primary">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
