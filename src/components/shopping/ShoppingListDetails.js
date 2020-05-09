import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFriend from "../friends/NavFriend";
import Footer from '../FooterSignUp';
import { useHistory } from "react-router-dom";
import { deleteShoppingList, getShoppingList} from "../../actions/shoppingActions";

function ShoppingListDetails(props) {

  let items = props.location.state;
  let tripName = localStorage.getItem("tripName");
  let history = useHistory();

  // useEffect(() => {
  //   props.getShoppingList(items.shoppingId);
  //   console.log(props.SL)
  // }, [props.gotSL]);

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
                state: { 
                  shoppingId: items.shoppingId,
                  name: items.name,
                  cost: items.cost,
                  buyers: items.buyer,
                  likes: items.likes,
                  notes: items.notes,
                },
              }}
            >
              <p>Edit Shopping List</p>
            </Link>{" "}
            <button onClick={() => props.deleteShoppingList(items.shoppingId, history)}>
              <p>Delete ShoppingList</p>
            </button>{" "}
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
  return {
    // SL: state.shoppingReducer.shoppingList,
    // updatedSL: state.shoppingReducer.updatingShoppingList,
    // updatedSLMessage: state.shoppingReducer.updatingShoppingListMessage,
    // deletetedSL: state.shoppingReducer.deletingShoppingList,
    // deletedSLMessage: state.shoppingReducer.deletingShoppingListMessage,
    // gotSL: state.shoppingReducer.gettingShoppingList,
    // gotSLMessage: state.shoppingReducer.gettingShoppingListMessage,
  };
};
const mapDispatchToProps = { deleteShoppingList, getShoppingList};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListDetails);
