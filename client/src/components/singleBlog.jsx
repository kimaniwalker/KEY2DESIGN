import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as classService from '../services/classes';

class SingleBlogPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: [],
            comments: []
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch('/api/blogList/' + this.props.match.params.id);
            let data = await res.json();
            console.log(data);
            this.setState({
                blog: data
            })
        } catch (e) {
            console.log(e);
        }

        try {
            let res = await fetch('/api/commentList/' + this.props.match.params.id);
            let comments_data = await res.json();
            console.log(comments_data);
            this.setState({
                comments: comments_data
            })
        } catch (e) {
            console.log(e);
        }
    }
    async onBtnClick() {
        console.log('Hello');
        try {
            let id = this.props.match.params.id
            let results = await classService.destroy(id)
            console.log(results);
        } catch (err) {
            console.log('This is the' + err);
        }

    }

    render() {
        let commentdiv = this.state.comments.map((comment, commentid) => {
            return (
                <div key={commentid} className="card-body text-center">
                    <h3>{comment.id}</h3>
                    <h3>{comment.user}</h3>
                    <h5>{comment.message}</h5>
                    <h6>{comment.date}</h6>

                </div>
            );

        });
        return (
            <Fragment>
                <div>
                <div className="card-body text-center">
                    <h3>{this.state.blog.id}</h3>
                    <h3>{this.state.blog.title}</h3>
                    <h5>{this.state.blog.content}</h5>
                    <h6>{this.state.blog._created}</h6>
                    <Link className="badge badge-light badge-dark text-light float-right" to={`/bloglist`}>Blogs</Link>
                </div>

                <button onClick={(event) => this.onBtnClick()}>Delete</button>
                    <h3>Comments</h3>
                    {commentdiv}
                </div> 
            </Fragment>








        )
        console.log(this.props);













        {/* <div>


                <div className="card-body text-center">
                    <h3>{this.state.blog.id}</h3>
                    <h3>{this.state.blog.title}</h3>
                    <h5>{this.state.blog.content}</h5>
                    <h6>{this.state.blog._created}</h6>
                    <Link className="badge badge-light badge-dark text-light float-right" to={`/bloglist`}>Blogs</Link>
                </div>

                <button onClick={(event) => this.onBtnClick()}>Delete</button>



                <div className="card-body text-center">
                    <h3>{this.state.comments.id}</h3>
                    <h3>{this.state.comments.user}</h3>
                    <h5>{this.state.comments.message}</h5>
                    <h6>{this.state.comments.date}</h6>

                </div>
            </div> */}

    }
}

export default SingleBlogPost;