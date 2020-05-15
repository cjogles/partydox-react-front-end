import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteParking } from "../../actions/parkingActions";

function Parking(props) {
  // necessary utils for Activity component
  let history = useHistory();

  return (
    <>
      <div className="trip">
        <div className="tripdiv1">
          <div className="tripname">
            {/* display parking airports names, dates
             and likes as passed down from activity dashboard */}
            <h6>Parking Lot Name and Phone:</h6>
            <h2>{props.parking.parking_lot_name} - {props.parking.parking_lot_phone}</h2>
          </div>
          <div className="tripdescription">
            <h6>Parking Lot Address:</h6>
            <h2>{props.parking.parking_lot_address}</h2>
          </div>
          <div className="tripdescription">
            <h6>Likes:</h6>
            <h2>{props.parking.parking_combo_upvote}</h2>
          </div>
        </div>

        <div className="tripdiv2">
          <div>
            {/* continue passing down the respective parking 
                from props to parking details page     */}
            <Link
              to={{
                pathname: "/parkingDetails",
                state: {
                  parking: props.parking,
                  tripName: props.tripName,
                  tripId: props.tripId,
                },
              }}
            >
              <p>View Parking Details</p>
            </Link>
          </div>
        </div>

        <div className="tripdiv3">
          <div>
            <Link to="/inviteFriend">
              <p>Invite a Friend to Collaborate!</p>
            </Link>
          </div>

          <div>
            {/* continue passing down the respective parking 
                from props to update parking page     */}
            <Link
              to={{
                pathname: "/updateParkingLot",
                state: {
                  tripId: localStorage.getItem("tripId"),
                  id: props.parking.id,
                  parking_lot_name: props.parking.parking_lot_name,
                  parking_lot_address: props.parking.parking_lot_address,
                  parking_lot_phone: props.parking.parking_lot_phone,
                  parking_lot_cost: props.parking.parking_lot_cost,
                  parking_lot_hours: props.parking.parking_lot_hours,
                  parking_notes: props.parking.parking_notes,
                },
              }}
            >
              <p>Edit parking</p>
            </Link>{" "}
          </div>

          <div>
            {/* onClick, delete parking by parking id  and 
            inside action creator, redirect or push to the 
            parking dashboard */}
            <button
              onClick={() => props.deleteParking(props.parking.id, history)}
            >
              <p>Delete Parking Lot</p>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { deleteParking };

export default connect(mapStateToProps, mapDispatchToProps)(Parking);
