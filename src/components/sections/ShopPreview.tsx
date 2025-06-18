'use client';

import Image from 'next/image';
import Link from 'next/link';

const allProducts = [
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
    image: '/5_Pack_Heavy_Duty_Hook_Blades.png',
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
          <Link
            href="/shop"
            className="inline-block px-6 py-2 text-sm font-medium border border-input text-foreground hover:bg-muted rounded-md transition"
          >
            View All Products
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            For bulk orders or specific inquiries, please{' '}
            <Link href="/#contact" className="underline text-primary">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
