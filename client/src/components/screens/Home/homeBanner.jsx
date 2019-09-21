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

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="text-light">Sofware Development Done Right</h1>
            <p id="subtitle" class="lead">Establish More Customers, Not Just Local But Global</p>
            <div className="row justify-content-center">
              <button id="BannerButton" onClick={handleLink} type="button" class="btn btn-outline-info">
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