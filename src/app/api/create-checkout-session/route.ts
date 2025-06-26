import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
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

    const origin = req.headers.get('origin') ?? 'http://localhost:3000';

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
    const message = error instanceof Error ? error.message : 'Unknown Stripe error';
     console.error('[Stripe Checkout Error]', error);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
