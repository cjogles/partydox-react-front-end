import React, { useState, useEffect } from "react";
import Nav from "../friends/NavFriend";
import FooterSignUp from "../FooterSignUp";
import { updateTrip } from "../../actions/tripActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function UpdateTrip(props) {
  let history = useHistory();
  let prevTrip = props.history.location.state;

  const [trip, setTrip] = useState({
    trip_name: prevTrip.tripName,
    trip_description: prevTrip.tripDescription,
    trip_location: prevTrip.tripLocation,
    trip_lift_off_location: prevTrip.tripLiftOff,
    trip_car: prevTrip.tripCar,
    trip_start_date: prevTrip.tripStartDate,
    trip_end_date: prevTrip.tripEndDate,
    trip_upvote: prevTrip.tripLikes,
    trip_notes: prevTrip.tripNotes,
  });

  const onChange = (event) => {
    setTrip({ ...trip, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.updateTrip(prevTrip.tripId, prevTrip.userId, trip, history);
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
            Update {prevTrip.tripName} Trip
          </div>

          <form onSubmit={(event) => onSubmit(event)}>
            <label htmlFor="trip_name">Trip Name:</label>
            <input
              type="text"
              id="trip_name"
              name="trip_name"
              value={trip.trip_name}
              placeholder={prevTrip.tripName}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_description">Trip Description:</label>
            <input
              type="text"
              id="trip_description"
              name="trip_description"
              value={trip.trip_description}
              placeholder={prevTrip.tripDescription}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_location">
              Trip Location:
            </label>
            <input
              type="text"
              id="trip_location"
              name="trip_location"
              value={trip.trip_location}
              placeholder={prevTrip.tripLocation}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_lift_off_location">
              Trip Lift Off Location:
            </label>
            <input
              type="text"
              id="trip_lift_off_location"
              name="trip_lift_off_location"
              value={trip.trip_lift_off_location}
              placeholder={prevTrip.tripLiftOff}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_car">Trip Car:</label>
            <input
              type="text"
              id="trip_car"
              name="trip_car"
              value={trip.trip_car}
              placeholder={prevTrip.tripCar}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_start_date">Trip Start Date:</label>
            <input
              type="text"
              id="trip_start_date"
              name="trip_start_date"
              value={trip.trip_start_date}
              placeholder={prevTrip.tripStartDate}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_end_date">Trip End Date:</label>
            <input
              type="text"
              id="trip_end_date"
              name="trip_end_date"
              value={trip.trip_end_date}
              placeholder={prevTrip.tripEndDate}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="trip_notes">Trip Notes:</label>
            <input
              type="text"
              id="trip_notes"
              name="trip_notes"
              value={trip.trip_notes}
              placeholder={prevTrip.tripNotes}
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
  return {};
};

const mapDispatchToProps = { updateTrip };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTrip);
