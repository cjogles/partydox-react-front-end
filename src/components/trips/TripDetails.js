import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../../components/friends/NavFriend";
import Footer from "../FooterSignUp";
import { getAllActivities } from "../../actions/activityActions";
import { getAllParkingLots } from "../../actions/parkingActions";
import { getAllShoppingLists } from "../../actions/shoppingActions";
import { getAllFlights } from "../../actions/flightActions";

function TripDetails(props) {
  let trip = props.location.state;
  let tripId = props.location.state.tripId;
  let id = localStorage.getItem("id");

  useEffect(() => {
    props.getAllActivities(tripId);
    props.getAllParkingLots(tripId);
    props.getAllShoppingLists(tripId);
    props.getAllFlights(tripId);
  }, [id]);

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
      <h1>{trip.tripName}</h1>
        <div className="tripstuff1">
          <div className="tripstuffnames">
            <p>Trip Name: </p>
            <p>Description: </p>
            <p>Location: </p>
            <p>Car: </p>
            <p>Start Date: </p>
            <p>End Date: </p>
            <p>Likes: </p>
            <p>Notes: </p>
          </div>
          <div className="tripstuffvalues">
            <p>{trip.tripName}</p>
            <p>{trip.tripDescription}</p>
            <p>{trip.tripLocation}</p>
            <p>{trip.tripCar}</p>
            <p>{trip.tripStartDate}</p>
            <p>{trip.tripEndDate}</p>
            <p>{trip.tripLikes}</p>
            <p>{trip.tripNotes}</p>
          </div>
        </div>
        <div className="tripstuff2">
          <Link to="/activities">Trip Activities</Link>
          <Link to="/parkingLots">Trip Parking Lots</Link>
          <Link to="/shoppingLists">Trip Shopping Lists</Link>
          <Link to="/flights">Trip Flights</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    trips: state.tripsReducer.trips,
  };
};

const mapDispatchToProps = {
  getAllActivities,
  getAllParkingLots,
  getAllFlights,
  getAllShoppingLists,
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
