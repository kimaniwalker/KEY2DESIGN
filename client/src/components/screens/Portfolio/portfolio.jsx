import React, { Fragment } from 'react';
import '../../../../src/utils/scss/pages/_portfolio.scss'
import Header2 from '../Header/header2';
import Footer from '../../footer';

const Portfolio = () => {

    return (
        <Fragment>
            <Header2 />
            <main className="portfolio pt-3 pb-3">
                <div className="row justify-content-center">
                    <div className="col-auto d-flex flex-wrap">

                        <div class="card">
                            <img src="../../../../images/portfolio/portfolioKey.png" class="card-img-top bg-dark" alt="..."></img>
                            
                            <div class="card-body">

                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    )


}

export default Portfolio;

