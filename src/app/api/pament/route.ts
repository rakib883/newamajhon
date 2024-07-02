import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15' // Ensure you use the correct API version
  });

  try {
    const reqBody = await request.json();
    const { item } = reqBody;

    const modifiedData = item.map((item: any) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100, // Corrected from 'unite_amount' to 'unit_amount'
        product_data: {
          name: item.title,
          description: item.title
        }
      }
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: modifiedData,
      mode: "payment", // Corrected from 'mod' to 'mode'
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel" // Added a cancel_url for completeness
    });

    return NextResponse.json({
      message: "All OK, server connected",
      id: session.id
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Server error",
      error: error.message
    }, { status: 500 });
  }
};
