import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = ( credentials, props ) => dispatch => {
    dispatch({ 
      type: LOGIN_START,
      payload: "Loading Your Partydox Dashboard..."
    });
    axios
      .post('https://partydox.herokuapp.com/friends/login', credentials)
        .then(res => {
          console.log(res)
          dispatch({ type: LOGIN_SUCCESS, payload: res.data })
          props.history.push('/dashboard')
          })
        .catch(err => {
          dispatch({ type: LOGIN_FAIL, payload: err })
          });
  };