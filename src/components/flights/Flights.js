import React from "react";
import Flight from "./Flight";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from "../FooterSignUp";
import { Link } from "react-router-dom";

function Flights(props) {
  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Welcome!</h2>
          <div className="tripList">
            <div className="addtrip1">
              <h2 className="tripListH">{localStorage.getItem("tripName")} flights below: </h2>
              <div className="addtrip">
                <Link
                  to={{
                    pathname: "/addFlight",
                    state: { userId: localStorage.getItem("id") },
                  }}
                >
                  <p>Add a Flight</p>
                </Link>
              </div>
            </div>
            {props.flights.map((flight) => {
              return <Flight key={flight.id} flight={flight} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
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
