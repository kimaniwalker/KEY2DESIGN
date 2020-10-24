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

<div key={id} class="accordion" id="accordionExample">
<div class="card">
  <div class="card-header" id="headingOne">
    <h2 class="mb-0">
      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Ticket Number:{ticket.id}
        Severity: {ticket.severity}
        Status: {ticket.status}
      </button>
    </h2>
  </div>

  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div class="card-body">
      {ticket.request}
      {ticket._created}
    </div>
  </div>
</div>
         </div>   
)}

            
        
        </Fragment>
    )
}

export default Tickets;