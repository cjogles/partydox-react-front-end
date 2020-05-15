import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../parking/NavParking";
import Footer from "../FooterSignUp";
import { deleteParking, getParking } from "../../actions/parkingActions";
import { useHistory } from "react-router-dom";

function ParkingLotDetails(props) {
  let history = useHistory();
  useEffect(() => {
    props.getParking(props.location.state.parking.id);
  }, []);

  if (props.thisTrip[0] !== undefined && props.thisParking[0] !== undefined) {
    return (
      <>
        <Nav />
        <div className="tripDetails">
          <div>
            <h1>Your Parking Lot Info</h1>
            <div className="updateTrip">
              <Link
                to={{
                  pathname: "/updateParkingLot",
                  state: {
                    tripId: localStorage.getItem("tripId"),
                    id: props.thisParking[0].id,
                    parking_lot_name: props.thisParking[0].parking_lot_name,
                    parking_lot_address: props.thisParking[0].parking_lot_address,
                    parking_lot_phone: props.thisParking[0].parking_lot_phone,
                    parking_lot_cost: props.thisParking[0].parking_lot_cost,
                    parking_lot_hours: props.thisParking[0].parking_lot_hours,
                    parking_notes: props.thisParking[0].parking_notes,
                  },
                }}
              >
                <p>Edit Parking Lot</p>
              </Link>{" "}
              <button
                onClick={() => props.deleteParking(props.thisParking[0].id, history)}
              >
                <p>Delete Parking Lot</p>
              </button>{" "}
            </div>
          </div>
          <div className="tripstuff1">
            <div className="tripstuffnames">
              <p>Parking Lot Name:</p>
              <p>Parking Lot Address:</p>
              <p>Parking Lot Phone:</p>
              <p>Parking Lot Cost:</p>
              <p>Parking Lot Hours:</p>
              <p>Parking Lot Likes:</p>
              <p>Parking Lot Notes:</p>
            </div>
            <div className="tripstuffvalues">
              <p>
                {props.thisParking[0].parking_lot_name
                  ? props.thisParking[0].parking_lot_name
                  : "N/A"}
              </p>
              <p>
                {props.thisParking[0].parking_lot_address
                  ? props.thisParking[0].parking_lot_address
                  : "N/A"}
              </p>
              <p>
                {props.thisParking[0].parking_lot_phone
                  ? props.thisParking[0].parking_lot_phone
                  : "N/A"}
              </p>
              <p>
                {props.thisParking[0].parking_lot_cost
                  ? props.thisParking[0].parking_lot_cost
                  : "N/A"}
              </p>
              <p>
                {props.thisParking[0].parking_lot_hours
                  ? props.thisParking[0].parking_lot_hours
                  : "N/A"}
              </p>
              <p>
                {props.thisParking[0].parking_upvote
                  ? props.thisParking[0].parking_upvote
                  : "N/A"}
              </p>
              <p>
                {props.thisParking[0].parking_notes
                  ? props.thisParking[0].parking_notes
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="tripstuff2">
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    thisParking: state.parkingReducer.parking,
    thisTrip: state.tripsReducer.trip,
  };
};

const mapDispatchToProps = { getParking, deleteParking };

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotDetails);
