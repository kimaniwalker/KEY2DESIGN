import { Router } from 'express';
import { charge } from '../utils/stripeCharge'
import stripeLoader from 'stripe';
import { config } from '../config';
require('isomorphic-fetch');
const stripe = stripeLoader(config.STRIPE_SK);




let router = Router();



/* RETRIEVE STRIPE BALANCE */
function retrieve(err, balance) {
  // returning a promise, so when we call .retrieveBalance elsewhere, we will use await
  return stripe.balance
    .retrieve({
      api_key: config.STRIPE_SK,
    })
    .then((balance) => {
      // The balance object for the connected account
      let balanceObject = balance;
      console.log('here', balanceObject);
      return balance;
    })
    .catch((err) => {
      // Error
      console.log(err);
    });
};

router.get('/', async (req, res) => {
  try {
    let balance = await retrieve();
    res.json({ balance });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Fetch the Checkout Session to display the JSON result on the success page
router.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});




router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'KEY2DESIGN',
          },
          unit_amount: req.body.amount * 100,
        },
        quantity: 1,
        description: req.body.description,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/success/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/cancel/?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.json({ id: session.id });
});




export default router;