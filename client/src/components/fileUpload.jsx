import React, { Component, Fragment} from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/lokiddo';
var CLOUDINARY_UPLOAD_PRESET = 'muuqonjl';
import axios from "axios";




class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            fileLoad: null
        
        }

    
    }

    handleUpload(event) {

        console.log(this.state.selectedFile);
        console.log('Hello');
        //Create Form Data. Appened to form data object
        const fd = new FormData();
        fd.append('file',this.state.selectedFile, this.state.selectedFile.name);
        
        
        //Post Data to API
        var xhr = new XMLHttpRequest();  
        xhr.open('POST', 'https://api.cloudinary.com/v1_1/lokiddo/image/upload?upload_preset=muuqonjl', true);
    
        xhr.upload.addEventListener("progress", updateProgress);
        xhr.addEventListener("load", transferComplete);
        xhr.addEventListener("error", transferFailed);
        xhr.addEventListener("abort", transferCanceled);
    
    //Calculate Process of upload
    function updateProgress (oEvent) {
   if (oEvent.lengthComputable) {
      let percentComplete = Math.round(oEvent.loaded / oEvent.total * 100);
      console.log('Upload Progress: '+ percentComplete + '%');
      
      
    } else {
      // Unable to compute progress information since the total size is unknown
      this.setstate({percentComplete: this.state.fileLoad });
      console.log(percentComplete);
    }
  }

  
  function transferComplete(evt) {
    console.log("The transfer is complete.");
  }
  
  function transferFailed(evt) {
    console.log("An error occurred while transferring the file.");
  }
  
  function transferCanceled(evt) {
    console.log("The transfer has been canceled by the user.");
  }

  xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log(this.status);
        console.log(this.response)
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);

    }
    if (this.readyState === XMLHttpRequest.DONE && this.status ===! 200) {
        console.log(this.status)
    }

          
}
//send request
    xhr.send(fd);

    
        /* console.log(fileSelected);
        console.log('Hello');
        const fd = new FormData();
        fd.append('file',this.state.selectedFile, this.state.selectedFile.name);
        axios.post('https://api.cloudinary.com/v1_1/lokiddo/image/upload?upload_preset=muuqonjl',{fd
        })
        .then(res => {
            console.log(res);
        })
        .catch(function(error){
            console.log(error);
        }); */
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

            <h1>
                Hello World 
            </h1>
            
            <form>
  <input type="file" onChange={e => this.handleFileSelect(e)} formEncType="application/x-www-form-urlencoded" name="file"></input>
  <input type="button" onClick={e => this.handleUpload(e)} value="Submit"></input>
</form>


            
            

            

 
 

 

 
 
 

          </Fragment>
          
        )
    
            

            
        
    }
}

export default FileUpload;