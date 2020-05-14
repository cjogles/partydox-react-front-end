import React from "react";
import Flight from "./Flight";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function FlightList(props) {
  return (
    <>
      <div className="tripList">
        <div className="addtrip1">
          <h2 className="tripListH">
            {props.tripName} flights below:{" "}
          </h2>
          <div className="addtrip">
            <Link to={{
                pathname: "/addFlight",
                state: {
                  tripId: props.tripId,
                },
              }}>
              <p>Add a Flight</p>
            </Link>
          </div>
        </div>
        {/* map through the list of users flights as provided 
                via prop drilling from the flight dashboard */}
        {props.flights.map((flight) => {
          return <Flight key={flight.id} flight={flight} tripName={props.tripName} tripId={props.tripId}/>;
        })}
      </div>
    </>
  );
}

// necessary state and action creators for flight list component
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
