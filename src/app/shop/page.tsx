'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { allProducts } from '@/config/products';

type Product = {
  name: string;
  image: string;
  price: string;
  quantity?: number;
  category?: string;
};

type QuantityMap = {
  [key: string]: number;
};

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantities, setQuantities] = useState<QuantityMap>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const itemsPerPage = 9;

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.category || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleQuantityChange = (productName: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [productName]: value }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.name] || 1;
    if (quantity < 1) return;

    const updatedCart = (() => {
      const existing = cartItems.find((item) => item.name === product.name);
      if (existing) {
        return cartItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity! + quantity }
            : item
        );
      } else {
        return [...cartItems, { ...product, quantity }];
      }
    })();

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`Added ${quantity} × ${product.name} to cart.`);
  };

  const totalCartQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  return (
    <section className="py-20 bg-muted/50">
      <div className="fixed top-6 right-6 z-50">
        <div className="relative">
          <Link href="/shop/checkout">
            <ShoppingCart className="w-8 h-8 text-foreground cursor-pointer" />
          </Link>
          {totalCartQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full px-2 py-0.5">
              {totalCartQuantity}
            </span>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center w-full mb-6">
          <h2 className="text-sm tracking-widest text-muted-foreground font-semibold uppercase">
            Browse Our Tools & Materials
          </h2>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Shop All Products
          </h1>
        </div>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search tools or materials..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
              >
                <div className="bg-gray-100 aspect-[4/3] relative">
                  <Image
                    src={product.image}
                    alt={`Photo of ${product.name}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-sm text-foreground mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-1">
                    Category: {product.category || 'Uncategorized'}
                  </p>
                  <p className="text-sm text-foreground font-medium mb-2">
                    {product.price}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <label className="text-xs text-muted-foreground">Qty:</label>
                    <input
                      type="number"
                      min={1}
                      value={quantities[product.name] || 1}
                      onChange={(e) =>
                        handleQuantityChange(product.name, Number(e.target.value))
                      }
                      className="w-16 px-2 py-1 border rounded"
                    />
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-primary text-white text-sm px-4 py-2 rounded hover:bg-primary/90 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground col-span-full">
              No products found.
            </p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        <div className="flex flex-col items-center mt-10">
          <button
            onClick={() => {
              localStorage.removeItem('cart');
              window.location.reload();
            }}
            className="ml-4 px-6 py-2 text-sm font-medium border border-destructive text-destructive hover:bg-destructive hover:text-white rounded-md transition"
          >
            Clear Cart
          </button>
          <p className="mt-4 text-center text-muted-foreground">
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
