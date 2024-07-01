import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2022-11-15',
    });

    try {
        const reqBody = await request.json();
        const { item } = reqBody;

        const modifiedData = item.map((item: any) => ({
            quantity: item.quantity,
            price_data: {
                currency: "usd",
                unit_amount: item.price * 100, // Assuming unit_amount is provided in cents
                product_data: {
                    name: item.title,
                    description: item.title // Ensure item has a description property
                }
            }
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: modifiedData,
            mode: 'payment',
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel" // Provide a cancel URL
        });

        return NextResponse.json({
            message: "Server response ok",
            id: session.id
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
};
