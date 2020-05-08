import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllShoppingLists = (tripId) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/shopping/user/${id}/shoppingTrip/${tripId}`)
    .then((res) => {
      dispatch({ type: t.GET_ALL_SHOPPING_LISTS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const getShoppinglist = () => (dispatch) => {
//   let id = localStorage.getItem("id");
//   AxiosWithAuth()
//     .get(`/shopping/user/${id}/shoppingList`)
// }

export const addShoppingList = (tripId, shoppingList, history) => (dispatch) => {
  dispatch({ type: t.ADDING_SHOPPING_LIST, payload: "Adding a shopping list to your trip..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .post(`/shopping/user/${id}/shoppingTrip/${tripId}`, shoppingList)
    .then((res) => {
      dispatch({ type: t.ADDED_SHOPPING_LIST, payload: "Added a shopping list to your trip..." });
      history.goBack();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateShoppingList = (shoppingId, shoppingList, history) => (dispatch) => {
  dispatch({ type: t.UPDATING_SHOPPING_LIST, payload: "Updating a shopping list on your trip..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .put(`/shopping/user/${id}/shoppingList/${shoppingId}`, shoppingList)
    .then((res) => {
      dispatch({ type: t.UPDATED_SHOPPING_LIST, payload: "Updated a shopping list on your trip..." });
      history.goBack()
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteShoppingList = (shoppingId, history) => (dispatch) => {
  dispatch({ type: t.DELETING_SHOPPING_LIST, payload: "Deleting a shopping list from your trip..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .delete(`/shopping/user/${id}/shoppingList/${shoppingId}`)
    .then((res) => {
      dispatch({ type: t.DELETED_SHOPPING_LIST, payload: "Deleted a shopping list from your trip..." });
      history.goBack()
    })
    .catch((err) => {
      console.log(err);
    });
};
