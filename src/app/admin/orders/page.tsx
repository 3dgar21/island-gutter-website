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
  items: string;
  total: number;
  order_type: 'pickup' | 'delivery';
  created_at: string;
};

const ADMIN_PASSWORD = 'island123';

export default function OrdersAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderTypeFilter, setOrderTypeFilter] = useState<'all' | 'pickup' | 'delivery'>('all');

  useEffect(() => {
    if (isAuthenticated) fetchOrders();
  }, [isAuthenticated]);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders');
      const data: Order[] = await res.json();
      setOrders(data);
    } catch {
      console.error('Failed to load orders.');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/orders?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setOrders((prev) => prev.filter((order) => order.id !== id));
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Address', 'Items', 'Total', 'Order Type', 'Date'];
    const rows = orders.map((order) => {
      let items: CartItem[] = [];
      try {
        items = JSON.parse(order.items);
      } catch {}
      return [
        order.id,
        order.name,
        order.email,
        order.phone,
        order.address,
        items.map((item) => `${item.name} x${item.quantity}`).join('; '),
        `$${order.total.toFixed(2)}`,
        order.order_type,
        new Date(order.created_at).toLocaleString(),
      ];
    });
    const csvContent = [headers, ...rows].map((row) => row.map(String).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const printPage = () => window.print();

  const filteredOrders = orders.filter((order) => {
    const matchesType = orderTypeFilter === 'all' || order.order_type === orderTypeFilter;
    const matchesSearch =
      order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const pickupRevenue = orders.filter((o) => o.order_type === 'pickup').reduce((sum, o) => sum + o.total, 0);
  const deliveryRevenue = orders.filter((o) => o.order_type === 'delivery').reduce((sum, o) => sum + o.total, 0);
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  if (!isAuthenticated) {
    return (
      <div className="p-6 max-w-md mx-auto text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          className="border p-2 w-full rounded mb-4"
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
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">Customer Orders</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            value={orderTypeFilter}
            onChange={(e) => setOrderTypeFilter(e.target.value as 'all' | 'pickup' | 'delivery')}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
          </select>
          <button onClick={exportToCSV} className="bg-primary text-white px-3 py-2 rounded text-sm">Export CSV</button>
          <button onClick={printPage} className="border px-3 py-2 rounded text-sm">Print</button>
        </div>
      </div>

      <div className="mb-4 text-sm">
        💰 <strong>Total Revenue:</strong> ${totalRevenue.toFixed(2)} &nbsp;&nbsp;
        📦 <strong>Pickup:</strong> ${pickupRevenue.toFixed(2)} &nbsp;&nbsp;
        🚚 <strong>Delivery:</strong> ${deliveryRevenue.toFixed(2)}
      </div>

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
              <th className="p-2">Type</th>
              <th className="p-2">Date</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => {
              let items: CartItem[] = [];
              try {
                items = JSON.parse(order.items);
              } catch {}
              return (
                <tr key={order.id} className="border-t hover:bg-muted/30">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.name}</td>
                  <td className="p-2">{order.email}</td>
                  <td className="p-2">{order.phone}</td>
                  <td className="p-2 whitespace-pre-wrap">{order.address}</td>
                  <td className="p-2 whitespace-pre-wrap">
                    {items.map((item) => `${item.name} x${item.quantity}`).join(', ')}
                  </td>
                  <td className="p-2">${order.total.toFixed(2)}</td>
                  <td className="p-2 capitalize">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                        order.order_type === 'pickup'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {order.order_type}
                    </span>
                  </td>
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
    </div>
  );
}
