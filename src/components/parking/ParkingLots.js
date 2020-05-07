import React from "react";
import Parking from "./Parking";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from "../FooterSignUp";
import { Link } from "react-router-dom";

function ParkingLots(props) {
  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Welcome!</h2>
          <div className="tripList">
            <div className="addtrip1">
              <h2 className="tripListH">{localStorage.getItem("tripName")} parking lots below: </h2>
              <div className="addtrip">
                <Link
                  to={{
                    pathname: "/addParkingLot",
                    state: { userId: localStorage.getItem("id") },
                  }}
                >
                  <p>Add a Parking Lot</p>
                </Link>
              </div>
            </div>
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
