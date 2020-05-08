import React, { useState } from "react";
import Nav from "../friends/NavFriend";
import FooterSignUp from "../FooterSignUp";
import { addTrip } from '../../actions/tripActions';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function AddTrip(props) {

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
            <label htmlFor="trip_name">Trip Name:</label>
            <input
              type="text"
              id="trip_name"
              name="trip_name"
              value={trip.trip_name}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_description">Trip Description:</label>
            <input
              type="text"
              id="trip_description"
              name="trip_description"
              value={trip.trip_description}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_lift_off_location">Trip Location:</label>
            <input
              type="text"
              id="trip_lift_off_location"
              name="trip_lift_off_location"
              value={trip.trip_lift_off_location}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_location">Trip Lift Off Location:</label>
            <input
              type="text"
              id="trip_location"
              name="trip_location"
              value={trip.trip_location}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_car">Trip Car:</label>
            <input
              type="text"
              id="trip_car"
              name="trip_car"
              value={trip.trip_car}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_start_date">Trip Start Date:</label>
            <input
              type="text"
              id="trip_start_date"
              name="trip_start_date"
              value={trip.trip_start_date}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_end_date">Trip End Date:</label>
            <input
              type="text"
              id="trip_end_date"
              name="trip_end_date"
              value={trip.trip_end_date}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_notes">Trip Notes:</label>
            <input
              type="text"
              id="trip_notes"
              name="trip_notes"
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
