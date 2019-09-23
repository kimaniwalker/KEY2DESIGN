import React, { useState } from 'react';
import '../../../utils/scss/pages/_checkoutForm.scss';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../../../services/stripeService';
import CardSection from '../../cardSection';
import { Redirect } from "react-router-dom";
import useReactRouter from 'use-react-router';
import { NotificationManager, NotificationContainer } from 'react-notifications';



const Payment = (props) => {


    const [customerName, setcustomerName] = useState('');
    const [amount, setamount] = useState('');
    const [submitted, setsubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [paymentPosted, setPaymentPosted] = useState(false);
    const { history, location, match } = useReactRouter();

    const { from } =  { from: { pathname: "/" } };
    


    const handlecustomerName = (e) => {
        setcustomerName(e.target.value);
    }

    const handleamount = (e) => {
        setamount(e.target.value);
    }

    const handlesubmitted = (e) => {
        setsubmitted(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setsubmitted(true);
            let token = await props.stripe.createToken({ name: customerName });
            await postCharge({ id: token.token.id, amount, description, phone, email });
            
            console.log(token.token.id);
            console.log(customerName);
            console.log(amount);
            console.log(submitted);
            console.log(email);
            console.log(description);
            console.log(phone);
            NotificationManager.success('Payment Submitted Successfully');
            setTimeout(() => {
                setPaymentPosted(true);
            }, 1000);
        } catch (e) {
            console.log(e);
            NotificationManager.error(e);
        }
    }


    if (paymentPosted) {
        return <Redirect to={from} />
    } else
    return (
        
        <div className="checkoutForm">
            
            <div className="container-fluid bg-dark">
        
            <NotificationContainer />
                <div className="row pt-3 pb-3 justify-content-center">
                    <div id="FormBg" className="col-lg-5 col-md-6 col-sm-7 bg-dark pt-4">
                        <div className="row justify-content-center text-light pb-2">
                            <h2>Make A Payment</h2>
                        </div>
                        
                        <div className="row justify-content-center mb-5">
                            <i class="fas fa-donate fa-2x text-light"></i>

                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={customerName}
                                    onChange={handlecustomerName}
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={email}
                                    onChange={handleEmail}
                                    placeholder="Email"
                                />
                            </div>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={phone}
                                    onChange={handlePhone}
                                    placeholder="Phone"
                                />
                            </div>

                            <div className="row mb-4 ml-3 mr-3">
                                <input 
                                className="input-group"
                                onChange={handleDescription}
                                value={description}
                                placeholder="Description">
                                </input>
                            </div>



                            <div className="row mb-4 ml-3 mr-3n pb-4">
                                <input className="input-group"
                                    value={amount}
                                    onChange={handleamount}
                                    placeholder="Amount" />
                            </div>


                            <CardSection />


                            <div className="row mb-4 mr-3 ml-3 pt-4 pb-3">
                                <button type="submit" className="btn btn-info mt-2">SUBMIT</button>
                            </div>



                        </form>



                    </div>
                    


                </div>

            </div>

        </div>

    );

}

export default injectStripe(Payment);

