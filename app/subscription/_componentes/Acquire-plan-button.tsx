"use client";

import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";

const AcquirePlanButton = () => {
  const { user } = useUser();
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY as string,
    );

    await stripe?.redirectToCheckout({ sessionId });
  };

  const hasPremiumPlan = user?.publicMetadata.subscriptionPlan === "premium";

  return (
    <Button
      className="w-full rounded-full font-bold"
      onClick={handleAcquirePlanClick}
    >
      {hasPremiumPlan ? "Gerenciar Plano" : "Adquirir plano"}
    </Button>
  );
};

export default AcquirePlanButton;
