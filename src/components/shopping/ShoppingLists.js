import React from "react";
import Shopping from "./Shopping";
import { connect } from "react-redux";
import NavFriend from "../friends/NavFriend";
import Footer from "../FooterSignUp";

function ShoppingLists(props) {
  return (
    <>
      <NavFriend />
      <div className="dash">
        <div className="dashContainer1">
          <h2 className="dashH">Welcome!</h2>
          <div className="tripList">
            <h2 className="tripListH"> Your Shopping Lists</h2>
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
