import React from 'react'
import '../../../../src/utils/scss/pages/_header2.scss'


const Header = () => {

    const handleOpen = () => {
        console.log('here');
        $(document).ready(function() {
            $('.open-menu').on('click', function() {
               $('.overlay').addClass('open');
            });
          });
    }

    const handleClose = () => {
        $(document).ready(function() {
           
            $('.close-menu').on('click', function() {
              $('.overlay').removeClass('open');
            });
          });
    }




    return (
        <main className="header fixed-top bg-dark">


                    <div className="navbar">
                        <a href="/"><img className="logo" src="../../../../images/icons/icon.png" alt="Logo"  height="65px" /></a>

                        <div className="navbar-buttons">
                            <button className="button" type="button" name="button">SIGN IN</button>
                            <span><i className="fas fa-2x fa-bars open-menu" onClick={handleOpen}></i></span>
                        </div>
                    </div>


                    <div className="overlay bg-dark">
                        <nav className="overlay-menu">
                            <ul>
                            <li className="close-menu" onClick={handleClose}><i className="fas fa-times"></i></li>
                                <li><a href="/">Home</a></li>
                                <li><a href="/aboutus">About Us</a></li>
                                <li><a href="/payment">Make A Payment</a></li>
                                <li><a href="/ticket">Create A Ticket</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                
                            </ul>
                        </nav>
                    </div>


                



        </main>
    )
}

export default Header