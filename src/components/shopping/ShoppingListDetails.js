import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";

function ShoppingListDetails(props) {
  let items = props.location.state;
  let tripName = localStorage.getItem("tripName");

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
            <p>{items.name ? items.name : "N/A"}</p>
            <p>{items.cost ? items.cost : "N/A"}</p>
            <p>{items.buyer ? items.buyer : "N/A"}</p>
            <p>{items.likes ? items.likes : "N/A"}</p>
            <p>{items.notes ? items.notes : "N/A"}</p>
          </div>
        </div>
        <div className="tripstuff2">
          <Link to={{ pathname: "/activities", state: {tripName: tripName}}}>Trip Activities</Link>
          <Link to={{ pathname: "/parkingLots", state: {tripName: tripName}}}>Trip Parking Lots</Link>
          <Link to={{ pathname: "/shoppingLists", state: {tripName: tripName}}}>Trip Shopping Lists</Link>
          <Link to={{ pathname: "/flights", state: {tripName: tripName}}}>Trip Flights</Link>
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
