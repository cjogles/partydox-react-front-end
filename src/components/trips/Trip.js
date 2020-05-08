import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { deleteTrip } from '../../actions/tripActions';

function Trip(props) {
  let history = useHistory();
  return (
    <>
      <div className="trip">
        <div className="tripdiv1">
          <div className="tripname">
            <h6>Name:</h6>
            <h2>{props.trip.trip_name}</h2>
          </div>
          <div className="tripdescription">
            <h6>Description:</h6>
            <h2>{props.trip.trip_description}</h2>
          </div>
        </div>
        <div className="tripdiv2">
          <div>
            {/* access these props via props.location.state */}
            <Link
              to={{
                pathname: "/tripDetails",
                state: {
                  tripId: props.trip.id,
                  tripName: props.trip.trip_name,
                  tripDescription: props.trip.trip_description,
                  tripLocation: props.trip.trip_location,
                  tripLiftOff: props.trip.trip_lift_off_location,
                  tripCar: props.trip.trip_car,
                  tripStartDate: props.trip.trip_start_date,
                  tripEndDate: props.trip.trip_end_date,
                  tripLikes: props.trip.trip_upvotes,
                  tripNotes: props.trip.trip_notes,
                },
              }}
            >
              <p>View Trip Details</p>
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
            <Link
              to={{
                pathname: "/updateTrip",
                state: {
                  userId: localStorage.getItem("id"),
                  tripId: props.trip.id,
                  tripName: props.trip.trip_name,
                  tripDescription: props.trip.trip_description,
                  tripLocation: props.trip.trip_location,
                  tripLiftOff: props.trip.trip_lift_off_location,
                  tripCar: props.trip.trip_car,
                  tripStartDate: props.trip.trip_start_date,
                  tripEndDate: props.trip.trip_end_date,
                  tripLikes: props.trip.trip_upvotes,
                  tripNotes: props.trip.trip_notes,
                },
              }}
            >
              <p>Edit Trip</p>
            </Link>{" "}
          </div>

          <div>
            <button onClick={() => props.deleteTrip(props.trip.id, localStorage.getItem("id"), history)}>
              <p>Delete Trip</p>
            </button>{" "}
          </div>
          
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    trips: state.tripsReducer.trips,
  };
};

const mapDispatchToProps = { deleteTrip };

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
