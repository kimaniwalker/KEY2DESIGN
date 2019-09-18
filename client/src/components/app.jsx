import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import UserDetailScreen from './screens/Profile';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login2';
import Google from "./screens/Login/google";
import Logout from './auth/logout';
import Header from './screens/Header/header';
import BlogAdmin from './admin';
import Contact from './contact2';
import Donate from './donate';
import RegisterScreen from './register2';
import Welcome from './welcome';
import StripeRegister from './striperegister';
import StripeRegisterPost from './striperegister2';
import AboutMe from './aboutMe';
import Footer from './footer';




class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/header" component={Header} />
                        <Route path="/register" component={RegisterScreen} />
                        <PrivateRoute path="/admin" component={BlogAdmin} />
                        <Route exact path="/aboutus" component={AboutMe} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/footer" component={Footer} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/payment" component={Donate} />
                        <Route path="/login/google/:token" component={Google} />  
                        <Route path="/striperegister" component={StripeRegister} />
                        <Route path="/striperegisterpost" component={StripeRegisterPost} />
                        <Route path="/me" component={UserDetailScreen} />
                        <Route path="/profile" component={HelloWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;