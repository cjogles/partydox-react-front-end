import axios from "axios";
import * as t from "./types";

export const login = (credentials, props) => (dispatch) => {
  axios
    .post("https://partydox.herokuapp.com/friends/login", credentials)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("name", res.data.name);
      dispatch({ type: t.LOGIN_SUCCESS, payload: res.data });
      props.history.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const register = (credentials, props) => (dispatch) => {
  axios
    .post("https://partydox.herokuapp.com/friends/register", credentials)
    .then((res) => {
      console.log(res)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("name", res.data.name);
      dispatch({ type: t.LOGIN_SUCCESS, payload: res.data });
    //   props.history.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
};
