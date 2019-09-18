import React, { Component, Fragment } from "react";
import * as userService from "../../../services/user";
import { Redirect } from "react-router-dom";
import IndeterminateProgress from "../../utilities/indeterminateProgress";
import { Link } from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      email: "",
      password: "",
      feedbackMessage: "",
      checkingLogin: true
    };
  }

  componentDidMount() {
    //checking the token to see if it's ok
    userService.checkLogin().then(loggedIn => {
      if (loggedIn) {
        this.setState({ redirectToReferrer: true, checkingLogin: false });
      } else {
        this.setState({ checkingLogin: false });
      }
    });
  }

  login(e) {
    e.preventDefault(); //default is for the page to refresh (won't end up loggin in)
    userService
      .login(this.state.email, this.state.password)
      .then(() => {
        this.setState({ redirectToReferrer: true }); //causes render function to run again
      })
      .catch(err => {
        if (err.message) {
          this.setState({ feedbackMessage: err.message }); //triggers render again and shows error message
        }
      });
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  render() {
    //from is either / or this.props.location.state (the page from which you were redirected)
    const { from } = this.props.location.state || { from: { pathname: "/home" } };
    const { redirectToReferrer, checkingLogin } = this.state;

    if (checkingLogin) {
      //indeterminate progress bar
      return <IndeterminateProgress message="checking login status..." />;
    }
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        
        <div id="loginContainer" className="container-fluid">

          <form id="loginForm"
            className="loginForm"
            onSubmit={e => this.login(e)}>
            <div id="loginText" className="row">
              <h2>Login</h2>
            </div>
            <label htmlFor="email">Email</label>
            <input
              id="emailInput"

              placeholder="EMAIL"
              className="form-control form-control-lg mb-2 shadow-lg"
              type="email"
              onChange={e => this.handleEmailChange(e.target.value)}
              required
            />



            <label htmlFor="password">Password</label>
            <input
              id="passwordInput"
              placeholder="PASSWORD"
              className="form-control form-control-lg mb-4 rounded"
              type="password"
              onChange={e => this.handlePasswordChange(e.target.value)}
              required
            />

            {this.state.feedbackMessage ? (
              <p>{this.state.feedbackMessage}</p>
            ) : null}


            <input id="loginSubmitButton" type="submit" value="Login" className="btn clickable" />
            <Link to="/users/register" className="btn hasBeenClicked ml-3">
              Register
          </Link>
          </form>

          <a href="/api/auth/google">
            <img
              id="loginGoogleAuth"
              src="/images/google_signin_buttons/web/2x/btn_google_signin_light_normal_web@2x.png"
              className="googleSignInButton" width="200px"
            />
          </a>
        </div>
      </div>


    );
  }
}

export default Login;
