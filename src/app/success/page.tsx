'use client';

import { useEffect, useState } from 'react';

type CartItem = {
  name: string;
  price: string;
  quantity: number;
};

type ReceiptData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  orderType: string;
  cartItems: CartItem[];
  total: number;
  created_at: string;
};

export default function SuccessPage() {
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('receipt');
    if (data) {
      setReceipt(JSON.parse(data));
      localStorage.removeItem('cart');
      localStorage.removeItem('receipt');
    }
  }, []);

  const printReceipt = () => {
    window.print();
  };

  if (!receipt) {
    return (
      <div className="p-6 max-w-2xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">No Receipt Found</h1>
        <p>Please return to the shop page and try again.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4 text-center">Thank You!</h1>
      <p className="text-center mb-6">Your order has been received.</p>

      <div className="mb-4 text-sm">
        <p><strong>Name:</strong> {receipt.name}</p>
        <p><strong>Email:</strong> {receipt.email}</p>
        <p><strong>Phone:</strong> {receipt.phone}</p>
        <p><strong>Order Type:</strong> {receipt.orderType}</p>
        {receipt.orderType === 'delivery' && (
          <p><strong>Address:</strong> {receipt.address}</p>
        )}
        <p><strong>Date:</strong> {new Date(receipt.created_at).toLocaleString()}</p>
      </div>

      <hr className="my-4" />

      <table className="w-full text-sm mb-4">
        <thead className="bg-muted">
          <tr>
            <th className="p-2 text-left">Item</th>
            <th className="p-2 text-right">Qty</th>
            <th className="p-2 text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {receipt.cartItems.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2">{item.name}</td>
              <td className="p-2 text-right">{item.quantity}</td>
              <td className="p-2 text-right">{item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-2 text-right font-semibold" colSpan={2}>Total:</td>
            <td className="p-2 text-right font-bold">${receipt.total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      <div className="text-center">
        <button
          onClick={printReceipt}
          className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}
