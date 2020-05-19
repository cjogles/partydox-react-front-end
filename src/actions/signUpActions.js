import axios from "axios";
import * as t from "./types";

export const login = (credentials, history) => (dispatch) => {
  dispatch({ type: t.LOGIN_START, payload: "Loading Your Partydox Dashboard..."})
  history.push("/dashboard");
  axios
    .post("https://partydox.herokuapp.com/friends/login", credentials)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("name", res.data.name);
      dispatch({ type: t.LOGIN_SUCCESS, payload: res.data });
      // console.log("login ran", res)
    })
    .catch((err) => {
      dispatch({ type: t.LOGIN_FAIL, payload: err})
      console.log("login error ran",err)
    });
};

export const register = (credentials, history) => (dispatch) => {
  dispatch({ type: t.LOGIN_START, payload: "Loading Your Partydox Dashboard..."})
  history.push("/dashboard");
  axios
    .post("https://partydox.herokuapp.com/friends/register", credentials)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("name", res.data.name);
      dispatch({ type: t.LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: t.LOGIN_FAIL, payload: err})
    });
};
