import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getTrips = () => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/trips/user/${id}`)
    .then((res) => {
      console.log("axios payload:", res.data)
      dispatch({ type: t.GET_ALL_TRIPS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};