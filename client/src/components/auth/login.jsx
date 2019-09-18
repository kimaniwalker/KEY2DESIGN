import React, { Component, Fragment } from "react";
import * as userService from "../../services/user";
import { Redirect } from "react-router-dom";
import IndeterminateProgress from "../utilities/indeterminateProgress";
import { Link } from "react-router-dom";
import '../../utils/scss/pages/_login.scss';

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
    setTimeout(() => {
      userService.checkLogin().then(loggedIn => {
        if (loggedIn) {
          this.setState({ redirectToReferrer: true, checkingLogin: false });
        } else {
          this.setState({ checkingLogin: false });
        }
      });
    }, 2000);



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
    console.log(this.props.location.state);
    const { redirectToReferrer, checkingLogin } = this.state;

    if (checkingLogin) {
      return <IndeterminateProgress message="Logging You In..." />;
    }
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (

      <main className="login">
        <section className="container-fluid awesome">
          <div className="container-fluid">

            <div className="container">

              <form id="LoginCenterPositioning" onSubmit={e => this.login(e)}>
                <h2 className="text-light text-center">KATCHIN' TIA</h2>
                <div className="form-group">
                  <label className="text-light" htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="form-control col-auto text-center"
                    type="email"
                    onChange={e => this.handleEmailChange(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="text-light" htmlFor="password">Password</label>
                  <input
                    id="password"
                    className="form-control col-auto text-center"
                    type="password"
                    onChange={e => this.handlePasswordChange(e.target.value)}
                    required
                  />
                </div>
                {this.state.feedbackMessage ? (
                  <p>{this.state.feedbackMessage}</p>
                ) : null}
                <input type="submit" value="Login" className="btn clickable text-success" />
                <Link to="/api/auth/google" className="btn hasBeenClicked ml-3 text-primary">
                  Google Sign In
          </Link>
                <Link to="/users/register" className="btn hasBeenClicked ml-3 text-warning">
                  Register
          </Link>

              </form>
            </div>
          </div>
        </section>

      </main>

    );


  }
}

export default Login;
