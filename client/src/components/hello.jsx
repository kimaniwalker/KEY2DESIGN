import React, { Component, Fragment } from 'react';
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/lokiddo';
var CLOUDINARY_UPLOAD_PRESET = 'muuqonjl';








class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            fileLoad: null,
            url: null

        }


    }

      handleUpload(event) {

        let fd = new FormData();
        fd.append('file',this.state.selectedFile, this.state.selectedFile.name);

        fetch('https://api.cloudinary.com/v1_1/lokiddo/image/upload?upload_preset=muuqonjl', {
            method: 'POST',
            body: fd
        })
        
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', (response),
             this.setState({url: response.url})))
            .catch(error => console.error('Error:', error))
            .then(response=> console.log(this.state.url));
            
        }
           
    handleFileSelect(event) {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(this.state.selectedFile);
        console.log(this.state.selectedFile);






    }



    render() {
        return (
            <Fragment>
<main className="home">
            <section className="container-fluid hero">

                <h1>
                    Hello World
            </h1>

                <form>
                    <input type="file" onChange={e => this.handleFileSelect(e)} formEncType="application/x-www-form-urlencoded" name="file"></input>
                    <input type="button" onClick={e => this.handleUpload(e)} value="Submit"></input>
                </form>

                </section>
                </main>














            </Fragment>

        )





    }
}

export default HelloWorld;