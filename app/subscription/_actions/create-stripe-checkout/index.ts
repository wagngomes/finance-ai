"use server";

import { auth } from "@clerk/nextjs/server";

import Stripe from "stripe";

export const createStripeCheckout = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Usuário não autorizado");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-10-28.acacia",
  });

  const sessions = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "boleto"],

    subscription_data: {
      metadata: {
        clerk_user_id: userId,
      },
    },
    mode: "subscription",
    success_url: "https://finance-ai-wagner-software.vercel.app/transactions",
    cancel_url: "http://localhost:3000",
    line_items: [
      {
        price: process.env.PREMIUM_PLAN_PRICE_ID,
        quantity: 1,
      },
    ],
  });

  return { sessionId: sessions.id };
};
