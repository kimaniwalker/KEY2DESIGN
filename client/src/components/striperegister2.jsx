import React, { Component, Fragment } from 'react';
import { post } from '../services/base';


class StripeRegisterPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stripe_code: null,
            grant_type: 'authorization_code',
            access_token: '',
            livemode: '',
            refresh_token: '',
            token_type: '',
            stripe_publishable_key: '',
            stripe_user_id: '',
            scope: '',
            email: 'test@gmail.com'

        };
    }

    componentDidMount() {
        console.log(window.location);
        console.log(location.search);
        let code = location.search.substr(6);
        console.log(code);

        this.setState({ stripe_code: code });

        console.log('This is the state' + this.state.stripe_code);


    }

    handleStripeRegister(e) {

        let object = {
            stripe_code: this.state.stripe_code,
            grant_type: this.state.grant_type
        };

        console.log(object);

        fetch("api/donate/striperegister", {
            method: "POST",
            body: JSON.stringify(object),
            headers: new Headers({ "Content-Type": "application/json" })
        })
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(response => {
                this.setState({
                    access_token: response.access_token,
                    livemode: response.livemode,
                    refresh_token: response.refresh_token,
                    token_type: response.token_type,
                    stripe_publishable_key: response.stripe_publishable_key,
                    stripe_user_id: response.stripe_user_id,
                    scope: response.scope,
                })
                console.log('do this')
                console.log(response)
            })
            .then(response => 
                this.handleStripePost())
            .catch(err => console.log(err));
    }

    handleStripePost() {
        let postObject = {
            access_token: this.state.access_token,
            livemode: this.state.livemode,
            refresh_token: this.state.refresh_token,
            token_type: this.state.token_type,
            stripe_publishable_key: this.state.stripe_publishable_key,
            stripe_user_id: this.state.stripe_user_id,
            scope: this.state.scope,
            email: this.state.email
        };
        console.log(postObject);

        fetch("api/striperegisterpost", {
            method: "POST",
            body: JSON.stringify(postObject),
            headers: new Headers({ "Content-Type": "application/json" })
        })
            .then(res => res.json())
            .then(response => console.log(response))
            .catch(err => console.log(err));

    }


    render() {
        return (

            <div id="LoginBG" className="container-fluid bg-dark">
                <button
                    onClick={e => this.handleStripeRegister(e)}
                    className="btn btn-outline-secondary">Test</button>
            </div>

        )
    }


}

export default StripeRegisterPost;