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
        <div className="tripstuff1">
          <h1>Your Shopping List Details:</h1>
          <p className="outerp">Item Names: <p>{items.name}</p></p>
          <p className="outerp">Items Total Cost: <p>{items.cost}</p></p>
          <p className="outerp">Buyer/Buyers: <p>{items.buyer}</p></p>
          <p className="outerp">Likes: <p>{items.likes}</p></p>
          <p className="outerp">Notes: <p>{items.notes}</p></p>
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
