import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../flights/NavFlight";
import Footer from "../FooterSignUp";
import { deleteFlight, getFlight } from "../../actions/flightActions";
import { useHistory } from "react-router-dom";

function FlightDetails(props) {
  // utils for Flight details component
  let history = useHistory();
  useEffect(() => {
    props.getFlight(props.location.state.flight.id);
    console.log("flight details rendered")
  }, []);

  if (props.thisFlight[0] !== undefined && props.thisFlight[0] !== undefined) {
    return (
      <>
        <Nav />
        <div className="tripDetails">
          {/* update and delete flight information */}
          <div>
            <h1>Your Flight Info</h1>
            <div className="updateTrip">
              <Link
                to={{
                  pathname: "/updateFlight",
                  state: {
                    tripId: localStorage.getItem("tripId"),
                    id: props.thisFlight[0].id,
                    departure_date: props.thisFlight[0].departure_date,
                    departure_airport_name: props.thisFlight[0].departure_airport_name,
                    departure_airport_address: props.thisFlight[0].departure_airport_address,
                    departure_airport_phone: props.thisFlight[0].departure_airport_phone,
                    departure_ticket_number: props.thisFlight[0].departure_ticket_number,
                    departure_flight_number: props.thisFlight[0].departure_flight_number,
                    departure_terminal: props.thisFlight[0].departure_terminal,
                    departure_gate: props.thisFlight[0].departure_gate,
                    departure_flight_notes: props.thisFlight[0].departure_flight_notes,
                    arrival_date: props.thisFlight[0].arrival_date,
                    arrival_airport_name: props.thisFlight[0].arrival_airport_name,
                    arrival_airport_address: props.thisFlight[0].arrival_airport_address,
                    arrival_airport_phone: props.thisFlight[0].arrival_airport_phone,
                    arrival_ticket_number: props.thisFlight[0].arrival_ticket_number,
                    arrival_flight_number: props.thisFlight[0].arrival_flight_number,
                    arrival_terminal: props.thisFlight[0].arrival_terminal,
                    arrival_gate: props.thisFlight[0].arrival_gate,
                    arrival_flight_notes: props.thisFlight[0].arrival_flight_notes,
                  },
                }}
              >
                <p>Edit Flight</p>
              </Link>{" "}
              <button
                onClick={() => props.deleteFlight(props.thisFlight[0].id, history)}
              >
                <p>Delete Flight</p>
              </button>{" "}
            </div>
          </div>
          <div className="tripstuff1">
            <div className="tripstuffnames">
              <p>Departure Date:</p>
              <p>Departure Airport Name:</p>
              <p>Departure Airport Address:</p>
              <p>Departure Airport Phone:</p>
              <p>Departure Airport Ticket Number:</p>
              <p>Departure Airport Flight Number:</p>
              <p>Departure Airport Terminal:</p>
              <p>Departure Airport Gate:</p>
              <p>Departure Airport Notes:</p>
              <p>Arrival Date:</p>
              <p>Arrival Airport Name:</p>
              <p>Arrival Airport Address:</p>
              <p>Arrival Airport Phone:</p>
              <p>Arrival Airport Ticket Number:</p>
              <p>Arrival Airport Flight Number:</p>
              <p>Arrival Airport Terminal:</p>
              <p>Arrival Airport Gate:</p>
              <p>Arrival Airport Notes:</p>
            </div>
            <div className="tripstuffvalues">
              <p>
                {props.thisFlight[0].departure_date
                  ? props.thisFlight[0].departure_date
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].departure_airport_name
                  ? props.thisFlight[0].departure_airport_name
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].departure_airport_address
                  ? props.thisFlight[0].departure_airport_address
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].departure_airport_phone
                  ? props.thisFlight[0].departure_airport_phone
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].departure_ticket_number
                  ? props.thisFlight[0].departure_ticket_number
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].departure_flight_number
                  ? props.thisFlight[0].departure_flight_number
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].departure_terminal
                  ? props.thisFlight[0].departure_terminal
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].departure_gate
                  ? props.thisFlight[0].departure_gate
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].departure_flight_notes
                  ? props.thisFlight[0].departure_flight_notes
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].arrival_date
                  ? props.thisFlight[0].arrival_date
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].arrival_airport_name
                  ? props.thisFlight[0].arrival_airport_name
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].arrival_airport_address
                  ? props.thisFlight[0].arrival_airport_address
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].arrival_airport_phone
                  ? props.thisFlight[0].arrival_airport_phone
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].arrival_ticket_number
                  ? props.thisFlight[0].arrival_ticket_number
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].arrival_flight_number
                  ? props.thisFlight[0].arrival_flight_number
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].arrival_terminal
                  ? props.thisFlight[0].arrival_terminal
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].arrival_gate
                  ? props.thisFlight[0].arrival_gate
                  : "N/A"}
              </p>
              <p>
                {props.thisFlight[0].arrival_flight_notes
                  ? props.thisFlight[0].arrival_flight_notes
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="tripstuff2">
            {/* <Link to="/activityDash">
              {props.thisTrip[0].tripName} activities
            </Link>
            <Link to="parkingDash">
              {props.thisTrip[0].tripName} parking lots
            </Link>
            <Link to="shoppingDash">
              {props.thisTrip[0].tripName} shopping lists
            </Link>
            <Link to="/flightDash">{props.thisTrip[0].tripName} flights</Link> */}
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    thisFlight: state.flightReducer.flight,
    thisTrip: state.tripsReducer.trip,
  };
};

const mapDispatchToProps = { getFlight, deleteFlight };

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetails);
