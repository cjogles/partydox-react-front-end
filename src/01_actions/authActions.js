import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const login = (credentials, props) => (dispatch) => {
  console.log(dispatch);
  dispatch({
    type: LOGIN_START,
    payload: "Loading Your Partydox Dashboard...",
  });
  axios
    .post("https://partydox.herokuapp.com/friends/login", credentials)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      props.history.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const register = (credentials, props) => (dispatch) => {
  dispatch({
    type: REGISTER_START,
    payload: "Loading Your Partydox Dashboard...",
  });
  axios
    .post("https://partydox.herokuapp.com/friends/register", credentials)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      props.history.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTER_FAIL, payload: err });
    });
};
