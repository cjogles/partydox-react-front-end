import React, { useEffect } from "react";
import Nav from "../flights/NavFlight";
import FooterSignUp from "../FooterSignUp";
import { updateFlight } from "../../actions/flightActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getFriend } from '../../actions/friendActions'

function UpdateFlight(props) {
  useEffect(() => {
    props.getFriend();
  }, [])
  // utils used by update flight component
  let history = useHistory();
  // specific flight details auto populate form for editing
  // these props are passed down from Link (react router dom) and are
  // accessible through props.location.state
  let thisFlight = props.location.state;
  // useForm Hook used to create form with validation, registering it, and submittal
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
        departure_date: thisFlight.departure_date,
        departure_airport_name: thisFlight.departure_airport_name,
        departure_airport_address: thisFlight.departure_airport_address,
        departure_airport_phone: thisFlight.departure_airport_phone,
        departure_ticket_number: thisFlight.departure_ticket_number,
        departure_flight_number: thisFlight.departure_flight_number,
        departure_terminal: thisFlight.departure_terminal,
        departure_gate: thisFlight.departure_gate,
        departure_flight_notes: thisFlight.departure_flight_notes,
        arrival_date: thisFlight.arrival_date,
        arrival_airport_name: thisFlight.arrival_airport_name,
        arrival_airport_address: thisFlight.arrival_airport_address,
        arrival_airport_phone: thisFlight.arrival_airport_phone,
        arrival_ticket_number: thisFlight.arrival_ticket_number,
        arrival_flight_number: thisFlight.arrival_flight_number,
        arrival_terminal: thisFlight.arrival_terminal,
        arrival_gate: thisFlight.arrival_gate,
        arrival_flight_notes: thisFlight.arrival_flight_notes,
    },
  });

  const onSubmit = (activity) =>
    props.updateFlight(
      thisFlight.id,
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
            Update Flight
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
            <input type="datetime-local" name="arrival_date" autoFocus={true} ref={register} />
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
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { updateFlight, getFriend };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFlight);
