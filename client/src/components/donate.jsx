import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './checkoutForm2'; // must be a child of Elements wrapper

class Donate extends Component {

    render() {
        return (
            <StripeProvider /* apiKey="pk_test_wL3MYQIDwpQ4jDJX88znzOGY" */
            apiKey="pk_test_mnfv1rXYpb4AogcQOObrkioM00FdCgl7fP">
                <Elements>
                    <InjectedCheckoutForm />
                </Elements>
            </StripeProvider>
        );
    }

}

export default Donate;