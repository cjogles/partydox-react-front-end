import React from "react";
import Parking from "./Parking";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ParkingList(props) {
  return (
    <>
      <div className="tripList">
        <div className="addtrip1">
          <h2 className="tripListH">
            {props.tripName} parking lots below:{" "}
          </h2>
          <div className="addtrip">
            <Link to={{
                pathname: "/addParking",
                state: {
                  tripId: props.tripId,
                },
              }}>
              <p>Add a Parking Lot</p>
            </Link>
          </div>
        </div>
        {/* map through the list of users parking lots as provided 
                via prop drilling from the parking dashboard */}
        {props.parkings.map((parking) => {
          return <Parking key={parking.id} parking={parking} tripName={props.tripName} tripId={props.tripId}/>;
        })}
      </div>
    </>
  );
}

// necessary state and action creators for parking list component
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ParkingList);
