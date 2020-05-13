import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllTrips = () => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/trips/user/${id}`)
    .then((res) => {
      dispatch({ type: t.GET_ALL_TRIPS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTrip = (tripId) => dispatch => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/trips/user/${id}/trip/${tripId}`)
    .then(res => {
      console.log("one trip", res.data)
      // dispatch({ type: t.getTrip, payload: res.data})
    })
    .catch(err => {
      console.log(err)
    })
}

export const addTrip = (trip, history) => (dispatch) => {
  dispatch({ type: t.ADDING_TRIP, payload: "Adding a trip to your list..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .post(`/trips/user/${id}`, trip)
    .then((res) => {
      dispatch({ type: t.ADDED_TRIP, payload: "Added Trip" });
      history.push("/dashboard")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteTrip = (tripId, userId, history) => (dispatch) => {
  dispatch({ type: t.DELETING_TRIP, payload: "Deleting Your Trip..." });
  AxiosWithAuth()
    .delete(`/trips/user/${userId}/trip/${tripId}`)
    .then((res) => {
      dispatch({ type: t.DELETED_TRIP, payload: "Deleted Trip" });
      history.push("/dashboard")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateTrip = (tripId, userId, updatedTripBody, history) => (dispatch) => {
  dispatch({ type: t.UPDATING_TRIP, payload: "Updating Your Trip..." });
  AxiosWithAuth()
    .put(`/trips/user/${userId}/trip/${tripId}`, updatedTripBody)
    .then((res) => {
      dispatch({ type: t.UPDATED_TRIP, payload: "Updated Trip" });
      history.push("/dashboard")
    })
    .catch((err) => {
      console.log(err);
    });
};