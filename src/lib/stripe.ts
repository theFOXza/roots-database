import Stripe from "stripe";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key, {
    apiVersion: "2024-06-20",
    typescript: true
  });
}

let _stripe: ReturnType<typeof getStripe> | null = null;

export const stripe = new Proxy({} as ReturnType<typeof getStripe>, {
  get(_target, prop) {
    if (!_stripe) {
      _stripe = getStripe();
    }
    return (_stripe as any)[prop];
  }
});
