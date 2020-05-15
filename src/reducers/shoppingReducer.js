import * as a from "../actions/types";

let initialState = {
  shoppings: [],
  shopping: [],
  error: false,
  errorMessage: "",
  gettingShoppings: false,
  gotShoppings: false,
  gotShopping: false,
  addingShopping: false,
  addingShoppingMessage: "",
  updatingShopping: false,
  updatingShoppingMessage: "",
  deletingShopping: false,
  deletingShoppingMessage: "",
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_SHOPPING:
      return {
        ...state,
        shoppings: action.payload,
      };
    case a.ADDING_SHOPPING:
      return {
        ...state,
        addingShopping: true,
        addingShoppingMessage: action.payload,
      };
    case a.ADDED_SHOPPING:
      return {
        ...state,
        addingShopping: false,
        addingShoppingMessage: "",
      };
    case a.UPDATING_SHOPPING:
      return {
        ...state,
        updatingShopping: true,
        updatingShoppingMessage: action.payload,
      };
    case a.UPDATED_SHOPPING:
      return {
        ...state,
        updatingShopping: false,
        updatingShoppingMessage: "",
      };
    case a.DELETING_SHOPPING:
      return {
        ...state,
        deletingShopping: true,
        deletingShoppingMessage: action.payload,
      };
    case a.DELETED_SHOPPING:
      return {
        ...state,
        deletingShopping: false,
        deletingShoppingMessage: "",
      };
    case a.GET_SINGLE_SHOPPING:
      return {
        ...state,
        shopping: action.payload,
        gotShopping: true,
      };
    default:
      return state;
  }
};

export default shoppingReducer;
