'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// These should match your DB order data structure
interface OrderData {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  orderType: string;
  total: number;
  created_at: string;
  items: string; // JSON stringified array of cart items
}

type CartItem = {
  name: string;
  price: string;
  quantity: number;
};

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [order, setOrder] = useState<OrderData | null>(null);
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!sessionId) return;
      const res = await fetch('/api/orders');
      const data: OrderData[] = await res.json();

      // match session id to the latest order for now (improve later)
      const latestOrder = data[0];
      setOrder(latestOrder);
      setItems(JSON.parse(latestOrder.items));
    };

    fetchOrder();
  }, [sessionId]);

  const printReceipt = () => window.print();

  if (!order) {
    return (
      <div className="p-6 max-w-2xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Receipt...</h1>
        <p>Please wait while we load your order details.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded print:p-0 print:shadow-none print:max-w-full">
      <div className="flex justify-center mb-6">
        <Image
          src="/photo env logo.png"
          alt="Island Gutter Logo"
          width={300}
          height={100}
          className="object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold mb-2 text-center">✅ Order Confirmed</h1>
      <p className="text-center mb-6 text-muted-foreground">
        Thank you, {order.name}! Your order has been placed successfully.
      </p>

      <div className="mb-4 text-sm">
        <p><strong>Order Type:</strong> {order.orderType}</p>
        <p><strong>Order #:</strong> #{String(order.id).padStart(4, '0')}</p>
        <p><strong>Customer:</strong> {order.name}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Phone:</strong> {order.phone}</p>
        {order.orderType === 'Delivery' && (
          <p><strong>Address:</strong> {order.address}</p>
        )}
        <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
        <p><strong>Date:</strong> {new Date(order.created_at).toLocaleString()}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Items:</h3>
        <ul className="list-disc list-inside text-sm">
          {items.map((item, idx) => (
            <li key={idx}>{item.name} - {item.price}</li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <button
          onClick={printReceipt}
          className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 print:hidden"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}
