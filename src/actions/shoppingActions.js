import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllShopping = (tripId) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/shopping/user/${id}/shoppingTrip/${tripId}`)
    .then((res) => {
      dispatch({ type: t.GET_ALL_SHOPPING, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getShopping = (shoppingId) => (dispatch) => {
  let id = localStorage.getItem("id")
  AxiosWithAuth()
    .get(`/shopping/user/${id}/shopping/${shoppingId}`)
    .then(res => {
      dispatch({ type: t.GET_SINGLE_SHOPPING, payload: res.data})
    })
    .catch(err => {
      console.log(err)
    })
}
export const addShopping = (shopping, history) => (dispatch) => {
  dispatch({ type: t.ADDING_SHOPPING, payload: "Adding a Shopping List to your list..." });
  let id = localStorage.getItem("id");
  let tripId = localStorage.getItem("tripId");
  AxiosWithAuth()
    .post(`/shopping/user/${id}/shoppingTrip/${tripId}`, shopping)
    .then((res) => {
      dispatch({ type: t.ADDED_SHOPPING, payload: "Added Shopping list" });
      history.push("/shoppingDash")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteShopping = (shoppingId, history) => (dispatch) => {
  dispatch({ type: t.DELETING_SHOPPING, payload: "Deleting Your Shopping List..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .delete(`/shopping/user/${id}/shoppingList/${shoppingId}`)
    .then((res) => {
      dispatch({ type: t.DELETED_SHOPPING, payload: "Deleted Shopping list" });
      history.push("/dashboard")
      history.push("/shoppingDash")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateShopping = (shoppingId, Shopping, history) => (dispatch) => {
  dispatch({ type: t.UPDATING_SHOPPING, payload: "Updating Your Shopping List..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .put(`/shopping/user/${id}/shoppingList/${shoppingId}`, Shopping)
    .then((res) => {
      dispatch({ type: t.UPDATED_SHOPPING, payload: "Updated Shopping List" });
      history.push("/shoppingDash")
    })
    .catch((err) => {
      console.log(err);
    });
};