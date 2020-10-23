import React, { Component, Fragment } from 'react';
import '../../../../src/utils/scss/pages/_aboutMe.scss'
import Header from '../Header/header'
import Contact from '../../contact2'
import Footer from '../../footer'


class AboutMe2 extends Component {



    render() {
        return (
            <Fragment>
                <Header />
                <main className="aboutMe">

                    <div id="BG" className="container-fluid">

                        <div className="row justify-content-center">
                            <h1 id="NAME" className="text-light">About Us</h1>


                        </div>


                    </div>


                    <div className="container">
                        <div className="row d-flex flex-wrap py-5">
                            <div className="col-lg-4 col-md-4">
                            <div className="titleText"><span>Who Are We</span></div>
                                <h3>About Us</h3>
                                <p>As you may have guessed we specialize in creating branding content for our customers.
                            </p>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <p>Not only do we specialize in web design, we also specialize in graphic design and videography as well. Our company was founded in Birmingham, Al in 2018 and has continued to flourish. We've worked on numourous projects from church and small business web design to music videos and custom book covers.    </p>

                                <div className="row justify-content-center py-4">
                                    <div className="col-lg-6 col-md-6">
                                        <div><i className="fas fa-rocket fa-3x"></i></div>
                                        <div className="py-3 titleText"><span>Our Mission</span></div>


                                        <p>If you don’t have a website or marketing material, you’re leaving money on the table. Customers and donors look for more information about nonprofits and businesses by Googling and social media first.Our missions is to help you make a strong first impression.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div><i className="far fa-eye fa-3x"></i></div>
                                        <div className="py-3 titleText"><span >Our Vision</span></div>

                                        <p>This media-driven world may be a bewildering place, and branding material may seem complicated and expensive, but still, its a neccessity. Allow us to help you grow your business.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="BG2" className="container-fluid">

                        <div className="row justify-content-center">
                            <h3 id="NAME" className="text-light">What Sepearates Us From The Others</h3>
                            <h4 className="text-light">Our Ability To Bring Outstanding Result To Our Customers </h4>


                        </div>
                        <div className="row justify-content-center py-3">
                            <span><a href="/contact" className="btn btn-info">Contact Us</a></span>
                        </div>

                    </div>

                    <div className="container">
                        <div className="row d-flex flex-wrap py-3">
                            <div className="col-lg-9 col-md-8 col-sm-6">
                                <div className="titleText"><span>Our Team</span></div>
                                <h3>Meet Our Team</h3>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">

                            </div>
                        </div>

                        <div className="row d-flex flex-wrap py-3">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="container">
                                    <img src="../../../images/profile/kimani2.jpeg" alt="Avatar" height="415px" className="image rounded"></img>
                                    <div className="overlay">
                                        <div className="text">CEO & Founder</div>
                                        

                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="container">
                                    <img src="../../../images/profile/mero.jpg" alt="Avatar" height="415px" className="image rounded"></img>
                                    <div className="overlay">
                                        <div className="text">Sales & Marketing Expert</div>



                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>







                </main>
                <Footer />


            </Fragment>
        )


    };

}

export default AboutMe2;