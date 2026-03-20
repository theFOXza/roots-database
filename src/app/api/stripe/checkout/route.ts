import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const priceMap = {
  roots_plus: process.env.STRIPE_PRICE_ROOTS_PLUS,
  founding_member: process.env.STRIPE_PRICE_FOUNDING_MEMBER,
  enterprise: process.env.STRIPE_PRICE_ENTERPRISE
};

export async function POST(request: NextRequest) {
  const { tier } = await request.json();
  const priceId = priceMap[tier as keyof typeof priceMap];

  if (!priceId) {
    return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXTAUTH_URL}/pricing?status=success`,
    cancel_url: `${process.env.NEXTAUTH_URL}/pricing?status=cancel`
  });

  return NextResponse.json({ url: session.url });
}
