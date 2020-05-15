import React from "react";
import Nav from "../shopping/NavShopping";
import FooterSignUp from "../FooterSignUp";
import { useForm } from "react-hook-form";
import { addShopping } from "../../actions/shoppingActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function AddShoppingList(props) {
  // utilities for adding parking lot form
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (shoppingList) => props.addShopping(shoppingList, history);

  return (
    <>
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span role="img" aria-label="partyface">
              🥳
            </span>
            Add Shopping List
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="item_name">Shopping List Items:</label>
            <textarea
              rows="4"
              cols="40"
              name="item_name"
              autoFocus={true}
              ref={register({ required: true })}
            />
            <label htmlFor="item_cost">Items Total Cost:</label>
            <input name="item_cost" ref={register} />
            <label htmlFor="item_buyer">Who bought these items?</label>
            <input name="item_buyer" ref={register} />
            <label htmlFor="item_notes">Shopping Notes:</label>
            <textarea rows="4" cols="40" name="item_notes" ref={register} />
            {/* display the following errors for respective inputs */}
            {errors.item_name && (
              <span>Shopping items are required</span>
            )}
            <button>Submit</button>
          </form>
        </div>
      </div>
      <FooterSignUp />
    </>
  );
}

// add parking lot State if needed connects here
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { addShopping };

export default connect(mapStateToProps, mapDispatchToProps)(AddShoppingList);
