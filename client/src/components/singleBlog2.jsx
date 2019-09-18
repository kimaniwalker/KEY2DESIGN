import React, { useState, useEffect } from 'react';
import useReactRouter from 'use-react-router';
import '../utils/scss/pages/_singleBlog.scss';
import { Link } from 'react-router-dom';

const SingleBlogPost = () => {

    const [blog, setBlog] = useState([]);
    const [comments, setComments] = useState([]);
    const { history, location, match } = useReactRouter();


    const getBlogList = async () => {

        try {
            let res = await fetch('/api/blogList/' + match.params.id);
            let data = await res.json();
            console.log(data);
            setBlog(data);
        } catch (e) {
            console.log(e);
        }
    }

    const getComments = async () => {

        try {
            let res = await fetch('/api/commentList/' + match.params.id);
            let comments_data = await res.json();
            console.log(comments_data);
            setComments(comments_data);
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getBlogList();
        getComments();

    }, []);


    return (

        <main className="singleBlog">
            <div id="BG" className="container-fluid pt-4">


                <div className="row justify-content-center">
                    <div className="col-auto d-flex justify-content-center">



                        <div class="card">
                            <div class="card-body">
                                <div className="row justify-content-center">
                                    <h2>{blog.title}</h2>
                                </div>

                                <div className="row justify-content-center">
                                    <img id="avatar" src={blog.image} alt="Card image cap"></img>
                                </div>
                                <hr />
                                <div className="row justify-content-center">
                                    {blog.content}

                                </div>
                            </div>

                            <div className="card-footer text-muted justify-content-center">
                                <p>

                                    <a className="badge badge-dark text-light float-right justify-content-center" href='/bloglist'>Back</a>
                                </p>

                            </div>

                            <ul class="list-group list-group-flush">
                                {comments.map((comment, id) =>
                                    <div>
                                        <li class="list-group-item">
                                            <div className="row">
                                                {comment.user}
                                            </div>

                                            <div className="row">
                                                {comment.message}
                                            </div>

                                            <div className="row">
                                                {comment.date}
                                            </div>

                                        </li>

                                    </div>
                                )}
                            </ul>
                        </div>



                    </div>

                </div>



            </div>




        </main>

    )
}

export default SingleBlogPost;