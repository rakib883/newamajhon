import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';



const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20' 
});

export const POST = async (request: NextRequest) => {
 
  try {
    const reqBody = await request.json();
    const { item } = reqBody;

    const modifiedData = item.map((item: any) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100, 
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
  } catch (error:any) {
    console.error(error);
    return NextResponse.json({
      message: "Server error",
      error: error.message
    }, { status: 500 });
  }
};
