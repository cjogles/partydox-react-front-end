import React, { useEffect } from "react";
import Shopping from "./Shopping";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from "../FooterSignUp";
import { Link } from "react-router-dom";
import { getAllShoppingLists } from "../../actions/shoppingActions";

function ShoppingLists(props) {


  useEffect(() => {
    props.getAllShoppingLists(localStorage.getItem("tripId"));
    console.log("useEffect ran in shoppingLists component")
  }, [props.gettingAllSL]);

  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Welcome!</h2>
          <div className="tripList">
            <div className="addtrip1">
              <h2 className="tripListH">
                {localStorage.getItem("tripName")} shopping lists below:{" "}
              </h2>
              <div className="addtrip">
                <Link
                  to={{
                    pathname: "/addShoppingList",
                    state: { userId: localStorage.getItem("id") },
                  }}
                >
                  <p>Add a Shopping List</p>
                </Link>
              </div>
            </div>
            {props.shoppingLists.map((shopping) => {
              return <Shopping key={shopping.id} shopping={shopping} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    shoppingLists: state.shoppingReducer.shoppingLists,
    gettingAllSL: state.shoppingReducer.gettingShoppingLists,
  };
};

const mapDispatchToProps = { getAllShoppingLists };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLists);
