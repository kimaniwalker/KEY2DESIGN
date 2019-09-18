import React, { Component } from 'react';
import { sendContacEmail } from '../services/contact';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleName(name) {
        this.setState({ name });
    }

    handleEmail(email) {
        this.setState({ email });
    }

    handleMessage(message) {
        this.setState({ message });
    }

    handleSubmit(e) {
        e.preventDefault();
        sendContacEmail(this.state.name, this.state.email, this.state.message)
        .then(() => {
            //redirect to home page
            this.props.history.push('/');
        }).catch((err) =>{
            console.log(err);
        })
    }




    render() {
        return (
            <div id="ContactContainer" className="container-fluid mt-3 bg-dark">
            <div className="row">
            <div className="col-md-6">
            <div className="row justify-content-center pt-4">
            <i className="fab fa-wpforms fa-5x text-light"></i>

            
            </div>
            
             <h1 className="text-light text-center d-none d-sm-flex">Contact Us</h1>
            
            </div>
 
            <div className="col-md-6 pt-4">

            <form onSubmit={ (e) => this.handleSubmit(e)}>
                    <div className="form-group p-2 mr-4">
                        <input placeholder="Name" onChange={ (e) => this.handleName(e.target.value) } id="passwordInput" type="text" className="form-control bg-transparent text-light" required />
                    </div>
                    <div className="form-group p-2 mr-4">
                        <input placeholder="Email" onChange={ (e) => this.handleEmail(e.target.value) }  id="passwordInput" type="email" className="form-control bg-transparent text-light" required />
                    </div>
                    <div className="form-group p-2 mr-4">
                        <textarea id="passwordInput" placeholder="Enter Message Here" onChange={ (e) => this.handleMessage(e.target.value) }  cols="30" rows="10" className="form-control bg-transparent text-light"></textarea>
                    </div>
                    <input type="submit" className="btn btn-info m-2" />
                </form>
            </div>
            </div>
                
            </div>

        );
    }
}

export default Contact;


