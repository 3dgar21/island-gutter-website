import { apiRun, apiGet } from '../database';

export async function POST(req: Request) {
  try {
    const { name, address, phone, email, cartItems, total } = await req.json();

    await apiRun(
      `INSERT INTO orders (name, address, phone, email, items, total, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, phone, email, JSON.stringify(cartItems), total, new Date().toISOString()]
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function GET() {
  try {
    const rows = await apiGet<any>('SELECT * FROM orders ORDER BY created_at DESC');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  if (!id) return new Response('Missing order ID', { status: 400 });

  try {
    await apiRun('DELETE FROM orders WHERE id = ?', [id]);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
