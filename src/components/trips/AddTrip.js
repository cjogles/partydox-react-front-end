import React, { useEffect} from "react";
import Nav from "../friends/NavFriend";
import FooterSignUp from "../FooterSignUp";
import { useForm } from "react-hook-form";
import { addTrip } from "../../actions/tripActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFriend } from '../../actions/friendActions';

function AddTrip(props) {
  // utilities for login form
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (trip) => props.addTrip(trip, history);
  useEffect(() => {
    props.getFriend();
  }, [])
  return (
    <>
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span className="spanimage" role="img" aria-label="partyface">
              🥳
            </span>
            Add Trip
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="trip_name">Trip Name:</label>
            <input name="trip_name" autoFocus={true} ref={register({ required: true })} />
            <label htmlFor="trip_description">Trip Description:</label>
            <input name="trip_description" ref={register} />
            <label htmlFor="trip_lift_off_location">Trip Location:</label>
            <input name="trip_lift_off_location" ref={register} />
            <label htmlFor="trip_location">Trip Lift Off Location:</label>
            <input name="trip_location" ref={register} />
            <label htmlFor="trip_car">Trip Car:</label>
            <input name="trip_car" ref={register} />
            <label htmlFor="trip_start_date">Trip Start Date:</label>
            <input name="trip_start_date" ref={register} />
            <label htmlFor="trip_end_date">Trip End Date:</label>
            <input name="trip_end_date" ref={register} />
            <label htmlFor="trip_notes">Trip Notes:</label>
            <textarea rows="4" cols="40" name="trip_notes" ref={register} />
            {/* display the following errors for respective inputs */}
            {errors.trip_name && <span>Trip name is required</span>}
            <button>Submit</button>
          </form>
        </div>
      </div>
      <FooterSignUp />
    </>
  );
}

// AddTrip State if needed connects here
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { addTrip, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(AddTrip);
