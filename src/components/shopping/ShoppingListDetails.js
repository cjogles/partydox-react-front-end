import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";

function ShoppingListDetails(props) {
  let items = props.location.state;

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
        <h1>Your Shopping List Details:</h1>
        <div className="tripstuff1">
          <div className="tripstuffnames">
            <p className="outerp">Item Names: </p>
            <p className="outerp">Items Total Cost: </p>
            <p className="outerp">Buyer/Buyers: </p>
            <p className="outerp">Likes: </p>
            <p className="outerp">Notes: </p>
          </div>
          <div className="tripstuffvalues">
            <p>{items.name}</p>
            <p>{items.cost}</p>
            <p>{items.buyer}</p>
            <p>{items.likes}</p>
            <p>{items.notes}</p>
          </div>
        </div>
        <div className="tripstuff2">
          <Link to="/activities">Trip Activities</Link>
          <Link to="/parkingLots">Trip Parking Lots</Link>
          <Link to="/shoppingLists">Trip Shopping Lists</Link>
          <Link to="/flights">Trip Flights</Link>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListDetails);
