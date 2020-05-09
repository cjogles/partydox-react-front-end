import * as a from "../actions/types";
import { findAllByPlaceholderText } from "@testing-library/react";

let initialState = {
  shoppingLists: [],
  shoppingList: [],
  error: false,
  errorMessage: "",
  gettingShoppingLists: false,
  gettingShoppingListsMessage: "",
  gettingShoppingList: false,
  gettingShoppingListMessage: "",
  addingShoppingList: false,
  addingShoppingListMessage: "",
  updatingShoppingList: false,
  updatingShoppingListMessage: "",
  deletingShoppingList: false,
  deletingShoppingListMessage: "",
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GETTING_ALL_SHOPPING_LISTS:
      return {
        ...state,
        gettingShoppingLists: true,
        gettingShoppingListsMessage: action.payload,
      };
    case a.GOT_ALL_SHOPPING_LISTS:
      return {
        ...state,
        gettingShoppingLists: false,
        gettingShoppingListsMessage: "",
        shoppingLists: action.payload,
      }
    case a.GETTING_SHOPPING_LIST:
      return {
        ...state,
        gettingShoppingList: true,
        gettingShoppingListMessage: action.payload,
      };
    case a.GOT_SHOPPING_LIST:
      return {
        ...state,
        gettingShoppingList: false,
        gettingShoppingListMessage: "",
        shoppingList: action.payload,
      }
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
