import { NextRequest, NextResponse } from "next/server";

// Stripe checkout session creation endpoint
// In production, you would use the Stripe SDK:
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items } = body as {
      items: { id: string; name: string; price: number; quantity: number; size: string }[];
    };

    // In production, this would create a Stripe checkout session:
    //
    // const line_items = items.map((item) => ({
    //   price_data: {
    //     currency: "usd",
    //     product_data: {
    //       name: item.size !== "One Size" ? `${item.name} (${item.size})` : item.name,
    //     },
    //     unit_amount: item.price * 100, // Stripe expects cents
    //   },
    //   quantity: item.quantity,
    // }));
    //
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   line_items,
    //   mode: "payment",
    //   success_url: `${process.env.NEXT_PUBLIC_URL}/shop?success=true`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_URL}/shop?canceled=true`,
    // });
    //
    // return NextResponse.json({ url: session.url });

    // Placeholder response for development
    return NextResponse.json({
      url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/shop?success=true`,
      message: "Stripe integration placeholder — configure STRIPE_SECRET_KEY to enable live checkout",
      items,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}