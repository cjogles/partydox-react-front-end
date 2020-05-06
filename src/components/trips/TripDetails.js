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
    localStorage.setItem("tripName", trip.tripName)
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
            <p>{trip.tripName ? trip.tripName : "N/A"}</p>
            <p>{trip.tripDescription  ? trip.tripDescription : "N/A"}</p>
            <p>{trip.tripLocation  ? trip.tripLocation : "N/A"}</p>
            <p>{trip.tripCar  ? trip.tripCar : "N/A"}</p>
            <p>{trip.tripStartDate  ? trip.tripStartDate : "N/A"}</p>
            <p>{trip.tripEndDate  ? trip.tripEndDate : "N/A"}</p>
            <p>{trip.tripLikes  ? trip.tripLikes : "N/A"}</p>
            <p>{trip.tripNotes  ? trip.tripNotes : "N/A"}</p>
          </div>
        </div>
        <div className="tripstuff2">
          <Link to={{ pathname: "/activities", state: {tripName: localStorage.getItem("tripName")}}}>Trip Activities</Link>
          <Link to={{ pathname: "/parkingLots", state: {tripName: localStorage.getItem("tripName")}}}>Trip Parking Lots</Link>
          <Link to={{ pathname: "/shoppingLists", state: {tripName: localStorage.getItem("tripName")}}}>Trip Shopping Lists</Link>
          <Link to={{ pathname: "/flights", state: {tripName: localStorage.getItem("tripName")}}}>Trip Flights</Link>
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
