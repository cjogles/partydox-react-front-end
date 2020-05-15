import React, { useEffect } from "react";
import Nav from "../friends/NavFriend";
import FooterSignUp from "../FooterSignUp";
import { useForm } from "react-hook-form";
import { addParking } from "../../actions/parkingActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllActivities } from '../../actions/activityActions';

function AddParkingLot(props) {
  // utilities for adding parking lot form
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (parking) => props.addParking(parking, history);
//   const onSubmit = (parking) => console.log(parking);
  useEffect(() => {
      props.getAllActivities(localStorage.getItem("tripId"))
  }, [])

  return (
    <>
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span role="img" aria-label="partyface">
              🥳
            </span>
            Add Parking Lot
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="activity_id">Which Activity is this for?</label>
            <select name="activity_id" ref={register}>
                {props.activities.map(activity => {
                   return <option key={activity.id} value={activity.id}> {activity.activity_name}</option>
                })}
            </select>
            <label htmlFor="parking_lot_name">Parking Lot Name:</label>
            <input name="parking_lot_name" autoFocus={true} ref={register({ required: true })} />
            <label htmlFor="parking_lot_address">Parking Lot Address:</label>
            <input name="parking_lot_address" ref={register} />
            <label htmlFor="parking_lot_phone">Parking Lot Phone:</label>
            <input name="parking_lot_phone" ref={register} />
            <label htmlFor="parking_lot_cost">Parking Lot Cost:</label>
            <input name="parking_lot_cost" ref={register} />
            <label htmlFor="parking_lot_hours">Parking Lot Hours:</label>
            <input name="parking_lot_hours" ref={register} />
            <label htmlFor="parking_notes">Parking Notes:</label>
            <textarea rows="4" cols="40" name="parking_notes" ref={register} />
            {/* display the following errors for respective inputs */}
            {errors.parking_lot_name && <span>Parking Lot name is required</span>}
            <input type="submit"/>
          </form>
        </div>
      </div>
      <FooterSignUp />
    </>
  );
}

// add parking lot State if needed connects here
const mapStateToProps = (state) => {
  return {
      activities: state.activityReducer.activities,
  };
};

const mapDispatchToProps = { addParking, getAllActivities };

export default connect(mapStateToProps, mapDispatchToProps)(AddParkingLot);
