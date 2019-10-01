import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './checkoutForm2'; // must be a child of Elements wrapper
import Header2 from './screens/Header/header2';
import Footer from './footer';

class Donate extends Component {

    render() {
        return (
            <div>
            <Header2 />
            <StripeProvider 
            /* apiKey="pk_test_wL3MYQIDwpQ4jDJX88znzOGY" */
            /* "pk_test_mnfv1rXYpb4AogcQOObrkioM00FdCgl7fP" */
            /* "pk_test_E1w7nEQKNaAPqAdDPdgFogN000yif31NpU" */
            apiKey="pk_live_85nouWDDrDahUYvpRTLQ58Fv0041Fia2Uj">
            
                <Elements>
                    <InjectedCheckoutForm />
                </Elements>
            </StripeProvider>
            <Footer />
            </div>
        );
    }

}

export default Donate;