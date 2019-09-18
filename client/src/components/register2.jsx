import React, { useState } from "react";
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { Redirect } from "react-router-dom";
import useReactRouter from 'use-react-router';
import '../utils/scss/pages/_register.scss';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [selectedfile, setSelectedFile] = useState(null);
    const [data, setData] = useState([]);
    const [userPosted, setUserPosted] = useState(false);
    const { history, location, match } = useReactRouter();

    const { from } = location.state || { from: { pathname: "/home" } };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleFirst_Name = (e) => {
        setFirst_Name(e.target.value);
    }
    const handleLast_Name = (e) => {
        setLast_Name(e.target.value);
    }

    const handleSelectedFile = (event) => {
        try {
            console.log(event.target.files[0]);
            setSelectedFile(event.target.files[0])
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        cloudinaryUpload();

    }

    const cloudinaryUpload = async () => {
        let fd = new FormData();
        fd.append('file', selectedfile, selectedfile.name);

        try {
            let response = await fetch('https://api.cloudinary.com/v1_1/lokiddo/image/upload?upload_preset=muuqonjl', {
                method: 'POST',
                body: fd
            });

            let data = await response.json();
            console.log(data);
            setData([data]);
            console.log(data.url);

            let object = {
                password: password,
                first_name: first_name,
                last_name: last_name,
                profile_picture_link: (data.url),
                email: email,
            };
            console.log(object);

            await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify(object),
                headers: new Headers({ "Content-Type": "application/json" })
            });

            NotificationManager.success("User Created!  Now login");
            setTimeout(() => {
                setUserPosted(true);
            }, 1000);

        } catch (e) {
            console.log(e);
            NotificationManager.error('Error Try Again' + e);
        }
    }

    if (userPosted) {
        return <Redirect to={from} />
    } else {

        return (
            <main className="register">

                <section className="secondary">

                    <div id="LoginBG" className="container-fluid">
                        <div className="row justify-content-center pt-5">
                            <div className="">
                                <NotificationContainer />
                                <form>
                                    <h1>Start an account</h1>

                                    <div className="form-group">
                                        <label htmlFor="first_name">First name:</label>
                                        <input
                                            value={first_name}
                                            onChange={handleFirst_Name}
                                            className="form-control"
                                            name="first_name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="last_name">Last name:</label>
                                        <input
                                            value={last_name}
                                            onChange={handleLast_Name}
                                            className="form-control"
                                            name="last_name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Email:</label>
                                        <input
                                            value={email}
                                            onChange={handleEmail}
                                            className="form-control"
                                            name="email"
                                            type="email"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">Password:</label>
                                        <input
                                            value={password}
                                            onChange={handlePassword}
                                            className="form-control"
                                            name="password"
                                            type="password"
                                        />
                                    </div>

                                    <div>
                                        <input type="file"
                                            width="10px"
                                            onChange={handleSelectedFile} formEncType="application/x-www-form-urlencoded" name="file"></input>

                                        <button className="btn btn-primary mt-2" onClick={event => handleSubmit(event)}>
                                            Submit
                                        </button>

                                    </div>


                                </form>

                            </div>
                        </div>

                    </div>

                </section>
            </main>


        );
    }
}

export default Register;