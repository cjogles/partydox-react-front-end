import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";
import Footer from '../FooterSignUp';

function FlightDetails(props) {
  let flight = props.location.state;
  let tripName = localStorage.getItem("tripName");

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
      <div>
          <h1>Your Flight Details:</h1>
          <div className="updateTrip">
            <Link
              to={{
                pathname: "/updateFlight",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Edit Flight</p>
            </Link>{" "}
            <Link
              to={{
                pathname: "/deleteFlight",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Delete Flight</p>
            </Link>{" "}
          </div>
        </div>
        <div className="tripstuff1">
          <div className="tripstuffnames">
            <p>Departure Airport Name: </p>
            <p>Departure Date: </p>
            <p>Depature Airport Address: </p>
            <p>Departure Airport Phone: </p>
            <p>Departure Ticket Number: </p>
            <p>Departure Flight Number: </p>
            <p>Departure Terminal: </p>
            <p>Departure Gate: </p>
            <p>Departure Flight Notes: </p>
            <p>Arrival Airport Name: </p>
            <p>Arrival Date: </p>
            <p>Arrival Airport Address: </p>
            <p>Arrival Airport Phone: </p>
            <p>Arrival Ticket Number:</p>
            <p>Arrival Flight Number: </p>
            <p>Arrival Terminal: </p>
            <p>Arrival Gate: </p>
            <p>Arrival Flight Notes: </p>
            <p>Total Flights Cost: </p>
            <p>Flight Combo Likes: </p>
          </div>
          <div className="tripstuffvalues">
            <p>{flight.departureAirportName ? flight.departureAirportName : "N/A"}</p>
            <p>{flight.departureDate ? flight.departureDate : "N/A"}</p>
            <p>{flight.departureAirportAddress ? flight.departureAirportAddress : "N/A"}</p>
            <p>{flight.departureAirportPhone ? flight.departureAirportPhone : "N/A"}</p>
            <p>{flight.departureTicketNumber ? flight.departureTicketNumber : "N/A"}</p>
            <p>{flight.departureFlightNumber ? flight.departureFlightNumber : "N/A"}</p>
            <p>{flight.departureTerminal ? flight.departureTerminal : "N/A"}</p>
            <p>{flight.depatureGate ? flight.depatureGate : "N/A"}</p>
            <p>{flight.depatureNotes ? flight.depatureNotes : "N/A"}</p>
            <p>{flight.arrivalAirportName ? flight.arrivalAirportName : "N/A"}</p>
            <p>{flight.arrivalDate ? flight.arrivalDate : "N/A"}</p>
            <p>{flight.arrivalAirportAddress ? flight.arrivalAirportAddress : "N/A"}</p>
            <p>{flight.arrivalAirportPhone ? flight.arrivalAirportPhone : "N/A"}</p>
            <p>{flight.arrivalTicketNumber ? flight.arrivalTicketNumber : "N/A"}</p>
            <p>{flight.arrivalFlightNumber ? flight.arrivalFlightNumber : "N/A"}</p>
            <p>{flight.arrivalTerminal ? flight.arrivalTerminal : "N/A"}</p>
            <p>{flight.arrivalGate ? flight.arrivalGate : "N/A"}</p>
            <p>{flight.arrivalNotes ? flight.arrivalNotes : "N/A"}</p>
            <p>{flight.flightCost ? flight.flightCost : "N/A"}</p>
            <p>{flight.flightLikes ? flight.flightLikes : "N/A"}</p>
          </div>
        </div>
        <div className="tripstuff2">
          <Link to={{ pathname: "/activities", state: {tripName: tripName}}}>{tripName} activities</Link>
          <Link to={{ pathname: "/parkingLots", state: {tripName: tripName}}}>{tripName} parking lots</Link>
          <Link to={{ pathname: "/shoppingLists", state: {tripName: tripName}}}>{tripName} shopping lists</Link>
          <Link to={{ pathname: "/flights", state: {tripName: tripName}}}>{tripName} flights</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetails);
