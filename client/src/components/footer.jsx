import React from 'react';
import '../utils/scss/pages/_footer.scss';

const Footer = () => {

    return (

        <main className="Footer">
            <div id="container" className="container-fluid">
                <div className="row justify-content-center">
                    <nav class="navbar navbar-expand-lg navbar-light">

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a id="blogLinks" class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a id="blogLinks" class="nav-link" href="/aboutus">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a id="blogLinks" class="nav-link" href="/payment">Make A Payment</a>
                                </li>
                                <li class="nav-item">
                                    <a id="blogLinks" class="nav-link" href="/ticket">Create A Ticket</a>
                                </li>
                                <li class="nav-item">
                                    <a id="blogLinks" class="nav-link" href="/contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="row justify-content-center text-light">
                    <div className="col-auto">
                        <h3>Site Developed by Key2Design</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <nav class="navbar navbar-light">
                            <a class="navbar-brand" href="#">
                                <img src="../../images/footer/logo.png" height="80" class="d-inline-block align-top" alt=""></img>

                            </a>
                        </nav>
                    </div>
                </div>
                
            </div>



        </main>)

}

export default Footer;