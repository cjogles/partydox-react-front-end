import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteFlight } from "../../actions/flightActions";

function Flight(props) {
  // necessary utils for Activity component
  let history = useHistory();

  return (
    <>
      <div className="trip">
        <div className="tripdiv1">
          <div className="tripname">
            {/* display flight airports names, dates
             and likes as passed down from activity dashboard */}
            <h6>Departure Airport Name and date:</h6>
            <h2>{props.flight.departure_airport_name} - {props.flight.departure_date}</h2>
          </div>
          <div className="tripdescription">
            <h6>Arrival Airport Name and Date:</h6>
            <h2>{props.flight.arrival_airport_name} - {props.flight.arrival_date}</h2>
          </div>
          <div className="tripdescription">
            <h6>Likes:</h6>
            <h2>{props.flight.flight_combo_upvote}</h2>
          </div>
        </div>

        <div className="tripdiv2">
          <div>
            {/* continue passing down the respective flight 
                from props to flight details page     */}
            <Link
              to={{
                pathname: "/flightDetails",
                state: {
                  flight: props.flight,
                  tripName: props.tripName,
                  tripId: props.tripId,
                },
              }}
            >
              <p>View Flight Details</p>
            </Link>
          </div>
        </div>

        <div className="tripdiv3">
          <div>
            <Link to="/inviteFriend">
              <p>Invite a Friend to Collaborate!</p>
            </Link>
          </div>

          <div>
            {/* continue passing down the respective flight 
                from props to update flight page     */}
            <Link
              to={{
                pathname: "/updateFlight",
                state: {
                  tripId: localStorage.getItem("tripId"),
                  id: props.flight.id,
                  departure_date: props.flight.departure_date,
                  departure_airport_name: props.flight.departure_airport_name,
                  departure_airport_address: props.flight.departure_airport_address,
                  departure_airport_phone: props.flight.departure_airport_phone,
                  departure_ticket_number: props.flight.departure_ticket_number,
                  departure_flight_number: props.flight.departure_flight_number,
                  departure_terminal: props.flight.departure_terminal,
                  departure_gate: props.flight.departure_gate,
                  departure_flight_notes: props.flight.departure_flight_notes,
                  arrival_date: props.flight.arrival_date,
                  arrival_airport_name: props.flight.arrival_airport_name,
                  arrival_airport_address: props.flight.arrival_airport_address,
                  arrival_airport_phone: props.flight.arrival_airport_phone,
                  arrival_ticket_number: props.flight.arrival_ticket_number,
                  arrival_flight_number: props.flight.arrival_flight_number,
                  arrival_terminal: props.flight.arrival_terminal,
                  arrival_gate: props.flight.arrival_gate,
                  arrival_flight_notes: props.flight.arrival_flight_notes,
                },
              }}
            >
              <p>Edit flight</p>
            </Link>{" "}
          </div>

          <div>
            {/* onClick, delete Flight by flight id  and 
            inside action creator, redirect or push to the 
            flight dashboard */}
            <button
              onClick={() => props.deleteActivity(props.flight.id, history)}
            >
              <p>Delete Flight</p>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { deleteFlight };

export default connect(mapStateToProps, mapDispatchToProps)(Flight);
