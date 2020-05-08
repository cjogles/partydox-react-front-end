import React, { useState } from "react";
import Nav from "../friends/NavFriend";
import FooterSignUp from "../FooterSignUp";
import { addShoppingList } from '../../actions/shoppingActions';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function AddShoppingList(props) {

  let history = useHistory();
  let prevShoppingList = props.history.location.state;

  const [shoppingList, setShoppingList] = useState({
    item_name: '',
    item_cost: '',
    item_buyer: '',
    item_upvote: 0,
    item_notes: '',
  });

  const onChange = (event) => {
    setShoppingList({ ...shoppingList, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.addShoppingList(localStorage.getItem("tripId"), shoppingList, history);
  };

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

          <form onSubmit={(event) => onSubmit(event)}>
            <label htmlFor="item_name">Item Names:</label>
            <textarea
              rows="4"
              cols="40"
              id="item_name"
              name="item_name"
              value={shoppingList.item_name}
              placeholder={prevShoppingList.name}
              onChange={(event) => onChange(event)}
            ></textarea>
            <label htmlFor="item_cost">Items Total Cost:</label>
            <input
              type="text"
              id="item_cost"
              name="item_cost"
              value={shoppingList.item_cost}
              placeholder={prevShoppingList.cost}
              onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="item_buyer">Buyers Names:</label>
            <input
               type="text"
               id="item_buyer"
               name="item_buyer"
               value={shoppingList.item_buyer}
               placeholder={prevShoppingList.buyers}
               onChange={(event) => onChange(event)}
            ></input>
            <label htmlFor="item_notes">Notes:</label>
            <input
              type="text"
              id="item_notes"
              name="item_notes"
              value={shoppingList.item_notes}
              placeholder={prevShoppingList.notes}
              onChange={(event) => onChange(event)}
            ></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <FooterSignUp />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = { addShoppingList };

export default connect(mapStateToProps, mapDispatchToProps)(AddShoppingList);
