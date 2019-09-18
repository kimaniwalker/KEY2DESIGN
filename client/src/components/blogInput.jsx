import React, { Component } from 'react';
import { render } from 'react-dom';
import SelectMenu from "./selectmenu";


class BlogInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content:'',
            
        }
    }



    onInputChange(value) {
        this.setState({ title: value });
    }

    onBtnClick(value) {

        fetch('/api/blogList', {
            method:'POST',
            body: JSON.stringify(value),
            headers: new Headers({ 'Content-Type': 'application/json'})
        })

        console.log(value);
        /* var para = document.createElement("P");                       // Create a <p> element
        var t = document.createTextNode(value);       // Create a text node
        para.appendChild(t);                                          // Append the text to <p>
        document.body.appendChild(para); */

    }

    onInputChangeContent(value) {
        this.setState({ content: value });
    }

    

    


    render() {
            return (
                <div>

                    <div className="col">
                    
                    <form>
                    
                    <h1>{this.state.title}</h1>
                    <input
                        id="titleInput"
                        className="form-control form-control-md mb-2 p-3 mb-5 bg-white rounded col-auto"
                        value={this.state.title}
                        onChange={(event) => this.onInputChange(event.target.value)}
                        placeholder="Title" />

                        <h1>{this.state.content}</h1>
                    
                    <textarea 
                    className="form-control form-control-md col-auto mb-2 p-3 mb-5 bg-white rounded"
                     id="contentInput" rows="5"
                     maxLength="50"
                     value={this.state.content}
                     onChange={(event) => this.onInputChangeContent(event.target.value)}
                     placeholder="Message (Max 50 Char)"></textarea>

                    <div className="row ml-1 pb-2">
                    <h3>
                    Characters Left: {this.state.content.length}/50
                    </h3>
                   
                    
                    </div> 

                    <button 
                    type="button" className="btn btn-success"
                    onClick={(event) => this.onBtnClick(this.state)}>Submit</button>

                    
                    </form>
                    
                    
                    
                    </div>
                    
                </div>
            );

            return (
                <div>
                    <h1>LOADING....</h1>
                </div>
            )
        

    }
}

export default BlogInput;