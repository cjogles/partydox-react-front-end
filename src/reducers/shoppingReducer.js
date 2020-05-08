import * as a from "../actions/types";

let initialState = {
  shoppingLists: [],
  error: false,
  errorMessage: "",
  gettingShoppingLists: false,
  gotShoppingLists: false,
  addingShoppingList: false,
  addingShoppingListMessage: "",
  updatingShoppingList: false,
  updatingShoppingListMessage: "",
  deletingShoppingList: false,
  deletingShoppingListMessage: "",
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_SHOPPING_LISTS:
      return {
        ...state,
        shoppingLists: action.payload,
      };
    case a.ADDING_SHOPPING_LIST:
      return {
        ...state,
        addingShoppingList: true,
        addingShoppingListMessage: action.payload,
      };
    case a.ADDED_SHOPPING_LIST:
      return {
        ...state,
        addingShoppingList: false,
        addingShoppingListMessage: "",
      };
    case a.UPDATING_SHOPPING_LIST:
      return {
        ...state,
        updatingShoppingList: true,
        updatingShoppingListMessage: action.payload,
      };
    case a.UPDATED_SHOPPING_LIST:
      return {
        ...state,
        updatingShoppingList: false,
        updatingShoppingListMessage: "",
      };
    case a.DELETING_SHOPPING_LIST:
      return {
        ...state,
        deletingShoppingList: true,
        deletingShoppingListMessage: action.payload,
      };
    case a.DELETED_SHOPPING_LIST:
      return {
        ...state,
        deletingShoppingList: false,
        deletingShoppingListMessage: "",
      };
    default:
      return state;
  }
};

export default shoppingReducer;
