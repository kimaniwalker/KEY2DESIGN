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

                <div className="card m-3">
                  <div className="card-header bg-dark">
                    <p className="featuredTitle">
                      Bronze
                    </p>

                    <div className="pt-2">
                      <h1>$395</h1>
                    </div>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">1 Page Site</li>
                    <li className="list-group-item">1 Month Free Maintenance</li>
                    <li className="list-group-item">1 Email Address</li>
                    <li className="list-group-item">12 Months Free Hosting</li>
                    <li className="list-group-item">Submission To Google</li>
                    <li className="list-group-item">1 Domain Name</li>
                    <div className="row justify-content-center pt-2">
                      <li className="list-group-item">
                        <button type="button" onClick={handleLink} className="btn btn-info text-center">Get A Quote</button>
                      </li>
                    </div>

                  </ul>
                </div>



                <div className="card m-3">
                  <div className="card-header bg-dark">

                    <p className="featuredTitle">
                      Gold
                    </p>
                    <div className="pt-2">
                      <h1>$795</h1>
                    </div>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">All Bronze Features</li>
                    <li className="list-group-item">Up To 20 Web Pages</li>
                    <li className="list-group-item">eCommerce Store</li>
                    <li className="list-group-item">Newsletters</li>
                    <li className="list-group-item">Event Registration System</li>
                    <li className="list-group-item">2 Months Free Maintenance</li>
                    <div className="row justify-content-center pt-2">
                      <li className="list-group-item">
                        <button type="button" onClick={handleLink} className="btn btn-info text-center">Get A Quote</button>
                      </li>
                    </div>

                  </ul>
                </div>




                <div className="card m-3">
                  <div className="card-header bg-dark">
                    <p className="featuredTitle">
                      Platinum
                    </p>
                    <div className="pt-2">
                      <h1>$1495</h1>
                    </div>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">All Gold Features</li>
                    <li className="list-group-item">Unlimited Pages</li>
                    <li className="list-group-item">18 Months Free Hosting</li>
                    <li className="list-group-item">Membership System</li>
                    <li className="list-group-item">4 Months Free Maintenance</li>
                    <li className="list-group-item">1 Commercial</li>
                    <div className="row justify-content-center pt-2">
                      <li className="list-group-item">
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