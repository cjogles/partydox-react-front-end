import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";
import Footer from '../FooterSignUp';

function ShoppingListDetails(props) {
  let items = props.location.state;
  let tripName = localStorage.getItem("tripName");

  return (
    <>
      <NavFriend />
      <div className="tripDetails">
      <div>
          <h1>Your Shopping List Details:</h1>
          <div className="updateTrip">
            <Link
              to={{
                pathname: "/updateShoppingList",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Edit Shopping List</p>
            </Link>{" "}
            <Link
              to={{
                pathname: "/deleteShoppingList",
                state: { userId: localStorage.getItem("id") },
              }}
            >
              <p>Delete Shopping List</p>
            </Link>{" "}
          </div>
        </div>
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
          <Link to={{ pathname: "/activities", state: {tripName: tripName}}}>{tripName} activities</Link>
          <Link to={{ pathname: "/parkingLots", state: {tripName: tripName}}}>{tripName} parking lots</Link>
          <Link to={{ pathname: "/shoppingLists", state: {tripName: tripName}}}>{tripName} shopping lists</Link>
          <Link to={{ pathname: "/flights", state: {tripName: tripName}}}>{tripName} flights</Link>
        </div>
      </div>
      <Footer />
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
