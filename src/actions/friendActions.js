import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";
import axios from "axios";

export const getFriend = () => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/friends/user/${id}`)
    .then((res) => {
      dispatch({ type: t.GET_FRIEND, payload: res.data[0] });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateProfile = (updatedProfile) => (dispatch) => {
  let id = localStorage.getItem("id");
  console.log("request body for updating profile:", updatedProfile)
  AxiosWithAuth()
    .put(`/friends/user/${id}`, updatedProfile)
    .then((res) => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("name", res.data.friend_name);
      dispatch({ type: t.UPDATE_FRIEND, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const resetStore = (history) => (dispatch) => {
  localStorage.clear();
  dispatch({ type: t.RESET_STORE, payload:"store reset"})
  history.push("/")
}
