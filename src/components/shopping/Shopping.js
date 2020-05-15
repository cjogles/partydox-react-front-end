import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteShopping } from "../../actions/shoppingActions";

function Shopping(props) {
  // necessary utils for Activity component
  let history = useHistory();

  return (
    <>
      <div className="trip">
        <div className="tripdiv1">
          <div className="tripname">
            {/* display Shopping airports names, dates
             and likes as passed down from activity dashboard */}
            <h6>Shopping Items Bought:</h6>
            <h2>{props.shopping.item_name}</h2>
          </div>
          <div className="tripdescription">
            <h6>Total Cost:</h6>
            <h2>{props.shopping.item_cost}</h2>
          </div>
          <div className="tripdescription">
            <h6>Who bought items:</h6>
            <h2>{props.shopping.item_buyer}</h2>
          </div>
        </div>

        <div className="tripdiv2">
          <div>
            {/* continue passing down the respective Shopping 
                from props to Shopping details page     */}
            <Link
              to={{
                pathname: "/shoppingDetails",
                state: {
                  shopping: props.shopping,
                  tripName: props.tripName,
                  tripId: props.tripId,
                },
              }}
            >
              <p>View Shopping Details</p>
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
            {/* continue passing down the respective Shopping 
                from props to update Shopping page     */}
            <Link
              to={{
                pathname: "/updateShoppingList",
                state: {
                  tripId: localStorage.getItem("tripId"),
                  id: props.shopping.id,
                  item_name: props.shopping.item_name,
                  item_cost: props.shopping.item_cost,
                  item_buyer: props.shopping.item_buyer,
                  item_notes: props.shopping.item_notes,
                },
              }}
            >
              <p>Edit Shopping List</p>
            </Link>{" "}
          </div>

          <div>
            {/* onClick, delete Shopping by Shopping id  and 
            inside action creator, redirect or push to the 
            Shopping dashboard */}
            <button
              onClick={() => props.deleteShopping(props.shopping.id, history)}
            >
              <p>Delete Shopping List</p>
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

const mapDispatchToProps = { deleteShopping };

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);
