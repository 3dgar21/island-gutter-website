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
  const [orderType, setOrderType] = useState<'Pickup' | 'Delivery'>('Pickup');
  const [error, setError] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [stripeUrl, setStripeUrl] = useState('');

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

  const handleRemoveItem = (index: number) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const baseTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return total + price * item.quantity;
  }, 0);

  const deliveryFee = orderType === 'Delivery' ? 10 : 0;
  const totalAmount = baseTotal + deliveryFee;

  const handleReviewOrder = async () => {
    if (!name || !phone || !email || (orderType === 'Delivery' && !address)) {
      setError('Please fill out all required fields. Address is required for delivery.');
      return;
    }

    try {
      const currentOrder = localStorage.getItem('orderNumber');
      const newOrderNumber = currentOrder ? parseInt(currentOrder) + 1 : 1;
      const paddedOrderNumber = newOrderNumber.toString().padStart(4, '0');
      localStorage.setItem('orderNumber', newOrderNumber.toString());
      setOrderNumber(paddedOrderNumber);

      const receipt = {
        name,
        email,
        phone,
        address,
        orderType,
        cartItems,
        total: totalAmount,
        orderNumber: paddedOrderNumber,
        created_at: new Date().toISOString(),
      };
      localStorage.setItem('receipt', JSON.stringify(receipt));

      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(receipt),
      });

      const stripeRes = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems, orderType }),
      });

      const stripeData = await stripeRes.json();
      if (!stripeData.url) {
        alert('Failed to create Stripe session.');
        return;
      }

      setStripeUrl(stripeData.url);
      setShowReceipt(true);
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  const handlePrint = () => window.print();

  if (showReceipt) {
    const now = new Date().toLocaleString();

    return (
      <section className="py-16 px-4 bg-white text-black min-h-screen print:px-0">
        <div className="max-w-lg mx-auto border border-gray-300 rounded shadow p-6">
          <Image
            src="/photo env logo.png"
            alt="Island Gutter Logo"
            width={150}
            height={60}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-center">Island Gutter</h1>
          <h2 className="text-green-600 text-xl font-semibold text-center mt-2 mb-4">✅ Order Confirmed</h2>
          <p className="text-center mb-4">
            Thank you, {name}! Your order has been placed successfully.
          </p>

          <div className="text-sm border-t pt-4 space-y-1">
            <p><strong>Order Type:</strong> {orderType}</p>
            <p><strong>Order #:</strong> {orderNumber}</p>
            <p><strong>Customer:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            {orderType === 'Delivery' && <p><strong>Address:</strong> {address}</p>}
            <p><strong>Total:</strong> ${totalAmount.toFixed(2)}</p>
            <p><strong>Date:</strong> {now}</p>
          </div>

          <div className="text-sm mt-4">
            <p className="font-semibold mb-1">Items:</p>
            <ul className="list-disc pl-5">
              {cartItems.map((item, i) => (
                <li key={i}>{item.name} - {item.price}</li>
              ))}
            </ul>
          </div>

          {stripeUrl && (
            <button
              onClick={() => window.location.href = stripeUrl}
              className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 print:hidden"
            >
              💳 Pay Now
            </button>
          )}

          <button
            onClick={handlePrint}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 print:hidden"
          >
            🖨️ Print Receipt
          </button>
        </div>
      </section>
    );
  }

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
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-medium">{item.price}</p>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="text-destructive hover:text-red-700"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <label className="block mb-2 font-medium">Order Type:</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value as 'Pickup' | 'Delivery')}
                className="border p-2 rounded w-full md:w-1/2"
              >
                <option value="Pickup">Pickup</option>
                <option value="Delivery">Delivery (+$10)</option>
              </select>
            </div>

            <div className="flex justify-between items-center pt-6 border-t">
              <h3 className="text-xl font-bold">Total:</h3>
              <span className="text-xl font-semibold text-primary">${totalAmount.toFixed(2)}</span>
            </div>

            <div className="bg-white p-6 rounded shadow mt-6">
              <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 rounded col-span-full"
                />
                <textarea
                  placeholder="Delivery Address (required for Delivery)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border p-2 rounded col-span-full"
                  rows={3}
                />
              </div>

              <button
                onClick={handleReviewOrder}
                className="mt-6 w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90"
              >
                Review Order
              </button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/shop">
                <button className="px-6 py-2 border text-sm font-medium border-input text-foreground hover:bg-muted rounded-md">
                  Continue Shopping
                </button>
              </Link>
              <button
                onClick={handleClearCart}
                className="px-6 py-2 border text-sm font-medium border-destructive text-destructive hover:bg-destructive hover:text-white rounded-md flex items-center gap-2"
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