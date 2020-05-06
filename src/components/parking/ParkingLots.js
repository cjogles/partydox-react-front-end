import React from "react";
import Parking from "./Parking";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from "../FooterSignUp";

function ParkingLots(props) {
  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Welcome!</h2>
          <div className="tripList">
            <h2 className="tripListH"> {localStorage.getItem("tripName")} Parking Lots</h2>
            {props.parkingLots.map((parking) => {
              return <Parking key={parking.id} parking={parking} />;
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
    parkingLots: state.parkingReducer.parkingLots,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLots);
