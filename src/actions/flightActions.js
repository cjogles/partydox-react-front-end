import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllFlights = (tripId) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/flights/user/${id}/flightTrip/${tripId}`)
    .then((res) => {
      // console.log("flights axios payload:", res.data)
      dispatch({ type: t.GET_ALL_FLIGHTS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};