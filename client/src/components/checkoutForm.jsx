import React, { Component, Fragment } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../services/stripeService';

import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: '',
            amount: '',
            submitted: false
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            let token = await this.props.stripe.createToken({ name: this.state.customerName });
            let amount = this.state.amount;
            let submitted = this.state.submitted;
            this.setState({ customerName: this.state.customerName });
            this.setState({ amount: this.state.amount });
            this.setState({ submitted: true });

            await postCharge({ id: token.token.id, amount });
            console.log(token.token.id);


            console.log(this.state.customerName)
            console.log(this.state.amount);
            console.log(this.state.submitted);
            alert('Payment Submitted Successfully')
        } catch (e) {
            console.log(e);
            alert(e);
        }
    }

    handleNameInput(value) {
        this.setState({ customerName: value });
        console.log(this.state.customerName);

    }
    handleAmountInput(e) {
        this.setState({ amount: e.target.value });
        console.log(this.state.amount);
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row mt-2 mb-2 pt-5 pb-5">
                        <div className="col-sm-5 bg-dark pt-4">
                            <div className="row justify-content-center mb-5">
                                <i class="fas fa-donate fa-2x text-white"></i>

                            </div>
                            <form onSubmit={(e) => this.handleSubmit(e)}>

                                <div className="row mb-4 ml-3 mr-3">
                                    <input className="input-group rounded pb-2 pt-2" onChange={e => this.handleNameInput(e.target.value)} placeholder="Name" id="StripeElement" />
                                </div>

                                <div className="row mb-4 ml-3 mr-3">
                                    <input className="input-group rounded pb-2 pt-2" onChange={(e) => this.handleAmountInput(e)} placeholder="Amount" id="StripeElement" />
                                </div>


                                <CardSection />


                                <div className="row mb-4 mr-3 ml-3">
                                    <button className="btn btn-info mt-2">SUBMIT</button>
                                </div>



                            </form>



                        </div>

                        <div id="aboutUsContainer3" className="col-md-7">
                        <div className="row text-light justify-content-center mt-3 pt-3 pb-3">
                        <h1 className="d-none d-sm-flex">DONATE</h1>
                        <div className="row justify-content-center">
                        <h5 id="mcmTagline">Help Us Reach Our Goal </h5>
                        </div>
                        </div>
                        
                        </div>


                    </div>

                </div>


            </Fragment>

        );
    }
}

export default injectStripe(CheckoutForm);
