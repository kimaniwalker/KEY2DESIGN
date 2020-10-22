import React, { Component, Fragment } from 'react';
import '../utils/scss/pages/_aboutMe.scss';


class AboutMe extends Component {
 


    render() {
        return (
            <Fragment>
                <main className="aboutMe">
                    <div id="BG" className="container-fluid">

                        <div className="row justify-content-center">
                            <h3 id="NAME" className="text-light">What Separates Us From The Rest</h3>


                        </div>


                    </div>

                
                    <div className="container">
                        <div className="row pt-5 justify-content-center d-flex flex-wrap">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                                <div className="row justify-content-center ">
                                    <i className="fas fa-cash-register fa-2x"></i> <h6>Cost Effective</h6>

                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 ">
                                <div className="row justify-content-center">
                                    <i className="far fa-lightbulb fa-2x"></i> <h6>Creative</h6>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 ">
                                <div className="row justify-content-center">
                                    <i className="fas fa-rocket fa-2x"></i> <h6>Innovative</h6>
                                </div>
                            </div>


                        </div>

                        <div className="row pt-5 justify-content-center d-flex flex-wrap">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                                <div className="row justify-content-center ">
                                    <i className="fas fa-check-square fa-2x"></i> <h6>Transparent</h6>

                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 ">
                                <div className="row justify-content-center">
                                    <i className="far fa-clock fa-2x"></i> <h6>Timely</h6>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 ">
                                <div className="row justify-content-center">
                                    <i className="far fa-gem fa-2x"></i> <h6>Quality</h6>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="container-fluid">

                        <div className="row justify-content-center pt-4 pb-3">
                            <h1 className="text-dark">How Can We Help You ?</h1>
                            <div>
                            <h6>If you don’t have a website, you’re leaving money on the table.</h6>
                            </div>
                            <div>
                            <h6>Customers and donors look for more information about nonprofits and</h6>   
                            </div>
                            <div>
                            <h6>businesses by Googling them first. Make a strong first impression.</h6>  
                            </div>
                            <div>
                            <h6>People find you online.</h6>
                            </div>


                        </div>


                    </div>

                    

                </main>

            </Fragment>
        )


    };

}

export default AboutMe;