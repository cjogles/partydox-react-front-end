import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../../components/friends/NavFriend";
import Footer from "../FooterSignUp";
import { getAllActivities } from "../../actions/activityActions";
import { getAllParkingLots } from "../../actions/parkingActions";
import { getAllShoppingLists } from "../../actions/shoppingActions";
import { getAllFlights } from "../../actions/flightActions";
import { deleteTrip } from "../../actions/tripActions";
import { useHistory } from "react-router-dom";

function TripDetails(props) {
  
  let history = useHistory();
  let trip = props.location.state;
  let tripId = props.location.state.tripId;

  useEffect(() => {
    localStorage.setItem("tripName", trip.tripName);
    localStorage.setItem("tripId", trip.tripId);
    props.getAllActivities(tripId);
    props.getAllParkingLots(tripId);
    props.getAllShoppingLists(tripId);
    props.getAllFlights(tripId);
  }, [props.update, props.deleteTrip]);

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
        <div>
          <h1>{trip.tripName}</h1>
          <div className="updateTrip">
            <Link
              to={{
                pathname: "/updateTrip",
                state: { 
                  userId: localStorage.getItem("id"),
                  tripId: trip.tripId,
                  tripName: trip.tripName,
                  tripDescription: trip.tripDescription,
                  tripLocation: trip.tripLocation,
                  tripLiftOff: trip.tripLiftOff,
                  tripCar: trip.tripCar,
                  tripStartDate: trip.tripStartDate,
                  tripEndDate: trip.tripEndDate,
                  tripLikes: trip.tripLikes,
                  tripNotes: trip.tripNotes,              
                },
              }}
            >
              <p>Edit Trip</p>
            </Link>{" "}
            <button onClick={() => props.deleteTrip(trip.tripId, localStorage.getItem("id"), history)}>
              <p>Delete Trip</p>
            </button>{" "}
          </div>
        </div>
        <div className="tripstuff1">
          <div className="tripstuffnames">
            <p>Trip Name: </p>
            <p>Description: </p>
            <p>Location: </p>
            <p>Start Off Location:</p>
            <p>Car: </p>
            <p>Start Date: </p>
            <p>End Date: </p>
            <p>Likes: </p>
            <p>Notes: </p>
          </div>
          <div className="tripstuffvalues">
            <p>{trip.tripName ? trip.tripName : "N/A"}</p>
            <p>{trip.tripDescription ? trip.tripDescription : "N/A"}</p>
            <p>{trip.tripLocation ? trip.tripLocation : "N/A"}</p>
            <p>{trip.tripLiftOff ? trip.tripLiftOff : "N/A"}</p>
            <p>{trip.tripCar ? trip.tripCar : "N/A"}</p>
            <p>{trip.tripStartDate ? trip.tripStartDate : "N/A"}</p>
            <p>{trip.tripEndDate ? trip.tripEndDate : "N/A"}</p>
            <p>{trip.tripLikes ? trip.tripLikes : "N/A"}</p>
            <p>{trip.tripNotes ? trip.tripNotes : "N/A"}</p>
          </div>
        </div>
        <div className="tripstuff2">
          <Link
            to={{
              pathname: "/activities",
              state: { tripName: localStorage.getItem("tripName") },
            }}
          >
            {localStorage.getItem("tripName")} activities
          </Link>
          <Link
            to={{
              pathname: "/parkingLots",
              state: { tripName: localStorage.getItem("tripName") },
            }}
          >
            {localStorage.getItem("tripName")} parking lots
          </Link>
          <Link
            to={{
              pathname: "/shoppingLists",
              state: { tripName: localStorage.getItem("tripName") },
            }}
          >
            {localStorage.getItem("tripName")} shopping lists
          </Link>
          <Link
            to={{
              pathname: "/flights",
              state: { tripName: localStorage.getItem("tripName") },
            }}
          >
            {localStorage.getItem("tripName")} flights
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    trips: state.tripsReducer.trips,
    update: state.tripsReducer.updatingTrip,
    updateMessage: state.tripsReducer.updatingTripMessage,
    deleteTrip: state.tripsReducer.deletingTrip,
    deleteTripMessage: state.tripsReducer.deletingTripMessage,
  };
};

const mapDispatchToProps = {
  getAllActivities,
  getAllParkingLots,
  getAllFlights,
  getAllShoppingLists,
  deleteTrip,
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
