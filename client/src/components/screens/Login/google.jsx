import React, { Component, Fragment } from "react";
import {googleLogin} from '../../../services/user';
import { NotificationManager } from "react-notifications";

class Google extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    let token = this.props.match.params.token; 
    googleLogin(token);
    if (token !== "-1") {
      this.props.history.push('/');
    } else {
      NotificationManager.success("Looks like you tried to login through Google without having registered first.  Please register now.");
      this.props.history.push('/users/register');
    }
  }

  

  render() {
    return <h1>Got here?</h1>
  }

    
}

export default Google;
