import React, { useEffect } from "react";
import Nav from "../friends/NavFriend";
import FooterSignUp from "../FooterSignUp";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function UpdateProfile(props) {

  useEffect(() => {
    props.getFriend();
  })
  let history = useHistory();
  let thisProfile = props.location.state;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      username: thisProfile.username,
      friend_name: thisProfile.friend_name,
      friend_profile_pic: thisProfile.friend_profile_pic,
      friend_email: thisProfile.friend_email,
      friend_phone: thisProfile.friend_phone
    },
  });

  const onSubmit = (trip) =>
    props.updateProfile(
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
            Update {thisProfile.tripName} Trip
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

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
