'use client';

import { useEffect, useState } from 'react';

type CartItem = {
  name: string;
  price: string;
  quantity: number;
};

type Order = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  items: string; // Stored JSON string
  total: number;
  created_at: string;
};

const ADMIN_PASSWORD = 'island123'; // 🔒 Change this to your own password

export default function OrdersAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders');
      const data: Order[] = await res.json();
      setOrders(data);
    } catch (err) {
      setError('Failed to load orders.');
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/orders?id=${id}`, { method: 'DELETE' });
    if (res.ok) {
      setOrders(prev => prev.filter(order => order.id !== id));
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Address', 'Items', 'Total', 'Date'];
    const rows = orders.map(order => {
      let items: CartItem[] = [];
      try {
        items = JSON.parse(order.items);
      } catch (e) {
        console.error('Invalid item format', e);
      }

      return [
        order.id,
        order.name,
        order.email,
        order.phone,
        order.address,
        items.map((item: CartItem) => `${item.name} x${item.quantity}`).join('; '),
        `$${order.total.toFixed(2)}`,
        new Date(order.created_at).toLocaleString(),
      ];
    });

    const csvContent =
      [headers, ...rows]
        .map(row => row.map(String).map(cell => `"${cell.replace(/"/g, '""')}"`).join(','))
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="p-6 max-w-md mx-auto text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          className="border border-input p-2 w-full rounded mb-4"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button
          onClick={() => {
            if (passwordInput === ADMIN_PASSWORD) {
              setIsAuthenticated(true);
              setPasswordInput('');
            } else {
              alert('Incorrect password');
            }
          }}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Enter
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Customer Orders</h1>
        <button
          onClick={exportToCSV}
          className="text-sm px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Export CSV
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-auto border rounded-lg">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-muted">
              <tr>
                <th className="p-2">#</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Address</th>
                <th className="p-2">Items</th>
                <th className="p-2">Total</th>
                <th className="p-2">Date</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => {
                let parsedItems: CartItem[] = [];
                try {
                  parsedItems = JSON.parse(order.items);
                } catch (e) {
                  console.error('Could not parse items', e);
                }

                return (
                  <tr key={order.id} className="border-t hover:bg-muted/30">
                    <td className="p-2">{order.id}</td>
                    <td className="p-2">{order.name}</td>
                    <td className="p-2">{order.email}</td>
                    <td className="p-2">{order.phone}</td>
                    <td className="p-2 whitespace-pre-wrap">{order.address}</td>
                    <td className="p-2 whitespace-pre-wrap">
                      {parsedItems.map(item => `${item.name} x${item.quantity}`).join(', ')}
                    </td>
                    <td className="p-2">${order.total.toFixed(2)}</td>
                    <td className="p-2">{new Date(order.created_at).toLocaleString()}</td>
                    <td className="p-2">
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
