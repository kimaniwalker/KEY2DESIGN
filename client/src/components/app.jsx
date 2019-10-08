import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserDetailScreen from './screens/Profile';
import Tickets from './screens/Tickets/tickets';
import Ticket from './screens/SupportTicket/ticket';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login2';
import Logout from './auth/logout';
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
                        <Route path="/register" component={RegisterScreen} />
                        <PrivateRoute path="/admin" component={BlogAdmin} />
                        <Route exact path="/aboutus" component={AboutMe2} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/contact" component={Contact2} />
                        <Route exact path="/payment" component={Donate} /> 
                        <Route path="/striperegister" component={StripeRegister} />
                        <Route path="/striperegisterpost" component={StripeRegisterPost} />
                        <Route path="/me" component={UserDetailScreen} />
                        <Route path="/tickets" component={Tickets} />
                        <Route path="/ticket" component={Ticket} />

                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;