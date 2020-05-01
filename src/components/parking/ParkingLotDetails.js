import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";

function ParkingLotDetails(props) {

  let parking = props.location.state;

  return (
    <>
      <div className="tripDetails">
        <NavFriend />
        <div className="tripstuff1">
          <h1>Your single parking lot details:</h1>
          <p>Parking Lot Name: {parking.parkingName}</p>
          <p>Parking Lot Address: {parking.parkingAddress}</p>
          <p>Parking Lot Phone: {parking.parkingPhone}</p>
          <p>Parking Lot Cost: {parking.parkingCost}</p>
          <p>Parking Lot Hours: {parking.parkingHours}</p>
          <p>Parking Lot Likes: {parking.parkingLikes}</p>
          <p>Parking Lot Notes: {parking.parkingNotes}</p>

        </div>

      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotDetails);
