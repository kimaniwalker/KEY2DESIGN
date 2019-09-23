import React, { useState } from 'react';
import '../../../utils/scss/pages/_supportTicket.scss';
import Header2 from '../Header/header2'
import { Redirect } from "react-router-dom";
import useReactRouter from 'use-react-router';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import Footer from '../../footer';



const Ticket = () => {


    const [Name, setName] = useState('');
    const [severity, setSeverity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [request, setRequest] = useState('');
    const [posted, setPosted] = useState(false);
    const [status, setStatus] = useState('WIP');
    const { history, location, match } = useReactRouter();

    const { from } =  { from: { pathname: "/" } };
    


    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSeverity = (e) => {
        setSeverity(e.target.value);
    }

    const handlePosted = (e) => {
        setPosted(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleRequest = (e) => {
        setRequest(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            let object = {
                email: email,
                name: Name,
                phone: phone,
                request: request,
                severity: severity,
                status: status
                
            }

            console.log(object)

            let response = await fetch('api/workrequest', {
                method: 'POST',
                body: JSON.stringify(object),
                headers: new Headers({ "Content-Type": "application/json" })
            });
            let data = await response.json();
            console.log(data);

            
            
            
            NotificationManager.success('Payment Submitted Successfully');
            setTimeout(() => {
                setPosted(true);
            }, 1000);
        } catch (e) {
            console.log(e);
            NotificationManager.error(e);
        }
    }


    if (posted) {
        return <Redirect to={from} />
    } else
    return (
        <div className="checkoutForm">
            <Header2 />
            <div className="container-fluid">
            <NotificationContainer />
                <div className="row pt-3 pb-3 justify-content-center">
                    <div id="FormBg" className="col-lg-5 col-md-6 col-sm-7 bg-dark pt-4">
                        <div className="row justify-content-center text-light pb-2">
                            <h2>Submit A Ticket</h2>
                        </div>
                        
                        <div className="row justify-content-center mb-5">
                            <i class="fas fa-clipboard-list fa-2x text-light"></i>

                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={Name}
                                    onChange={handleName}
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
                                <textarea
                                cols="30" rows="10"
                                className="form-group"
                                onChange={handleRequest}
                                value={request}
                                placeholder="Request">
                                </textarea>
                            </div>



                            <div className="row mb-4 ml-3 mr-3n pb-4">
                                <input className="input-group"
                                    value={severity}
                                    onChange={handleSeverity}
                                    placeholder="Business Justification" />
                            </div>




                            <div className="row mb-4 mr-3 ml-3 pt-4 pb-3">
                                <button type="submit" className="btn btn-info mt-2">SUBMIT</button>
                            </div>



                        </form>



                    </div>
                    


                </div>

            </div>

            
<Footer />
        </div>

    );

}

export default Ticket;


