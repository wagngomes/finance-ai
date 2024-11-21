import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const POST = async (request: Request) => {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.error();
  }

  const text = await request.text();
  const event = stripe.webhooks.constructEvent(text, signature, "");

  switch (event.type) {
    case "invoice.paid":
      const { customer, subscription, subscription_details } =
        event.data.object;

      const clerk_user_id = subscription_details?.metadata?.clerk_user_id;

      await clerkClient.users.updateUser(clerk_user_id as string, {
        privateMetadata: {
          stripeCustomerId: customer,
          stripeSubscriptionId: subscription,
        },
        publicMetadata: {
          subscriptionPlan: "premium",
        },
      });
      break;
  }

  return NextResponse.json({ received: true });
};
