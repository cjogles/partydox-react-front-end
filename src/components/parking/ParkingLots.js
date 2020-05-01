import React from "react";
import Parking from "./Parking";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from '../FooterSignUp';

function ParkingLots(props) {
  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Your ParkingLots</h2>
          {props.parkingLots.map((parking) => {
            return <Parking key={parking.id} parking={parking} />;
          })}
        </div>
      </div>
      <Footer/>
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
