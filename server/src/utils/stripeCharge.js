import stripeLoader from 'stripe';
import { config } from '../config';
const stripe = stripeLoader(config.STRIPE_SK); 
// define secret key in config folder

function charge(token, amt, description, phone, email) {
    // returning a promise, so when we call .charge elsewhere, we will use await
    return stripe.charges.create({
        amount: amt * 100, //amount in cents
        currency: 'usd',
        source: token,
        description: description,
        metadata: {description: description, phone: phone , email: email}
       
        
    });
};

function retrieve(err, balance) {
    // returning a promise, so when we call .retrieveBalance elsewhere, we will use await
    return stripe.balance
  .retrieve({
    api_key: config.STRIPE_SK,
  })
  .then((balance) => {
    // The balance object for the connected account
    let balanceObject = balance;
    console.log('here',balanceObject);
  })
  .catch((err) => {
    // Error
    console.log(err);
  });
};



export { charge, retrieve };