import React, { useState, useEffect, useContext } from 'react';
import * as userService from "../../services/user";
import { Redirect } from "react-router-dom";
import IndeterminateProgress from "../utilities/indeterminateProgress";
import { Link } from "react-router-dom";
import useReactRouter from 'use-react-router';
import '../../utils/scss/pages/_login.scss';


const Login = () => {

  const [redirectToReferrer, setredirectToReferrer] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [feedbackMessage, setfeedbackMessage] = useState('');
  const [checkingLogin, setcheckingLogin] = useState(true);
  const { history, location, match } = useReactRouter();

  const { from } = location.state || { from: { pathname: "/" } };
  useEffect(() => {
    userService.checkLogin().then(loggedIn => {
      if (loggedIn) {
        setredirectToReferrer(true);
        setcheckingLogin(false);
        console.log(redirectToReferrer);
        console.log(checkingLogin);
      } else {
        setcheckingLogin(false);
      }
    });
  }, []);

  const handleEmail = e => {
    setemail(e.target.value);
  };

  const handlePassword = e => {
    setpassword(e.target.value);
  };

  const login = e => {
    e.preventDefault(); //default is for the page to refresh (won't end up loggin in)
    console.log('pushed');
    console.log(email);
    console.log(password);

    userService
      .login(email, password)
      .then(function () {
        setredirectToReferrer(true);
        console.log();
        //causes render function to run again
      })
      .catch(err => {
        if (err.message) {
          setfeedbackMessage(err.message); //triggers render again and shows error message
        }
      });


  }

  if (checkingLogin) {
    return <IndeterminateProgress message="checking login status..." />;
  } else if (redirectToReferrer) {
    return <Redirect to={from} />;
  } else {
    return (
      <main className="login">
        <section className="container-fluid awesome">
          <div className="container-fluid">

            <div className="container pt-5">
              <div id="formRow" className="row align-content-center pt-5">
                <div className="col">

                  <form id="LoginCenterPositioning" onSubmit={e => login(e)}>
                    <h2 className="text-light text-center">KATCHIN' TIA</h2>
                    <div className="form-group">
                      <label className="text-light" htmlFor="email">Email</label>
                      <input
                        id="email"
                        className="form-control col-auto text-center"
                        type="email"
                        value={email}
                        onChange={handleEmail}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-light" htmlFor="password">Password</label>
                      <input
                        id="password"
                        className="form-control col-auto text-center"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                        required
                      />
                    </div>
                    {feedbackMessage ? (
                      <p>{feedbackMessage}</p>
                    ) : null}
                    <div>
                      <div id="LinkRow" className="row">
                        <input type="submit" value="Login" className="btn clickable text-success" />
                        <Link to="/api/auth/google" className="btn hasBeenClicked ml-3 text-primary">
                          Google Sign In
          </Link>
                        <Link to="/users/register" className="btn hasBeenClicked ml-3 text-warning">
                          Register
          </Link>
                      </div>

                    </div>


                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    )
  }



}

export default Login;