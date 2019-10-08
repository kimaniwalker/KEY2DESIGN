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

        

<table className="table table-bordered table-striped table-responsive table-hover thead-dark">
  <thead>
    <tr>
      <th scope="col-auto">Id</th>
      <th scope="col-auto">Name</th>
      <th scope="col-auto">Phone</th>
      <th scope="col-auto">Email</th>
      <th scope="col-auto">Request</th>
      <th scope="col-auto">Severity</th>
      <th scope="col-auto">Status</th>
      <th scope="col-auto">Created</th>
      <th scope="col-auto">Completed</th>
    </tr>
  </thead>



  <tbody>
{tickets.map((ticket, id) =>
            

    <tr key={id}>
      <th scope="row">{ticket.id}</th>
      <td>{ticket.name}</td>
      <td>{ticket.phone}</td>
      <td>{ticket.email}</td>
      <td>{ticket.request}</td>
      <td>{ticket.severity}</td>
      <td>{ticket.status}</td>
      <td>{ticket._created}</td>
      <td>{ticket._completed}</td>

    </tr>
             )}
  </tbody>


</table>

            
        
        </Fragment>
    )
}

export default Tickets;