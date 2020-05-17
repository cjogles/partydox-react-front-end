import React, { useEffect } from "react";
import Nav from "../parking/NavParking";
import FooterSignUp from "../FooterSignUp";
import { updateParking } from "../../actions/parkingActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAllActivities } from "../../actions/activityActions";
import { getFriend } from '../../actions/friendActions';

function UpdateParkingLot(props) {
  let history = useHistory();
  let thisParking = props.location.state;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      parking_lot_name: thisParking.parking_lot_name,
      parking_lot_address: thisParking.parking_lot_address,
      parking_lot_phone: thisParking.parking_lot_phone,
      parking_lot_cost: thisParking.parking_lot_cost,
      parking_lot_hours: thisParking.parking_lot_hours,
      parking_notes: thisParking.parking_notes,
    },
  });

  useEffect(() => {
    props.getFriend();
    props.getAllActivities(localStorage.getItem("tripId"));
  }, []);

  const onSubmit = (activity) =>
    props.updateParking(thisParking.id, activity, history);

  return (
    <>
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span className="spanimage" role="img" aria-label="partyface">
              🥳
            </span>
            Update Parking Lot
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="activity_id">Which Activity is this for?</label>
            <select name="activity_id" ref={register}>
              {props.activities.map((activity) => {
                return (
                  <option key={activity.id} value={activity.id}>
                    {" "}
                    {activity.activity_name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="parking_lot_name">Parking Lot Name:</label>
            <input
              name="parking_lot_name"
              autoFocus={true}
              ref={register({ required: true })}
            />
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
            {errors.parking_lot_name && (
              <span>Parking Lot name is required</span>
            )}
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
    activities: state.activityReducer.activities,
  };
};

const mapDispatchToProps = { updateParking, getAllActivities, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateParkingLot);
