import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './checkoutForm2'; // must be a child of Elements wrapper


class Donate extends Component {

    render() {
        return (
            <div>
            
            <StripeProvider 
            /* apiKey="pk_test_wL3MYQIDwpQ4jDJX88znzOGY" */
            /* "pk_test_mnfv1rXYpb4AogcQOObrkioM00FdCgl7fP" */
            /* "pk_test_E1w7nEQKNaAPqAdDPdgFogN000yif31NpU" */
            /* pk_live_85nouWDDrDahUYvpRTLQ58Fv0041Fia2Uj */
            apiKey="pk_test_E1w7nEQKNaAPqAdDPdgFogN000yif31NpU">
            
                <Elements>
                    <InjectedCheckoutForm />
                </Elements>
            </StripeProvider>
            
            </div>
        );
    }

}

export default Donate;