import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";

function ParkingLotDetails(props) {
  let parking = props.location.state;

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
        <div className="tripstuff1">
          <h1>{parking.parkingName}</h1>
          <p className="outerp">Parking Lot Name: <p>{parking.parkingName}</p></p>
          <p className="outerp">Parking Lot Address: <p>{parking.parkingAddress}</p></p>
          <p className="outerp">Parking Lot Phone: <p>{parking.parkingPhone}</p></p>
          <p className="outerp">Parking Lot Cost: <p>{parking.parkingCost}</p></p>
          <p className="outerp">Parking Lot Hours: <p>{parking.parkingHours}</p></p>
          <p className="outerp">Parking Lot Likes: <p>{parking.parkingLikes}</p></p>
          <p className="outerp">Parking Lot Notes: <p>{parking.parkingNotes}</p></p>
        </div>
        <div className="tripstuff2">
          <Link to="/activities">Trip Activities</Link>
          <Link to="/parkingLots">Trip Parking Lots</Link>
          <Link to="/shoppingLists">Trip Shopping Lists</Link>
          <Link to="/flights">Trip Flights</Link>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotDetails);
