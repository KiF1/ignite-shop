import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from '../../lib/stripe';

export default async function request(req: NextApiRequest, res: NextApiResponse){
  const { priceId } = req.body;
  if(req.method !== 'POST'){
    return res.status(405);
  }
  if(!priceId){
    return res.status(400).json({ error: 'Price not found' });
  }
  const sucessUrl = `${process.env.NEXT_URL}/sucess?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const ckeckoutSession = await stripe.checkout.sessions.create({
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })
  return res.status(201).json({
    checkoutUrl: ckeckoutSession.url,
  });
}