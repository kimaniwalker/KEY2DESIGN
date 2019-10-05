import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import UserDetailScreen from './screens/Profile';
import Ticket from './screens/SupportTicket/ticket';
import Tickets from './screens/Tickets/tickets';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login2';
import Google from "./screens/Login/google";
import Logout from './auth/logout';
import Header from './screens/Header/header';
import BlogAdmin from './admin';
import Contact2 from './screens/ContactUs/contact2';
import Donate from './donate';
import RegisterScreen from './register2';
import Welcome from './welcome';
import StripeRegister from './striperegister';
import StripeRegisterPost from './striperegister2';
import AboutMe2 from './screens/AboutUs/aboutUs2';
import Portfolio from './screens/Portfolio/portfolio';





class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/header" component={Header} />
                        <Route path="/register" component={RegisterScreen} />
                        <PrivateRoute path="/admin" component={BlogAdmin} />
                        <Route exact path="/aboutus" component={AboutMe2} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/contact" component={Contact2} />
                        <Route exact path="/payment" component={Donate} />
                        <Route path="/login/google/:token" component={Google} />  
                        <Route path="/striperegister" component={StripeRegister} />
                        <Route path="/striperegisterpost" component={StripeRegisterPost} />
                        <Route path="/me" component={UserDetailScreen} />
                        <Route path="/profile" component={HelloWorld} />
                        <Route path="/ticket" component={Ticket} />
                        <Route path="/tickets" component={Tickets} />

                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;