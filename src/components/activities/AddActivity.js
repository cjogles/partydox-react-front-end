import React, { useEffect } from "react";
import Nav from "../friends/NavDetails";
import FooterSignUp from "../FooterSignUp";
import { useForm } from "react-hook-form";
import { addActivity } from "../../actions/activityActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFriend } from '../../actions/friendActions';

function AddActivity(props) {
  // utilities for login form
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (activity) => props.addActivity(activity, history);
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
            Add Activity
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="activity_name">Activity Name:</label>
            <input name="activity_name" autoFocus={true} ref={register({ required: true })} />
            <label htmlFor="activity_description">Activity Description:</label>
            <input name="activity_description" ref={register} />
            <label htmlFor="activity_start_date">Activity Start Date:</label>
            <input type="datetime-local" name="activity_start_date" ref={register} />
            <label htmlFor="activity_end_date">Activity End Date:</label>
            <input type="datetime-local" name="activity_end_date" ref={register} />
            <label htmlFor="activity_address">Activity Address:</label>
            <input name="activity_address" ref={register} />
            <label htmlFor="activity_phone">Activity Phone:</label>
            <input name="activity_phone" ref={register} />
            <label htmlFor="activity_notes">Activity Notes:</label>
            <textarea rows="4" cols="40" name="activity_notes" ref={register} />
            {/* display the following errors for respective inputs */}
            {errors.activity_name && <span>Activity name is required</span>}
            <button>Submit</button>
          </form>
        </div>
      </div>
      <FooterSignUp />
    </>
  );
}

// AddActivity State if needed connects here
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { addActivity, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(AddActivity);
