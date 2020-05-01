import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";

function ShoppingListDetails(props) {
  let items = props.location.state;

  return (
    <>
      <div className="tripDetails">
        <NavFriend />
        <div className="tripstuff1">
          <h1>Your shopping list details:</h1>
          <p>Item Names: {items.name}</p>
          <p>Items Total Cost: {items.cost}</p>
          <p>Buyer/Buyers: {items.buyer}</p>
          <p>Likes: {items.likes}</p>
          <p>Notes: {items.notes}</p>
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
