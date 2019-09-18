import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SingleBlogPost from './singleBlog';



class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []


        }

    }

    async componentDidMount() {
        try {
            let response = await fetch('/api/blogList');
            let data = await response.json();
            console.log(data);
            this.setState({ blogs: data });
        } catch (e) {
            console.log(e);
        }


    }

    handleMoreInfo(event) {
    
        this.props.history.push('/bloglistsingle/'+`${blog.id}`)
        console.log('handling more info');
    }


    render() {

        
        let blogdiv = this.state.blogs.map((blog, id) => {
            
            return (
                <div key={id} className="div">
                    <div className="row justify-content-center">
                        <div id="passwordInput" className="card col-sm-7 rounded  mb-4 ml-3 pb-5 pt-5 align-items-center" key={blog.id}>
                            
                            <div className="card-body text-center">
                                <h3>{blog.id}</h3>
                                <h3>{blog.title}</h3>
                                <h5>{blog.content}</h5>
                                <h6>{blog._created}</h6>
                                <Link className="badge badge-light badge-dark text-light float-right" to={`/bloglistsingle/${blog.id}`}>Details</Link>
                            </div>

                        
                        </div>
                        
                    </div>



                </div>


            );
        });
        return (
            <Fragment>
                <div>
                    
                    {blogdiv}
                </div> 
            </Fragment>








        )
    }

}


export default BlogList;