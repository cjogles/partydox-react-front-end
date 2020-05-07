import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import FooterSignUp from "../FooterSignUp";
import { addTrip } from '../../actions/tripActions';
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

function AddTrip(props) {
  let id = localStorage.getItem("id");
  let history = useHistory();
  const [trip, setTrip] = useState({
    trip_name: "",
    trip_description: "",
    trip_location: "",
    trip_lift_off_location: "",
    trip_car: "",
    trip_start_date: "",
    trip_end_date: "",
    trip_upvote: 0,
    trip_notes: "",
  });

  const onChange = (event) => {
    setTrip({ ...trip, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.addTrip(trip, history);
  };

  useEffect(() => {
    
  }, [id]);

  return (
    <>
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span role="img" aria-label="partyface">
              🥳
            </span>
            Add Trip
          </div>

          <form onSubmit={(event) => onSubmit(event)}>
            <label htmlFor="addTripName">Trip Name:</label>
            <input
              type="text"
              id="addTripName"
              name="addTripName"
              value={trip.trip_name}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="addTripDescription">Trip Description:</label>
            <input
              type="text"
              id="addTripDescription"
              name="addTripDescription"
              value={trip.trip_description}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="addTripLift">Trip Lift Off Location:</label>
            <input
              type="text"
              id="addTripLift"
              name="addTripLift"
              value={trip.trip_lift_off_location}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="addTripCar">Trip Car:</label>
            <input
              type="text"
              id="addTripCar"
              name="addTripCar"
              value={trip.trip_description}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="addTripStart">Trip Start Date:</label>
            <input
              type="text"
              id="addTripStart"
              name="addTripStart"
              value={trip.trip_start_date}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="addTripEnd">Trip End Date:</label>
            <input
              type="text"
              id="addTripEnd"
              name="addTripEnd"
              value={trip.trip_end_date}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="addTripLikes">Trip Likes:</label>
            <input
              type="text"
              id="addTripLikes"
              name="addTripLikes"
              value={trip.trip_upvote}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="addTripNotes">Trip Notes:</label>
            <input
              type="text"
              id="addTripNotes"
              name="addTripNotes"
              value={trip.trip_notes}
              onChange={(event) => onChange(event)}
            ></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <FooterSignUp />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = { addTrip };

export default connect(mapStateToProps, mapDispatchToProps)(AddTrip);
