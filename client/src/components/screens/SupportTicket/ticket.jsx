import React, { useState } from 'react';
import '../../../utils/scss/pages/_supportTicket.scss';
import Header from '../Header/header'
import { Redirect } from "react-router-dom";
import useReactRouter from 'use-react-router';
import { sendContacEmail } from '../../../services/contact';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import Footer from '../../footer';



const Ticket = () => {


    const [Name, setName] = useState('');
    const [severity, setSeverity] = useState('1 - Critical');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [request, setRequest] = useState('');
    const [posted, setPosted] = useState(false);
    const [status, setStatus] = useState('NEW');
    const [message, setMessage] = useState('');

    const { history, location, match } = useReactRouter();

    const { from } = { from: { pathname: "/" } };



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
        setMessage(e.target.value);
        
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
                status: status,

            }

            console.log(object)

            let response = await fetch('api/workrequest', {
                method: 'POST',
                body: JSON.stringify(object),
                headers: new Headers({ "Content-Type": "application/json" })
            });
            let data = await response.json();
            console.log(data);

            sendContacEmail(Name,email,message)
            .then(() => {
                NotificationManager.success('Submitted Successfully');
            setTimeout(() => {
                console.log('Submitted')
            }, 1000);

            }).catch((err) => {
                NotificationManager.error(err);
                
                console.log(err);
            })


            NotificationManager.success('Ticket Submitted Successfully');
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
            <div className="createTicket">
                <Header />
                <div className="container-fluid pt-3">
                    <NotificationContainer />
                    <div className="row justify-content-center pt-3 pb-3">
                        <div id="" className="col-xl-6 col-lg-6 col-md-6 col-sm-7 pt-4">
                            <div className="row justify-content-center text-light pb-2">
                                <h2>Submit A Ticket</h2>
                            </div>

                            <div className="row justify-content-center mb-5">
                                <i className="fas fa-clipboard-list fa-2x text-dark"></i>

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
                                    <textarea className="input-group2"
                                        value={request}
                                        onChange={handleRequest}
                                        placeholder="Description"
                                    />
                                </div>


                                

                                

                        

                                
                                <div className="row mb-4 ml-3 mr-3 pb-4">

                                    <div className="form-group">
                                        <label htlmfor="severitySelect">Severity</label>
                                        <select className="form-control" id="exampleFormControlSelect1"
                                        value={severity}
                                        onChange={handleSeverity}>
                                            <option>1 - Critical</option>
                                            <option>2 - Severe</option>
                                            <option>3 - Major</option>
                                            <option>4 - Normal</option>
                                            <option>5 - Enhancement</option>
                                        </select>
                                    </div>
                                </div>






                                <div className="row justify-content-center mb-4 mr-3 ml-3 pt-4 pb-3">
                                    <button type="submit" className="btn btn-info mt-2 ">SUBMIT</button>
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


