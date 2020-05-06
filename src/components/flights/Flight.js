import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function Flight(props) {

  return (
    <>

      <div className="trip">
        <div className="tripdiv1">
          <div className="tripdescription">
            <h6>Departure Airport:</h6>
            <h2>{props.flight.departure_airport_name}</h2>
          </div>
          <div  className="tripdescription">
            <h6>Arrival Airport: </h6>
            <h2>{props.flight.arrival_airport_name}</h2>
          </div>
          <div  className="tripdescription">
            <h6>Likes: </h6>
            <h2>{props.flight.flight_combo_upvote}</h2>
          </div>
        </div>
        <div className="tripdiv2">
            <div>
                {/* access these props via props.location.state */}
                <Link to={{ pathname: '/flightDetails', state: { 
                    departureDate: props.flight.departure_date,
                    departureAirportName: props.flight.departure_airport_name,
                    departureAirportAddress: props.flight.departure_airport_address,
                    departureAirportPhone: props.flight.departure_airport_phone,
                    departureTicketNumber: props.flight.departure_ticket_number,
                    departureFlightNumber: props.flight.departure_flight_number,
                    departureTerminal: props.flight.departure_terminal,
                    departureGate: props.flight.departure_gate,
                    departureNotes: props.flight.departure_flight_notes,
                    arrivalDate: props.flight.arrival_date,
                    arrivalAirportName: props.flight.arrival_airport_name,
                    arrivalAirportAddress: props.flight.arrival_airport_address,
                    arrivalAirportPhone: props.flight.arrival_airport_phone,
                    arrivalTicketNumber: props.flight.arrival_ticket_number,
                    arrivalFlightNumber: props.flight.arrival_flight_number,
                    arrivalTerminal: props.flight.arrival_terminal,
                    arrivalGate: props.flight.arrival_gate,
                    arrivalNotes: props.flight.arrival_flight_notes,
                    flightCost: props.flight.total_flight_cost,
                    flightLikes: props.flight.flight_combo_upvote,
                    } 
                    }}><p>View Flight Details</p></Link>
            </div>
        </div>
        <div className="tripdiv3">
          <div>
            <Link to="/inviteFriend">
              <p>Invite a Friend to Collaborate!</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Flight);
