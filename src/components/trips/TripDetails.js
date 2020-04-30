import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import NavFriend from '../../components/friends/NavFriend';

function TripDetails(props) {
console.log(props.location.state.tripId)
  return (
    <>

      <div className="tripDetails">
        <NavFriend/>
        <h1>Your single trip details:</h1>
        <p>Trip Name: {props.location.state.tripName}</p>
        <p>Trip Description: {props.location.state.tripDescription}</p>
        <p>Trip Location: {props.location.state.tripLocation}</p>
        <p>Trip Car: {props.location.state.tripCar}</p>
        <p>Trip Start Date: {props.location.state.tripStartDate}</p>
        <p>Trip End Date: {props.location.state.tripEndDate}</p>
        <p>Trip Likes: {props.location.state.tripLikes}</p>
        <p>Trip Notes: {props.location.state.tripNotes}</p>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    trips: state.tripsReducer.trips,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
