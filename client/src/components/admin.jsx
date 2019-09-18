import React, { useState } from 'react';
import '../../src/utils/scss/pages/_admin.scss'
import { render } from 'react-dom';
import * as classService from '../services/classes';
import BlogInput from './blogInput2';
import BlogList from './blogList';
import Footer from './footer';

const BlogAdmin = () => {

    const [createBlog, setCreateBlog] = useState(true);
    const [viewBlog, setViewBlog] = useState(false);

    const handleToggle = () => {
        $(document).ready(function () {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });

        });
    }

    const handleCreateBlog = () => {
        setCreateBlog(true);
        console.log(createBlog);
        setViewBlog(false);
        console.log(viewBlog);
    }
    const handleViewBlog = () => {
        setViewBlog(true);
        console.log(viewBlog);
        setCreateBlog(false);
        console.log(createBlog);
    }

    if (createBlog) {
    return (
        <div className="">

            <div id="content">
                <nav class="navbar navbar-expand-lg navbar-light bg-dark container-fluid">
                    <div class="container-fluid">

                        <button onClick={handleToggle()} type="button" id="sidebarCollapse" class="btn btn-info">
                            <i class="fas fa-bars"></i>
                            <span>Toggle Sidebar</span>
                        </button>

                    </div>
                </nav>
            </div>
            <div class="wrapper">
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>KATCHIN' TIA</h3>
                    </div>

                    <ul class="list-unstyled components">
                        <p>Admin Portal</p>
                        <li class="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Blogs</a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a onClick={handleCreateBlog} href="#">Create Blog</a>
                                </li>
                                <li>
                                    <a onClick={handleViewBlog} href="#">View Blogs</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Work Requests</a>
                        </li>
                    </ul>
                </nav>


                <div id="content" className="container-fluid">
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <h1 className="text-center mb-2">ADD NEW BLOG</h1>
                            <BlogInput />

                        </div>
                    </div>
                </div>
            </div>
          <Footer />  
        </div>
        
    )
    }
    else if (viewBlog) {
        return (
            <div className="">
    
                <div id="content">
                    <nav class="navbar navbar-expand-lg navbar-light bg-dark container-fluid">
                        <div class="container-fluid">
    
                            <button onClick={handleToggle()} type="button" id="sidebarCollapse" class="btn btn-info">
                                <i class="fas fa-bars"></i>
                                <span>Toggle Sidebar</span>
                            </button>
    
                        </div>
                    </nav>
                </div>
                <div class="wrapper">
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <h3>KATCHIN' TIA</h3>
                        </div>
    
                        <ul class="list-unstyled components">
                            <p>Admin Portal</p>
                            <li class="active">
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Blogs</a>
                                <ul class="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a onClick={handleCreateBlog} href="#">Create Blog</a>
                                    </li>
                                    <li>
                                        <a onClick={handleViewBlog} href="#">View Blogs</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Work Requests</a>
                            </li>
                        </ul>
                    </nav>
    
    
                    <div id="content" className="container-fluid">
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <h1 className="text-center mb-2">ADD NEW BLOG</h1>
                                <BlogList />
    
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogAdmin;