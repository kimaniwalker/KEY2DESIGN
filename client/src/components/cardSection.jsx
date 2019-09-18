import React from 'react';
import { CardElement } from 'react-stripe-elements';
import '../utils/scss/pages/_checkoutForm.scss';

class CardSection extends React.Component {
    render() {
        return (
            <div className="checkoutForm">
               <div id="StripeElement">
              <CardElement className="m-3"/>  
            </div> 
            </div>
            
            
            
            
        );
    }
};

export default CardSection;