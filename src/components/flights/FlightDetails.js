import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";

function FlightDetails(props) {

  let flight = props.location.state;

  return (
    <>
    <NavFriend />
      <div className="tripDetails">
        
        <div className="tripstuff1">
          <h1>Your single flight details:</h1>
          <h2>Departure:</h2>
          <p>Airport Name: {flight.departureAirportName}</p>
          <p>Departure Date: {flight.departureDate}</p>
          <p>Depature Airport Address: {flight.departureAirportAddress}</p>
          <p>Departure Airport Phone: {flight.departureAirportPhone}</p>
          <p>Ticket Number: {flight.departureTicketNumber}</p>
          <p>Flight Number: {flight.departureFlightNumber}</p>
          <p>Terminal: {flight.departureTerminal}</p>
          <p>Gate: {flight.depatureGate}</p>
          <p>Departure Flight Notes: {flight.depatureNotes}</p>

          <h2>Arrival:</h2>
          <p>Airport Name: {flight.arrivalAirportName}</p>
          <p>Departure Date: {flight.arrivalDate}</p>
          <p>Depature Airport Address: {flight.arrivalAirportAddress}</p>
          <p>Departure Airport Phone: {flight.arrivalAirportPhone}</p>
          <p>Ticket Number: {flight.arrivalTicketNumber}</p>
          <p>Flight Number: {flight.arrivalFlightNumber}</p>
          <p>Terminal: {flight.arrivalTerminal}</p>
          <p>Gate: {flight.arrivalGate}</p>
          <p>Departure Flight Notes: {flight.arrivalNotes}</p>

          <h2>BOTH</h2>
          <p>TOTAL COST: {flight.flightCost}</p>
          <p>Likes: {flight.flightLikes}</p>
        </div>

      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetails);
