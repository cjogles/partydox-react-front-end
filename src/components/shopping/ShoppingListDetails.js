import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../shopping/NavShopping";
import Footer from "../FooterSignUp";
import { deleteShopping, getShopping } from "../../actions/shoppingActions";
import { useHistory } from "react-router-dom";

function ShoppingListDetails(props) {
  let history = useHistory();
  useEffect(() => {
    props.getShopping(props.location.state.shopping.id);
  }, []);

  if (props.thisTrip[0] !== undefined && props.thisShopping[0] !== undefined) {
    return (
      <>
        <Nav />
        <div className="tripDetails">
          <div>
            <h1>Your Shopping List Info</h1>
            <div className="updateTrip">
              <Link
                to={{
                  pathname: "/updateShoppingList",
                  state: {
                    tripId: localStorage.getItem("tripId"),
                    id: props.thisShopping[0].id,
                    item_name: props.thisShopping[0].item_name,
                    item_cost: props.thisShopping[0].item_cost,
                    item_buyer: props.thisShopping[0].item_buyer,
                    item_notes: props.thisShopping[0].item_notes,
                  },
                }}
              >
                <p>Edit Shopping List</p>
              </Link>{" "}
              <button
                onClick={() => props.deleteShopping(props.thisShopping[0].id, history)}
              >
                <p>Delete Shopping List</p>
              </button>{" "}
            </div>
          </div>
          <div className="tripstuff1">
            <div className="tripstuffnames">
              <p>Shopping List Name:</p>
              <p>Shopping List Total Cost:</p>
              <p>Shopping List Buyers:</p>
              <p>Shopping List Likes:</p>
              <p>Shopping List Notes:</p>
            </div>
            <div className="tripstuffvalues">
              <p>
                {props.thisShopping[0].item_name
                  ? props.thisShopping[0].item_name
                  : "N/A"}
              </p>
              <p>
                {props.thisShopping[0].item_cost
                  ? props.thisShopping[0].item_cost
                  : "N/A"}
              </p>
              <p>
                {props.thisShopping[0].item_buyer
                  ? props.thisShopping[0].item_buyer
                  : "N/A"}
              </p>
              <p>
                {props.thisShopping[0].item_upvote
                  ? props.thisShopping[0].item_upvote
                  : "N/A"}
              </p>
              <p>
                {props.thisShopping[0].item_notes
                  ? props.thisShopping[0].item_notes
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
    thisShopping: state.shoppingReducer.shopping,
    thisTrip: state.tripsReducer.trip,
  };
};

const mapDispatchToProps = { getShopping, deleteShopping };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListDetails);
