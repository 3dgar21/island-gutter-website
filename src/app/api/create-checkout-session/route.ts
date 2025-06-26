import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('❌ Missing STRIPE_SECRET_KEY in environment variables');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-05-28.basil',
});

type CartItem = {
  name: string;
  price: string;
  quantity: number;
};

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const cartItems: CartItem[] = body.cartItems;

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return new Response(JSON.stringify({ error: 'Cart is empty or invalid.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = cartItems.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(parseFloat(item.price.replace(/[^\d.]/g, '')) * 100),
      },
      quantity: item.quantity,
    }));

    const origin =
      req.headers.get('origin') ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      success_url: `${origin}/success`,
      cancel_url: `${origin}/shop/checkout`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('[Stripe Checkout Error]', error);
    const message = error instanceof Error ? error.message : 'Unknown Stripe error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
