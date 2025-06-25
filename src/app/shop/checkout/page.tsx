'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, X } from 'lucide-react';

type CartItem = {
  name: string;
  image: string;
  price: string;
  quantity: number;
};

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

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

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return total + price * item.quantity;
  }, 0);

  const handlePlaceOrder = async () => {
    if (!name || !address || !phone || !email) {
      setError('Please fill out all delivery details.');
      return;
    }

    try {
      // Step 1: Create Stripe Checkout session
      const stripeRes = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems }),
      });

      const stripeData = await stripeRes.json();

      if (!stripeData.url) {
        alert('❌ Failed to create checkout session.');
        return;
      }

      // Step 2: Save order to SQLite (with user info)
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          address,
          phone,
          email,
          cartItems,
          total: totalAmount,
        }),
      });

      // Step 3: Redirect to Stripe Checkout
      window.location.href = stripeData.url;

    } catch (err) {
      console.error(err);
      alert('❌ Something went wrong during checkout.');
    }
  };

  return (
    <section className="py-20 bg-muted/50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Checkout</h1>

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
                  <Image
                    src={item.image}
                    alt={item.name || 'Product image'}
                    width={80}
                    height={80}
                    className="rounded object-contain"
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

            {/* 🚚 Delivery Details Form */}
            <div className="bg-white p-6 rounded shadow mt-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Delivery Information</h2>
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-input p-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-input p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-input p-2 rounded col-span-full"
                />
                <textarea
                  placeholder="Delivery Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border border-input p-2 rounded col-span-full"
                  rows={3}
                />
              </div>

              <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition"
              >
                Pay Now
              </button>
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
