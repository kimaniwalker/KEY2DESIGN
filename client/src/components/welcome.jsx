import React, { Component, Fragment } from 'react';
import '../utils/scss/pages/_banner2.scss';
import HomeBanner from './screens/Home/homeBanner';
import Packages from './screens/Packages/packages';
import AboutMe from './aboutMe';
import Banner2 from './banner2';
import Contact from './contact2';
import Footer from './footer';
import Header from './screens/Header/header';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Fragment>
        <main className="">
        <Header />
        <HomeBanner />
        <Packages />
        <AboutMe />
        <Banner2 />
        <Contact />
        <Footer />

        </main>
      </Fragment>

    )
  }


}

export default Welcome;