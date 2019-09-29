import React, { Component, Fragment } from 'react';
import '../../../utils/scss/pages/_packages.scss'


const Packages = () => {


  const handleLink = () => {
    window.location.href = '/contact';
  }

  return (
    <Fragment>
      <main className="packages mb-2">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto d-flex flex-wrap">
              <div className="row justify-content-center">

                <div class="card m-3">
                  <div class="card-header bg-dark">
                    <p className="featuredTitle">
                      Bronze
                    </p>

                    <p className="pt-2">
                      <h1>$395</h1>
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">1 Page Site</li>
                    <li class="list-group-item">1 Month Free Maintenance</li>
                    <li class="list-group-item">1 Email Address</li>
                    <li class="list-group-item">12 Months Free Hosting</li>
                    <li class="list-group-item">Submission To Google</li>
                    <li class="list-group-item">1 Domain Name</li>
                    <div className="row justify-content-center pt-2">
                      <li class="list-group-item">
                        <button type="button" onClick={handleLink} className="btn btn-info text-center">Get A Quote</button>
                      </li>
                    </div>

                  </ul>
                </div>



                <div class="card m-3">
                  <div class="card-header bg-dark">

                    <p className="featuredTitle">
                      Gold
                    </p>
                    <p className="pt-2">
                      <h1>$795</h1>
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">All Gold Features</li>
                    <li class="list-group-item">Up To 20 Web Pages</li>
                    <li class="list-group-item">eCommerce Store</li>
                    <li class="list-group-item">Newsletters</li>
                    <li class="list-group-item">Event Registration System</li>
                    <li class="list-group-item">2 Months Free Maintenance</li>
                    <div className="row justify-content-center pt-2">
                      <li class="list-group-item">
                        <button type="button" onClick={handleLink} className="btn btn-info text-center">Get A Quote</button>
                      </li>
                    </div>

                  </ul>
                </div>




                <div class="card m-3">
                  <div class="card-header bg-dark">
                    <p className="featuredTitle">
                      Platinum
                    </p>
                    <p className="pt-2">
                      <h1>$1495</h1>
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">All Platinum Features</li>
                    <li class="list-group-item">Unlimited Pages</li>
                    <li class="list-group-item">18 Months Free Hosting</li>
                    <li class="list-group-item">Membership System</li>
                    <li class="list-group-item">4 Months Free Maintenance</li>
                    <li class="list-group-item">1 Commercial</li>
                    <div className="row justify-content-center pt-2">
                      <li class="list-group-item">
                        <button type="button" onClick={handleLink} className="btn btn-info text-center">Get A Quote</button>
                      </li>
                    </div>

                  </ul>
                </div>

              </div>


            </div>


          </div>
        </div>


      </main>
    </Fragment>

  )



}

export default Packages;