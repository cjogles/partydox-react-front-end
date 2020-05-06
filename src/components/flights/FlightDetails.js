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
        <h1>Your Flight Details:</h1>
        <div className="tripstuff1">
          <div className="tripstuffnames">
            <h2>Departure:</h2>
            <p className="outerp">Airport Name: </p>
            <p className="outerp">Departure Date: </p>
            <p className="outerp">Depature Airport Address: </p>
            <p className="outerp">Departure Airport Phone: </p>
            <p className="outerp">Ticket Number: </p>
            <p className="outerp">Flight Number: </p>
            <p className="outerp">Terminal: </p>
            <p className="outerp">Gate: </p>
            <p className="outerp">Departure Flight Notes: </p>
            <h2>Arrival:</h2>
            <p className="outerp">Airport Name: </p>
            <p className="outerp">Departure Date: </p>
            <p className="outerp">Depature Airport Address: </p>
            <p className="outerp">Departure Airport Phone: </p>
            <p className="outerp">Ticket Number:</p>
            <p className="outerp">Flight Number: </p>
            <p className="outerp">Terminal: </p>
            <p className="outerp">Gate: </p>
            <p className="outerp">Departure Flight Notes: </p>
            <h2>BOTH</h2>
            <p className="outerp">TOTAL COST: </p>
            <p className="outerp">Likes: </p>
          </div>
          <div className="tripstuffvalues">
            <p></p>
            <p>{flight.departureAirportName}</p>
            <p>{flight.departureDate}</p>
            <p>{flight.departureAirportAddress}</p>
            <p>{flight.departureAirportPhone}</p>
            <p>{flight.departureTicketNumber}</p>
            <p>{flight.departureFlightNumber}</p>
            <p>{flight.departureTerminal}</p>
            <p>{flight.depatureGate}</p>
            <p>{flight.depatureNotes}</p>
            <p></p>
            <p>{flight.arrivalAirportName}</p>
            <p>{flight.arrivalDate}</p>
            <p>{flight.arrivalAirportAddress}</p>
            <p>{flight.arrivalAirportPhone}</p>
            <p>{flight.arrivalTicketNumber}</p>
            <p>{flight.arrivalFlightNumber}</p>
            <p>{flight.arrivalTerminal}</p>
            <p>{flight.arrivalGate}</p>
            <p>{flight.arrivalNotes}</p>
            <p></p>
            <p>{flight.flightCost}</p>
            <p>{flight.flightLikes}</p>
          </div>
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
