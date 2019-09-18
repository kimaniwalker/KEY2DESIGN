import React, { Component, Fragment } from "react";
import { me, checkLogin, isLoggedIn } from "../../../services/user";
import * as userService from "../../../services/users";
import { tokenMiddleware } from "../../../../../server/src/middleware/auth.mw";
import { setAuthToken, populateAuthToken } from "../../../services/base";

class UserDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],


    }








  }







   async componentDidMount() {
    const AUTH_TOKEN_KEY = 'authtoken';
    let authToken = '';
    console.log('This is authtoken'+ authToken);

      let token = localStorage.getItem(AUTH_TOKEN_KEY);
      console.log('this is token' + token);
    

  try {
    let response = await fetch('/api/users/me', {
      headers: {
          "Authorization": `${token}`
      }
  })
    let data = await response.json();
    console.log(data);
    this.setState({ user: data });
    console.log(user);
} catch (e) {
    console.log(e);
}



    







  }

  handleStripeConnect() {
    


  }

  render() {
    console.log('here');
    return (
      <React.Fragment>

        <div>
          Testing purposes



            <button className="btn" onClick={(event) => this.handleStripeConnect(this.state)}>STRIPE</button>
        </div>

        <div className="card text-center">
          <div className="card-header">
            PROFILE
</div>
          <div className="card-body">
            <h5 className="card-title">Testing</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
</div>
        </div>
      </React.Fragment>





    );
  }
}




export default UserDetailScreen;
