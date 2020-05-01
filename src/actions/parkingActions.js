import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllParkingLots = (tripId) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/parking/user/${id}/parkingTrip/${tripId}`)
    .then((res) => {
      dispatch({ type: t.GET_ALL_PARKING_LOTS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
