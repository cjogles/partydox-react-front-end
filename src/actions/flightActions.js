import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllFlights = (tripId) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/flights/user/${id}/flightTrip/${tripId}`)
    .then((res) => {
      dispatch({ type: t.GET_ALL_FLIGHTS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFlight = (flightId) => (dispatch) => {
  let id = localStorage.getItem("id")
  AxiosWithAuth()
    .get(`/flights/user/${id}/flight/${flightId}`)
    .then(res => {
      dispatch({ type: t.GET_SINGLE_FLIGHT, payload: res.data})
    })
    .catch(err => {
      console.log(err)
    })
}
export const addFlight = (flight, history) => (dispatch) => {
  dispatch({ type: t.ADDING_FLIGHT, payload: "Adding an flight to your list..." });
  let id = localStorage.getItem("id");
  let tripId = localStorage.getItem("tripId");
  AxiosWithAuth()
    .post(`/flights/user/${id}/flightTrip/${tripId}`, flight)
    .then((res) => {
      dispatch({ type: t.ADDED_FLIGHT, payload: "Added flight" });
      history.push("/flightDash")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteFlight = (flightId, history) => (dispatch) => {
  dispatch({ type: t.DELETING_FLIGHT, payload: "Deleting Your flight..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .delete(`/flights/user/${id}/flight/${flightId}`)
    .then((res) => {
      dispatch({ type: t.DELETED_FLIGHT, payload: "Deleted flight" });
      history.push("/dashboard")
      history.push("/flightDash")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateFlight = (flightId, flight, history) => (dispatch) => {
  dispatch({ type: t.UPDATING_FLIGHT, payload: "Updating Your flight..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .put(`/flights/user/${id}/flight/${flightId}`, flight)
    .then((res) => {
      dispatch({ type: t.UPDATED_FLIGHT, payload: "Updated flight" });
      history.push("/flightDash")
    })
    .catch((err) => {
      console.log(err);
    });
};