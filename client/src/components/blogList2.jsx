import React, { useState, useEffect, useRef, Fragment } from 'react';
import useReactRouter from 'use-react-router';
import { Link } from 'react-router-dom';
import '../utils/scss/pages/_blogList.scss';
import Footer from './footer';



const BlogList = (props) => {

    const [blogs, setBlogs] = useState([]);
    const [visible, setVisible] = useState(2);
    const [visiblePrevious, setVisiblePrevious] = useState(0);
    const [error, setError] = useState(false);
    const { history, location, match } = useReactRouter();

    const prevVisibleRef = useRef();



    useEffect(() => {
        getBlogs();
        prevVisibleRef.current = visible;
    }, [visible]);

    const prevVisible = prevVisibleRef.current;



    const loadMore = () => {
        setVisiblePrevious(visible - 2);
        setVisible(prevVisible + 2);
        console.log(visible);
    }



    const getBlogs = async () => {
        try {
            let response = await fetch('/api/blogList');
            let data = await response.json();
            setBlogs(data);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };




    return (
        <Fragment>
            <main className="blogList">

                <section className="hello">

                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-auto d-flex justify-content-center flex-wrap m-3">

                                {blogs.slice(0, visible).map((blog, id) =>

                                    <div id="blogCard" key={id} class="card-group mr-3 ml-3 mb-4 mt-4">
                                        <div class="card">
                                            <div className="row justify-content-center mt-3">
                                                <img id="avatar" class="card-img-top" src={blog.image} alt="Card image cap"></img>
                                            </div>

                                            <div class="card-body text-center">
                                                <h3 class="card-title">{blog.title}</h3>
                                                <p class="card-text">{blog.content.substring(0, 50)}</p>
                                            </div>
                                            <hr />
                                            <div className="row justify-content-center mb-3">

                                                <Link className="badge badge-dark text-light float-right" to={`/bloglist/${blog.id}`}>View Full Post</Link>

                                            </div>

                                            <div class="card-footer text-center mt-4 mb-4">
                                                <div className="row justify-content-center">

                                                    <small class="text-muted">{'Posted on ' + blog._created.substring(0, 10)}</small>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="container-fluid justify-content-center">
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            {visible < blogs.length &&

                                                <div className="container-fluid">
                                                    <div className="row justify-content-center">
                                                        <h3 onClick={loadMore}>View More</h3>

                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <i onClick={loadMore} class="fas fa-angle-double-down fa-3x"></i>
                                                    </div>
                                                </div>
                                            }

                                        </div>

                                    </div>


                                </div>



                            </div>
                        </div>
                    </div>

                </section>

            </main>
            <Footer />
        </Fragment>
    )
};

export default BlogList;