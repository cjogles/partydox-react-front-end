import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteTrip } from "../../actions/tripActions";

function Trip(props) {
  // necessary utils for Trip component
  let history = useHistory();

  return (
    <>
      <div className="trip">
        <div className="tripdiv1">
          <div className="tripname">
            {/* display trip name and description
             as passed down from dashboard */}
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
            {/* continue passing down the respective trip 
                from props to trip details page     */}
            <Link
              to={{
                pathname: "/tripDetails",
                state: {
                  trip: props.trip,
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
            {/* continue passing down the respective trip 
                from props to update trip page     */}
            <Link
              to={{
                pathname: "/updateTrip",
                state: {
                  trip: props.trip,
                },
              }}
            >
              <p>Edit Trip</p>
            </Link>{" "}
          </div>

          <div>
            {/* onClick, delete trip by trip id and user id and 
            inside action creator, redirect or push to the 
            dashboard */}
            <button
              onClick={() =>
                props.deleteTrip(
                  props.trip.id,
                  localStorage.getItem("id"),
                  history
                )
              }
            >
              <p>Delete Trip</p>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

// necessary state and action creators for Trip component
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = { deleteTrip };

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
