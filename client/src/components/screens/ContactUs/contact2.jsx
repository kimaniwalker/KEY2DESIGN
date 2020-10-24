import React, { useState, Fragment } from 'react';
import { sendContacEmail } from '../../../services/contact';
import { Redirect } from "react-router-dom";
import useReactRouter from 'use-react-router';
import { NotificationManager, NotificationContainer } from 'react-notifications';

import '../../../utils/scss/pages/_contactScreen';
import Header from '../Header/header';
import Footer from '../../footer';


const { from } = { from: { pathname: "/" } };

const Contact2 = (props) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const { history, location, match } = useReactRouter();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendContacEmail(name, email, message)
            .then(() => {
                NotificationManager.success('Submitted Successfully');
                setTimeout(() => {
                    setSubmitted(true);
                    console.log('Submitted')
                }, 1000);

            }).catch((err) => {
                NotificationManager.error(err);

                console.log(err);
            })
    }

    if (submitted) {
        return <Redirect to={from} />
    } else
        return (
            <Fragment>
                <Header />
                <main className="contactScreen">
                    <NotificationContainer />
                    <div className="container mt-4">
                        <div className="row pt-4">
                            <i className="fab fa-wpforms fa-2x text-dark"></i>
                        </div>
                        <div className="row pt-3 pb-1">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="py-2"><span>Lets Chat</span></div>
                                <h2 className="text-dark py-2">Contact Us</h2>
                                <div className="py-2"><p>Feel free to contact us with any questions or concerns. We would love to hear from you about your project.</p></div>
                            </div>

                        </div>
                        <div className="row d-flex flex-wrap">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <span><i className="fas fa-phone-volume fa-2x py-2"></i></span>
                                <h2>Phone Number</h2>
                                <span className="text-dark">205-603-8724</span>

                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <i className="fas fa-mail-bulk fa-2x py-2"></i>
                                <h2>Email Address</h2>
                                <span className="text-dark">admin@key2design.io</span>

                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <i className="far fa-building fa-2x py-2"></i>
                                <h2>Office Location</h2>
                                <span className="text-dark">Coming Soon</span>
                            </div>


                        </div>
                        <div className="row d-flex flex-wrap my-5">
                            <div className="col-lg-8 col-md-8 col-sm-8">

                            <h2>Get In Touch</h2>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <div className="form-group">
                                        <input placeholder="Name" value={name} onChange={handleName} type="text" className="form-control  text-light" required />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Email" value={email} onChange={handleEmail} type="email" className="form-control  text-light" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Enter Message Here" value={message} onChange={handleMessage} cols="50" rows="20" className="form-control text-light"></textarea>
                                    </div>
                                    <input type="submit" className="btn pb-2 bg-dark text-light" />
                                </form>

                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">




                            </div>
                        </div>

                    </div>
                </main>
                <Footer />


            </Fragment>

        )
}

export default Contact2;
