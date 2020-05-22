import React, { useEffect } from "react";
import Nav from "../friends/NavFriend";
import FooterSignUp from "../FooterSignUp";
import { updateTrip } from "../../actions/tripActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getFriend } from '../../actions/friendActions';

function UpdateTrip(props) {

  useEffect(() => {
    props.getFriend();
  }, [])
  // utils used by update trip component
  let history = useHistory();
  // specific trip details auto populate form for editing
  // these props are passed down from Link (react router dom) and are
  // accessible through props.location.state
  let thisTrip = props.location.state;
  // useForm Hook used to create form with validation, registering it, and submittal
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      trip_name: thisTrip.trip_name,
      trip_description: thisTrip.trip_description,
      trip_location: thisTrip.trip_location,
      trip_lift_off_location: thisTrip.trip_lift_off_location,
      trip_car: thisTrip.trip_car,
      trip_start_date: thisTrip.trip_start_date,
      trip_end_date: thisTrip.trip_end_date,
      trip_upvote: thisTrip.trip_upvote,
      trip_notes: thisTrip.trip_notes,
    },
  });

  const onSubmit = (trip) =>
    props.updateTrip(
      thisTrip.tripId,
      localStorage.getItem("id"),
      trip,
      history
    );

  return (
    <>
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span className="spanimage" role="img" aria-label="partyface">
              🥳
            </span>
            Update {thisTrip.tripName} Trip
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="trip_name">Trip Name:</label>
            <input name="trip_name" autoFocus={true} ref={register}></input>
            <label htmlFor="trip_description">Trip Description:</label>
            <input name="trip_description" ref={register}></input>
            <label htmlFor="trip_location">Trip Location:</label>
            <input name="trip_location" ref={register}></input>
            <label htmlFor="trip_lift_off_location">
              Trip Lift Off Location:
            </label>
            <input name="trip_lift_off_location" ref={register}></input>
            <label htmlFor="trip_car">Trip Car:</label>
            <input name="trip_car" ref={register}></input>
            <label htmlFor="trip_start_date">Trip Start Date:</label>
            <input type="datetime-local" name="trip_start_date" ref={register}></input>
            <label htmlFor="trip_end_date">Trip End Date:</label>
            <input type="datetime-local" name="trip_end_date" ref={register}></input>
            <label htmlFor="trip_notes">Trip Notes:</label>
            <textarea
              rows="4"
              cols="40"
              name="trip_notes"
              ref={register}
            ></textarea>
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

const mapDispatchToProps = { updateTrip, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTrip);
