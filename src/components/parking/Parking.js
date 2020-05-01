import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function Parking(props) {

  return (
    <>

      <div className="trip">
        <div className="tripdiv1">
          <div>
            <h6>Parking Lot Name:</h6>
            <h2>{props.parking.parking_lot_name}</h2>
          </div>
          <div>
            <h6>Parking Lot Address: </h6>
            <h2>{props.parking.parking_lot_address}</h2>
          </div>
        </div>
        <div className="tripdiv2">
            <div>
                {/* access these props via props.location.state */}
                <Link to={{ pathname: '/parkingDetails', state: { 
                    parkingName: props.parking.parking_lot_name,
                    parkingAddress: props.parking.parking_lot_address,
                    parkingPhone: props.parking.parking_lot_phone,
                    parkingCost: props.parking.parking_lot_cost,
                    parkingHours: props.parking.parking_lot_hours,
                    parkingLikes: props.parking.parking_upvote,
                    parkingNotes: props.parking.parking_notes,
                    } 
                    }}>View Parking Lot Details</Link>
            </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Parking);