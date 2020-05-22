import React, { useEffect } from "react";
import Nav from "../flights/NavFlight";
import FooterSignUp from "../FooterSignUp";
import { useForm } from "react-hook-form";
import { addFlight } from "../../actions/flightActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFriend } from '../../actions/friendActions'

function AddFlight(props) {
  // utilities for login form
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (flight) => props.addFlight(flight, history);
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
            Add Flight
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="departure_date">Departure Date:</label>
            <input type="datetime-local" name="departure_date" autoFocus={true} ref={register({ required: true })} />
            <label htmlFor="departure_airport_name">Departure Airport Name:</label>
            <input name="departure_airport_name" ref={register} />
            <label htmlFor="departure_airport_address">Departure Airport Address:</label>
            <input name="departure_airport_address" ref={register} />
            <label htmlFor="departure_airport_phone">Departure Airport Phone:</label>
            <input name="departure_airport_phone" ref={register} />
            <label htmlFor="departure_ticket_number">Departure Airport Ticket Number:</label>
            <input name="departure_ticket_number" ref={register} />
            <label htmlFor="departure_flight_number">Departure Airport Flight Number:</label>
            <input name="departure_flight_number" ref={register} />
            <label htmlFor="departure_terminal">Departure Airport Terminal:</label>
            <input name="departure_terminal" ref={register} />
            <label htmlFor="departure_gate">Departure Airport Gate:</label>
            <input name="departure_gate" ref={register} />
            <label htmlFor="departure_flight_notes">Departure Airport Notes:</label>
            <textarea rows="4" cols="40" name="departure_flight_notes" ref={register} />
            <label htmlFor="arrival_date">Arrival Date:</label>
            <input type="datetime-local" name="arrival_date" ref={register} />
            <label htmlFor="arrival_airport_name">Arrival Airport Name:</label>
            <input name="arrival_airport_name" ref={register} />
            <label htmlFor="arrival_airport_address">Arrival Airport Address:</label>
            <input name="arrival_airport_address" ref={register} />
            <label htmlFor="arrival_airport_phone">Arrival Airport Phone:</label>
            <input name="arrival_airport_phone" ref={register} />
            <label htmlFor="arrival_ticket_number">Arrival Airport Ticket Number:</label>
            <input name="arrival_ticket_number" ref={register} />
            <label htmlFor="arrival_flight_number">Arrival Airport Flight Number:</label>
            <input name="arrival_flight_number" ref={register} />
            <label htmlFor="arrival_terminal">Arrival Airport Terminal:</label>
            <input name="arrival_terminal" ref={register} />
            <label htmlFor="arrival_gate">Arrival Airport Gate:</label>
            <input name="arrival_gate" ref={register} />
            <label htmlFor="arrival_flight_notes">Arrival Airport Notes:</label>
            <textarea rows="4" cols="40" name="arrival_flight_notes" ref={register} />
            {/* display the following errors for respective inputs */}
            {errors.departure_date && <span>Activity name is required</span>}
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

const mapDispatchToProps = { addFlight, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(AddFlight);
