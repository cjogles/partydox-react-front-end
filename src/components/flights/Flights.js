import React from "react";
import Flight from "./Flight";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from '../FooterSignUp';

function Flights(props) {
  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Your Flights</h2>
          {props.flights.map((flight) => {
            return <Flight key={flight.id} flight={flight} />;
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    flights: state.flightReducer.flights,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Flights);
