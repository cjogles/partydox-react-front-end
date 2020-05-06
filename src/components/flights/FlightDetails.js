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
          <h1>Your Flight Details:</h1>
          <h2>Departure:</h2>
          <p className="outerp">Airport Name: <p>{flight.departureAirportName}</p></p>
          <p className="outerp">Departure Date: <p>{flight.departureDate}</p></p>
          <p className="outerp">Depature Airport Address: <p>{flight.departureAirportAddress}</p></p>
          <p className="outerp">Departure Airport Phone: <p>{flight.departureAirportPhone}</p></p>
          <p className="outerp">Ticket Number: <p>{flight.departureTicketNumber}</p></p>
          <p className="outerp">Flight Number: <p>{flight.departureFlightNumber}</p></p>
          <p className="outerp">Terminal: <p>{flight.departureTerminal}</p></p>
          <p className="outerp">Gate: <p>{flight.depatureGate}</p></p>
          <p className="outerp">Departure Flight Notes: <p>{flight.depatureNotes}</p></p>

          <h2>Arrival:</h2>
          <p className="outerp">Airport Name: <p>{flight.arrivalAirportName}</p></p>
          <p className="outerp">Departure Date: <p>{flight.arrivalDate}</p></p>
          <p className="outerp">Depature Airport Address: <p>{flight.arrivalAirportAddress}</p></p>
          <p className="outerp">Departure Airport Phone: <p>{flight.arrivalAirportPhone}</p></p>
          <p className="outerp">Ticket Number:<p>{flight.arrivalTicketNumber}</p></p>
          <p className="outerp">Flight Number: <p>{flight.arrivalFlightNumber}</p></p>
          <p className="outerp">Terminal: <p>{flight.arrivalTerminal}</p></p>
          <p className="outerp">Gate: <p>{flight.arrivalGate}</p></p>
          <p className="outerp">Departure Flight Notes: <p>{flight.arrivalNotes}</p></p>

          <h2>BOTH</h2>
          <p className="outerp">TOTAL COST: <p>{flight.flightCost}</p></p>
          <p className="outerp">Likes: <p>{flight.flightLikes}</p></p>
        </div>
        <div className="tripstuff2">
          <Link to="/activities">Trip Activities</Link>
          <Link to="/parkingLots">Trip Parking Lots</Link>
          <Link to="/shoppingLists">Trip Shopping Lists</Link>
          <Link to="/flights">Trip Flights</Link>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetails);
