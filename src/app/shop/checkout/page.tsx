'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2, X } from 'lucide-react';

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <section className="py-20 bg-muted/50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          Checkout
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Your cart is empty.</p>
            <Link href="/shop">
              <button className="px-6 py-2 text-sm font-medium border border-input text-foreground hover:bg-muted rounded-md transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">{item.name}</h2>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-foreground font-medium">{item.price}</p>
                  <button onClick={() => handleRemoveItem(index)} className="text-destructive hover:text-red-700">
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-6 border-t">
              <h3 className="text-xl font-bold text-foreground">Total:</h3>
              <span className="text-xl font-semibold text-primary">${totalAmount.toFixed(2)}</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/shop">
                <button className="px-6 py-2 text-sm font-medium border border-input text-foreground hover:bg-muted rounded-md transition">
                  Continue Shopping
                </button>
              </Link>
              <button
                onClick={handleClearCart}
                className="px-6 py-2 text-sm font-medium border border-destructive text-destructive hover:bg-destructive hover:text-white rounded-md transition flex items-center gap-2"
              >
                <Trash2 size={16} /> Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}