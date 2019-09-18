import React, { Component, Fragment } from 'react';
import '../utils/scss/pages/_banner.scss';


class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Fragment>
        <main className="banner">
        <div className="container-fluid">
          <div className="row justify-content-center pt-3 pb-3">
            <div className="col-auto">

            <h1 className="text-light">Your website works for you 24/7.</h1>
            <div className="row justify-content-center">
              <h3>The power of the internet makes your information immediately available.</h3>
            </div>
            <div className="row justify-content-center">
              <h3>Establish More Customers, Not Just Local but Global!</h3>
            </div>
            
            </div>
          </div>
        </div>
          

        </main>
      </Fragment>

    )
  }


}

export default Banner;