import React, { useEffect } from "react";
import Nav from "../shopping/NavShopping";
import FooterSignUp from "../FooterSignUp";
import { updateShopping } from "../../actions/shoppingActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getFriend } from '../../actions/friendActions';

function UpdateShoppingList(props) {
  let history = useHistory();
  let thisShopping = props.location.state;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      item_name: thisShopping.item_name,
      item_cost: thisShopping.item_cost,
      item_buyer: thisShopping.item_buyer,
      item_notes: thisShopping.item_notes,
    },
  });
  useEffect(() => {
    props.getFriend();
  })
  const onSubmit = (shoppingList) =>
    props.updateShopping(thisShopping.id, shoppingList, history);

  return (
    <>
      <Nav />
      <div className="loginWrapper">
        <div className="login">
          <div className="logintitle">
            <span className="spanimage" role="img" aria-label="partyface">
              🥳
            </span>
            Update Shopping List
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
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { updateShopping, getFriend};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateShoppingList);
