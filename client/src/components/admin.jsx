import React, { useState } from 'react';
import '../../src/utils/scss/pages/_admin.scss'
import Footer from './footer';
import Tickets from '../components/screens/Tickets/tickets';


const BlogAdmin = () => {

    const [viewTickets, setViewTickets] = useState(false);

    const handleToggle = () => {
        $(document).ready(function () {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });

        });
    }

    return (
        <div className="">

            <div id="content">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark container-fluid">
                    <div className="container-fluid">

                        <button onClick={handleToggle()} type="button" id="sidebarCollapse" className="btn btn-info">
                            <i className="fas fa-bars"></i>
                            <span>Toggle Sidebar</span>
                        </button>

                    </div>
                </nav>
            </div>
            <div className="wrapper">
                <nav id="sidebar">

                    <ul className="list-unstyled components">
                        <div className="row justify-content-center">
                          <span><img src="../../images/footer/logo.png" width="125px"></img></span>  
                        </div>
                        
                    </ul>
                    <ul className="list-unstyled components">
                        <div className="row justify-content-center">
                          <span>More Feautes</span>  
                        </div>
                        
                    </ul>
                    
                </nav>


                <div id="content" className="container-fluid">
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <h1 className="text-center mb-2">Tickets</h1>
                            <Tickets />

                        </div>
                    </div>
                </div>
            </div>
          <Footer />  
        </div>
        
    )
}

export default BlogAdmin;