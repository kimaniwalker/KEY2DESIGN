import React, { Component, Fragment } from 'react';
import '../utils/scss/pages/_banner2.scss';


class Banner2 extends Component {
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
          <div className="row justify-content-center pt-1 pb-1">
            <div className="col-auto">

            <img src="../../images/icons/node.png"></img>
            
            </div>
            <div className="col-auto">
            <img src="../../images/icons/mysql.png"></img>
            </div>

            <div className="col-auto">
            <img src="../../images/icons/react.png"></img>
            </div>
          </div>
        </div>
          

        </main>
      </Fragment>

    )
  }


}

export default Banner2;