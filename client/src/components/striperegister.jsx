import React, { Component, Fragment } from 'react';

class StripeRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleStripeRegister(e){
console.log('hello');
console.log(window.location);

window.location.replace('https://connect.stripe.com/express/oauth/authorize?redirect_uri=http://localhost:3000/striperegister&client_id=ca_Euz7fED1vljRebERSzPMXcLg4qD1gA8K&state={STATE_VALUE}')
  }

  componentDidMount() {
console.log(window.location);
console.log(location.search);
let code = location.search.substr(6);
console.log(code);

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

export default StripeRegister;