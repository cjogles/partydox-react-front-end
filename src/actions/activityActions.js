import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getAllActivities = (tripId) => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/activity/user/${id}/activityTrip/${tripId}`)
    .then((res) => {
      dispatch({ type: t.GET_ALL_ACTIVITIES, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addActivity = (activity, tripId, history) => (dispatch) => {
  dispatch({ type: t.ADDING_ACTIVITY, payload: "Adding an Activity to your list..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .post(`/activity/user/${id}/activityTrip/${tripId}`, activity)
    .then((res) => {
      dispatch({ type: t.ADDED_ACTIVITY, payload: "Added Activity" });
      history.push("/activityDash")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteActivity = (activityId, history) => (dispatch) => {
  dispatch({ type: t.DELETING_ACTIVITY, payload: "Deleting Your Activity..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .delete(`/activity/user/${id}/activity/${activityId}`)
    .then((res) => {
      dispatch({ type: t.DELETED_ACTIVITY, payload: "Deleted activity" });
      history.push("/activityDash")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateActivity = (activityId, updatedActivityBody, history) => (dispatch) => {
  dispatch({ type: t.UPDATING_ACTIVITY, payload: "Updating Your activity..." });
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .put(`/activity/user/${id}/activity/${activityId}`, updatedActivityBody)
    .then((res) => {
      dispatch({ type: t.UPDATED_ACTIVITY, payload: "Updated activity" });
      history.push("/activityDash")
    })
    .catch((err) => {
      console.log(err);
    });
};