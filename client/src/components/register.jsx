import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      profile_picture_link: "",
      selectedfile: null,
      fileLoad: null
    };

  }



  handleEmail(value) {
    this.setState({ email: value });
  }

  handlePassword(value) {
    this.setState({ password: value });
  }
  handleFirstName(value) {
    this.setState({ first_name: value });
  }


  handleLastName(value) {
    this.setState({ last_name: value });
  }

  handleProfilePictureLink(event) {
    try {
      console.log(event.target.files[0]);
      this.setState({
        selectedFile: event.target.files[0]
      })
      console.log(this.state.selectedFile);
      console.log('selected file' + this.state.selectedFile);
    }
    catch (e) {
      console.log(e);
    }

  }

  async handleSubmit(event) {
    event.preventDefault();
    this.cloudinaryUpload();

  }

  async handlePost() {
    try {

      let object = {
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        profile_picture_link: this.state.profile_picture_link,
        email: this.state.email
      };

      console.log(object);
      await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(object),
        headers: new Headers({ "Content-Type": "application/json" })
      });

      NotificationManager.success("User Created!  Now login");
      setTimeout(() => {
        this.props.history.push('/login');
      }, 3000);
    } catch (err) {
      NotificationManager.error("User Not Created");
      console.log(err);
    }

  }



  cloudinaryUpload(e) {
    let fd = new FormData();
    fd.append('file', this.state.selectedFile, this.state.selectedFile.name);

    fetch('https://api.cloudinary.com/v1_1/lokiddo/image/upload?upload_preset=muuqonjl', {
      method: 'POST',
      body: fd
    })

      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', (response),
        this.setState({ profile_picture_link: response.url })))
      .catch(error => console.error('Error:', error))
      .then(response => console.log(this.state.profile_picture_link))
      .catch(error => console.log(error))
      .then(response => this.handlePost())
      .catch(error => console.log(error));



  }

  render() {
    return (
      <div id="LoginBG" className="container-fluid bg-dark">
        <div className="row justify-content-center pt-5">
          <div className="">
            <form>
              <h1>Start an account</h1>

              <div className="form-group">
                <label htmlFor="first_name">Firs name:</label>
                <input
                  value={this.state.first_name}
                  onChange={event => this.handleFirstName(event.target.value)}
                  className="form-control"
                  name="first_name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Last name:</label>
                <input
                  value={this.state.last_name}
                  onChange={event => this.handleLastName(event.target.value)}
                  className="form-control"
                  name="last_name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Email:</label>
                <input
                  value={this.state.email}
                  onChange={event => this.handleEmail(event.target.value)}
                  className="form-control"
                  name="email"
                  type="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Password:</label>
                <input
                  value={this.state.password}
                  onChange={(event) => this.handlePassword(event.target.value)}
                  className="form-control"
                  name="password"
                  type="password"
                />
              </div>




              <input type="file"
                onChange={e => this.handleProfilePictureLink(e)} formEncType="application/x-www-form-urlencoded" name="file"></input>







              <button className="btn btn-primary mt-2" onClick={event => this.handleSubmit(event)}>
                Submit
          </button>
            </form>

          </div>
        </div>

      </div>
    );
  }
}

export default RegisterScreen;
