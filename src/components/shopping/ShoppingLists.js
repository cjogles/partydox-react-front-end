import React from "react";
import Shopping from "./Shopping";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ShoppingLists(props) {
  return (
    <>
      <div className="tripList">
        <div className="addtrip1">
          <h2 className="tripListH">
            {props.tripName} shopping lists below:{" "}
          </h2>
          <div className="addtrip">
            <Link to={{
                pathname: "/addShoppingList",
                state: {
                  tripId: props.tripId,
                },
              }}>
              <p>Add a Shopping List</p>
            </Link>
          </div>
        </div>
        {/* map through the list of users shopping lists as provided 
                via prop drilling from the shopping dashboard */}
        {props.shoppings.map((shopping) => {
          return <Shopping key={shopping.id} shopping={shopping} tripName={props.tripName} tripId={props.tripId}/>;
        })}
      </div>
    </>
  );
}

// necessary state and action creators for shopping list component
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLists);
