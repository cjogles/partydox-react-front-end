import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllShoppingLists = (tripId) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/shopping/user/${id}/shoppingTrip/${tripId}`)
    .then((res) => {
      console.log("shopping payload:", res.data)
    //   dispatch({ type: t.GET_ALL_SHOPPING_LISTS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};