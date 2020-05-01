import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllActivities = (tripId) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/activity/user/${id}/activityTrip/${tripId}`)
    .then((res) => {
      console.log("ACTIVITIES payload:", res.data)
      console.log("userID, tripid", id, tripId)
      dispatch({ type: t.GET_ALL_ACTIVITIES, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};