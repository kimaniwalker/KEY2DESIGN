import React, { useState, useEffect, Fragment } from 'react';




const Tickets = () => {

  const [tickets, setTickets] = useState([]);




  useEffect(() => {

    getTickets();

  }, []);

  const getTickets = async () => {
    try {
      let response = await fetch('/api/workrequest');
      let data = await response.json();
      setTickets(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <Fragment>




      {tickets.map((ticket, id) =>

        <div key={id} class="accordion " id="accordionExample">
          <div class="card">
            <div class="card-header bg-dark" id="headingOne">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div className="row justify-content-center">

                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <span>Ticket Number:{ticket.id}</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <span>Severity: {ticket.severity}</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <span>Status: {ticket.status}</span>
                    </div>



                  </div>

                </button>
              </h2>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                <p>Ticket Number: {ticket.id}</p>
                <p>Status: {ticket.status}</p>
                <p>Severity: {ticket.severity}</p>
                <p>Issue: {ticket.request}</p>
                <p>Date Created: {ticket._created}</p>
                <p>Last Modified: {ticket._lastModified}</p>

              </div>
            </div>
          </div>
        </div>
      )}



    </Fragment>
  )
}

export default Tickets;