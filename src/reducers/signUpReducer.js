import * as a from "../actions/types";
import { act } from "react-dom/test-utils";

let initialState = {
  friend: {
    id: 0,
    friend_name: "",
    username: "",
    friend_profile_pic: "",
    friend_email: "",
    friend_phone: "",
  },
  loggedIn: false,
  loggedOut: true,
  loggingIn: false,
  loggingInMessage: "",
  errorMessage: "",
  error: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_FRIEND:
      return {
        ...state,
        friend: {
          ...state.friend,
          id: localStorage.getItem("id"),
          friend_name: action.payload.friend_name,
          username: action.payload.username,
          friend_profile_pic: action.payload.friend_profile_pic,
          friend_email: action.payload.friend_email,
          friend_phone: action.payload.friend_phone,
        },
        loggedIn: true,
      };
    case a.UPDATE_FRIEND:
      return {
        ...state,
        friend: {
          ...state.friend,
          id: localStorage.getItem("id"),
          friend_name: action.payload.friend_name,
          username: action.payload.username,
          friend_profile_pic: action.payload.friend_profile_pic,
          friend_email: action.payload.friend_email,
          friend_phone: action.payload.friend_phone,
        },
        loggedIn: true,
      };
    case a.LOGIN_START:
      return {
        ...state,
        loggedIn: false,
        loggedOut: true,
        loggingIn: true,
        loggingInMessage: action.payload,
        errorMessage: "",
        error: false,
      };
    case a.LOGIN_SUCCESS:
      return {
        ...state,
        friend: {
          ...state.friend,
          id: action.payload.id,
          friend_name: action.payload.friend_name,
          username: action.payload.username,
          friend_profile_pic: action.payload.friend_profile_pic,
          friend_email: action.payload.friend_email,
          friend_phone: action.payload.friend_phone,
        },
        loggedIn: true,
        loggedOut: false,
        loggingIn: false,
        errorMessage: "",
        error: false,
      };
    case a.LOGIN_FAIL:
      return {
        ...state,
        loggedIn: false,
        loggedOut: true,
        loggingIn: false,
        errorMessage:
          "Try Logging In/Registering Again. Invalid Credentials for login, or username already in use for register.",
        error: true,
      };
    case a.RESET_STORE:
      return {
        ...state,
        friend: {},
      };
    default:
      return state;
  }
};

export default signUpReducer;
