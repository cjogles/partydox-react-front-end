import axios from 'axios';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = credentials => dispatch => {
    dispatch({ 
      type: REGISTER_START,
      payload: "Loading Your Partydox Dashboard..."
    });
    axios
      .post('https://partydox.herokuapp.com/friends/register', credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token)
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        })
      .catch(err => {
        dispatch({ type: REGISTER_FAIL, payload: err })
        });
  };