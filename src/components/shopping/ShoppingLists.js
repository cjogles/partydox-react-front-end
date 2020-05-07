import React from "react";
import Shopping from "./Shopping";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from "../FooterSignUp";
import { Link } from 'react-router-dom';

function ShoppingLists(props) {
  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Welcome!</h2>
          <div className="tripList">
            <div className="addtrip1">
              <h2 className="tripListH">{localStorage.getItem("tripName")} shopping lists below: </h2>
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
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLists);
