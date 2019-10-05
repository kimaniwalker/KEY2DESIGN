import React from 'react';
import '../utils/scss/pages/_footer.scss';

const Footer = () => {

    return (

        <main className="Footer">
            <div id="container" className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center">

                        
                        <p>COPYRIGHT 2019 KEY2DESIGN LLC</p>
                        <div className="w-100"></div>
                        
                           <a href="mailto:admin@key2design.io"><i className="fas fa-envelope-open-text text-light"></i></a>
                        <a href="tel:+12056038724"><i className="fas fa-phone-volume text-light"></i></a>
                        <a href="#"><i className="fab fa-instagram text-light"></i></a>
                        <a href="#"><i className="fab fa-facebook text-light"></i></a>
                        <a href="payment"><i className="fas fa-money-check-alt text-light"></i></a> 
                        
                        </div>

                        

                    </div>

                </div>

            </div>




        </main>)

}

export default Footer;