import React, { useEffect } from "react";
import Nav from "../friends/NavDetails";
import FooterSignUp from "../FooterSignUp";
import { updateActivity } from "../../actions/activityActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getFriend } from '../../actions/friendActions';

function UpdateActivity(props) {
  // utils used by update trip component
  let history = useHistory();
  // specific trip details auto populate form for editing
  // these props are passed down from Link (react router dom) and are
  // accessible through props.location.state
  let thisActivity = props.location.state;
  // useForm Hook used to create form with validation, registering it, and submittal
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
        activity_name: thisActivity.activity_name,
        activity_description: thisActivity.activity_description,
        activity_start_date: thisActivity.activity_start_date,
        activity_end_date: thisActivity.activity_end_date,
        activity_address: thisActivity.activity_address,
        activity_phone: thisActivity.activity_phone,
        activity_notes: thisActivity.activity_notes,
    },
  });
  useEffect(() => {
    props.getFriend();
  })
  const onSubmit = (activity) =>
    props.updateActivity(
      thisActivity.id,
      activity,
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
            Update {thisActivity.activity_name} activity
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="activity_name">Activity Name:</label>
            <input name="activity_name" autoFocus={true} ref={register}></input>
            <label htmlFor="activity_description">Activity Description:</label>
            <input name="activity_description" ref={register}></input>
            <label htmlFor="activity_start_date">Start Date:</label>
            <input name="activity_start_date" ref={register}></input>
            <label htmlFor="activity_end_date">
              End Date:
            </label>
            <input name="activity_end_date" ref={register}></input>
            <label htmlFor="activity_address">Activity Address:</label>
            <input name="activity_address" ref={register}></input>
            <label htmlFor="activity_phone">Activity Phone:</label>
            <input name="activity_phone" ref={register}></input>
            <label htmlFor="activity_notes">Activity Notes:</label>
            <textarea
              rows="4"
              cols="40"
              name="activity_notes"
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

const mapDispatchToProps = { updateActivity, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateActivity);
