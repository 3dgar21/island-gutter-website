import { apiRun, apiGet } from '../database';

type CartItem = {
  name: string;
  price: string;
  quantity: number;
};

type Order = {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  items: string;
  total: number;
  created_at: string;
};

export async function POST(req: Request): Promise<Response> {
  try {
    const {
      name,
      address,
      phone,
      email,
      cartItems,
      total,
    }: {
      name: string;
      address: string;
      phone: string;
      email: string;
      cartItems: CartItem[];
      total: number;
    } = await req.json();

    await apiRun(
      `INSERT INTO orders (name, address, phone, email, items, total, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, phone, email, JSON.stringify(cartItems), total, new Date().toISOString()]
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}

export async function GET(): Promise<Response> {
  try {
    const rows = await apiGet<Order>('SELECT * FROM orders ORDER BY created_at DESC');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}

export async function DELETE(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  if (!id) return new Response('Missing order ID', { status: 400 });

  try {
    await apiRun('DELETE FROM orders WHERE id = ?', [id]);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
