import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
  {
    name: 'Masonry Cut-Off Wheel',
    price: '$1.29',
    image: '/products/cutoff-wheel.png',
  },
  {
    name: '12\" Rafter Square',
    price: '$9.99',
    image: '/products/rafter-square.png',
  },
  {
    name: 'Drywall Jab Saw',
    price: '$6.49',
    image: '/products/jab-saw.png',
  },
];

export default function ShopPreview() {
  return (
    <section className="py-12 bg-background" id="shop-preview">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Tools & Materials for Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((item) => (
            <div key={item.name} className="border p-4 rounded-lg shadow hover:shadow-md">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-primary text-lg font-medium">{item.price}</p>
              <button className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <Link href="/shop" className="inline-block mt-6 text-primary font-semibold underline">
          View All Products
        </Link>
      </div>
    </section>
  );
}
