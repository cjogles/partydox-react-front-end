import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllParking = (tripId) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/parking/user/${id}/parkingTrip/${tripId}`)
    .then((res) => {
      dispatch({ type: t.GET_ALL_PARKING, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getParking = (parkingId) => (dispatch) => {
  let id = localStorage.getItem("id")
  AxiosWithAuth()
    .get(`/parking/user/${id}/parking/${parkingId}`)
    .then(res => {
      dispatch({ type: t.GET_SINGLE_PARKING, payload: res.data})
    })
    .catch(err => {
      console.log(err)
    })
}
export const addParking = (parking, history) => (dispatch) => {
  dispatch({ type: t.ADDING_PARKING, payload: "Adding a parking lot to your list..." });
  let id = localStorage.getItem("id");
  let tripId = localStorage.getItem("tripId");
  AxiosWithAuth()
    .post(`/parking/user/${id}/parkingTrip/${tripId}/parkingActivity/${parking.activity_id}`, parking)
    .then((res) => {
      dispatch({ type: t.ADDED_PARKING, payload: "Added parking lot" });
      history.push("/parkingDash")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteParking = (parkingId, history) => (dispatch) => {
  dispatch({ type: t.DELETING_PARKING, payload: "Deleting Your parking lot..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .delete(`/parking/user/${id}/parking/${parkingId}`)
    .then((res) => {
      dispatch({ type: t.DELETED_PARKING, payload: "Deleted parking lot" });
      history.push("/dashboard")
      history.push("/parkingDash")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateParking = (parkingId, parking, history) => (dispatch) => {
  dispatch({ type: t.UPDATING_PARKING, payload: "Updating Your parking lot..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .put(`/parking/user/${id}/parking/${parkingId}`, parking)
    .then((res) => {
      dispatch({ type: t.UPDATED_PARKING, payload: "Updated parking lot" });
      history.push("/parkingDash")
    })
    .catch((err) => {
      console.log(err);
    });
};