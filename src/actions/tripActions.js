import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllTrips = () => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/trips/user/${id}`)
    .then((res) => {
      // console.log("axios payload:", res.data)
      dispatch({ type: t.GET_ALL_TRIPS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTrip = (trip, history) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .post(`/trips/user/${id}`)
    .then((res) => {
      console.log("trip to add:", res.data)
      // dispatch({ type: t.CREATE_TRIP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addTrip = (trip, history) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .post(`/trips/user/${id}`)
    .then((res) => {
      console.log("trip to add:", res.data)
      // dispatch({ type: t.CREATE_TRIP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};