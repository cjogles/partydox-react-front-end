import * as a from "../actions/types";

let initialState = {
  shoppingLists: [],
  error: false,
  errorMessage: "",
  gettingShoppingLists: false,
  gotShoppingLists: false,
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_SHOPPING_LISTS:
      return {
        ...state,
        shoppingLists: action.payload,
      };
    default:
      return state;
  }
};

export default shoppingReducer;