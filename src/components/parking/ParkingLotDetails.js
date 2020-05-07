import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";
import Footer from '../FooterSignUp';

function ParkingLotDetails(props) {
  let parking = props.location.state;
  let tripName = localStorage.getItem("tripName");

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
      <div>
          <h1>{parking.parkingName}</h1>
          <div className="updateTrip">
            <Link
              to={{
                pathname: "/updateParkingLot",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Edit Parking Lot</p>
            </Link>{" "}
            <Link
              to={{
                pathname: "/deleteParkingLot",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Delete Parking Lot</p>
            </Link>{" "}
          </div>
        </div>

        <div className="tripstuff1">
          <div className="tripstuffnames">
            <p>Parking Lot Name: </p>
            <p>Parking Lot Address: </p>
            <p>Parking Lot Phone: </p>
            <p>Parking Lot Cost: </p>
            <p>Parking Lot Hours: </p>
            <p>Parking Lot Likes: </p>
            <p>Parking Lot Notes: </p>
          </div>
          <div className="tripstuffvalues">
            <p>{parking.parkingName ? parking.parkingName : "N/A"}</p>
            <p>{parking.parkingAddress ? parking.parkingAddress : "N/A"}</p>
            <p>{parking.parkingPhone ? parking.parkingPhone : "N/A"}</p>
            <p>{parking.parkingCost ? parking.parkingCost : "N/A"}</p>
            <p>{parking.parkingHours ? parking.parkingHours : "N/A"}</p>
            <p>{parking.parkingLikes ? parking.parkingLikes : "N/A"}</p>
            <p>{parking.parkingNotes ? parking.parkingNotes : "N/A"}</p>
          </div>
        </div>
        <div className="tripstuff2">
          <Link to={{ pathname: "/activities", state: {tripName: tripName}}}>Trip Activities</Link>
          <Link to={{ pathname: "/parkingLots", state: {tripName: tripName}}}>Trip Parking Lots</Link>
          <Link to={{ pathname: "/shoppingLists", state: {tripName: tripName}}}>Trip Shopping Lists</Link>
          <Link to={{ pathname: "/flights", state: {tripName: tripName}}}>Trip Flights</Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotDetails);
