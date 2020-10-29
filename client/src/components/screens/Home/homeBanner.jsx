import React, { Fragment } from 'react';
import '../../../../src/utils/scss/pages/_homeBanner.scss'


const HomeBanner = () => {



  const handleLink = () => {
    console.log('here');
    window.location.href = '/aboutus';
  }


  return (
    <Fragment>
      <main className="home">

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="text-light">Sofware Development Done Right</h1>
            <h2 className="text-light">Establish More Customers, Not Just Local But Global</h2>
            <div className="row justify-content-center py-4">
              <button id="BannerButton" onClick={handleLink} type="button" className="btn btn-outline-info text-light">
                Learn More About Us
              </button>
            </div>

          </div>
        </div>


      </main>
    </Fragment>

  )
}



  

    

  
    
  




export default HomeBanner;