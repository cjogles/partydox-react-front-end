import React, {useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../../components/friends/NavFriend";
import { getAllActivities } from '../../actions/activityActions';
import { getAllParkingLots } from '../../actions/parkingActions';
import { getAllShoppingLists } from '../../actions/shoppingActions';
import { getAllFlights } from '../../actions/flightActions';

function TripDetails(props) {

  let trip = props.location.state;
  let tripId = props.location.state.tripId;
  let id = localStorage.getItem("id");

  useEffect(() => {
    props.getAllActivities(tripId);
    props.getAllParkingLots(tripId);
    props.getAllShoppingLists(tripId);
    props.getAllFlights(tripId);
  }, [id])

  return (
    <>
      <div className="tripDetails">
        <NavFriend />
        <div className="tripstuff1">
          <h1>Your single trip details:</h1>
          <p>Trip Name: {trip.tripName}</p>
          <p>Trip Description: {trip.tripDescription}</p>
          <p>Trip Location: {trip.tripLocation}</p>
          <p>Trip Car: {trip.tripCar}</p>
          <p>Trip Start Date: {trip.tripStartDate}</p>
          <p>Trip End Date: {trip.tripEndDate}</p>
          <p>Trip Likes: {trip.tripLikes}</p>
          <p>Trip Notes: {trip.tripNotes}</p>
        </div>
        <div className="tripstuff2">
          <Link to={{ pathname: "/activities", state: props.activities, }}>
            Activities
          </Link>
          <Link to={{ pathname: "/parkingLots", state: props.parkingLots, }}>
            Parking Lots
          </Link>
          <Link to={{ pathname: "/shoppingLists", state: props.shoppingLists, }}>
            Shopping Lists
          </Link>
          <Link to={{ pathname: "/flights", state: props.flights, }}>
            Flights
          </Link>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    trips: state.tripsReducer.trips,
    activities: state.activityReducer.activities,
    shoppingLists: state.shoppingReducer.shoppingLists,
    parkingLots: state.parkingReducer.parkingLots,
    flights: state.flightReducer.flights,
  };
};

const mapDispatchToProps = { getAllActivities, getAllParkingLots, getAllFlights, getAllShoppingLists };

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
