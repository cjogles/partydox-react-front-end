import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function Trip(props) {

  return (
    <>

      <div className="trip">
        <div className="tripdiv1">
          <div>
            <h6>Name:</h6>
            <h2>{props.trip.trip_name}</h2>
          </div>
          <div>
            <h6>Description:</h6>
            <h2>{props.trip.trip_description}</h2>
          </div>
        </div>
        <div className="tripdiv2">
            <div>
                {/* access these props via props.location.state */}
                <Link to={{ pathname: '/tripDetails', state: { 
                    tripId: props.trip.id,
                    tripName: props.trip.trip_name,
                    tripDescription: props.trip.trip_description,
                    tripLocation: props.trip.trip_location,
                    tripCar: props.trip.trip_car,
                    tripStartDate: props.trip.trip_start_date,
                    tripEndDate: props.trip.trip_end_date,
                    tripLikes: props.trip.trip_upvotes,
                    tripNotes: props.trip.trip_notes
                    } 
                    }}>View Trip Details</Link>
            </div>
        </div>
        <div className="tripdiv3">
            <div>
                <Link to="/inviteFriend">Invite a Friend to Collaborate!</Link>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
