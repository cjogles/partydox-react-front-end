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
          <h2 className="dashH">Your ShoppingLists</h2>
          {props.shoppingLists.map((shopping) => {
            return <Shopping key={shopping.id} shopping={shopping} />;
          })}
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
