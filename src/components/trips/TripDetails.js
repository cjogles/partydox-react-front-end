import React, {useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../../components/friends/NavFriend";
import Footer from '../FooterSignUp';
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
    <NavFriend />
      <div className="tripDetails">
        <div className="tripstuff1">
          <h1>Your single trip details:</h1>
          <p className="outerp">Trip Name: <p>{trip.tripName}</p></p>
          <p className="outerp">Trip Description: <p>{trip.tripDescription}</p></p>
          <p className="outerp">Trip Location: <p>{trip.tripLocation}</p></p>
          <p className="outerp">Trip Car: <p>{trip.tripCar}</p></p>
          <p className="outerp">Trip Start Date: <p>{trip.tripStartDate}</p></p>
          <p className="outerp">Trip End Date: <p>{trip.tripEndDate}</p></p>
          <p className="outerp">Trip Likes: <p>{trip.tripLikes}</p></p>
          <p className="outerp">Trip Notes: <p>{trip.tripNotes}</p></p>
        </div>
        <div className="tripstuff2">
          <Link to="/activities">
            Trip Activities
          </Link>
          <Link to="/parkingLots">
            Trip Parking Lots
          </Link>
          <Link to="/shoppingLists">
            Trip Shopping Lists
          </Link>
          <Link to="/flights">
            Trip Flights
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    trips: state.tripsReducer.trips,
  };
};

const mapDispatchToProps = { getAllActivities, getAllParkingLots, getAllFlights, getAllShoppingLists };

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
