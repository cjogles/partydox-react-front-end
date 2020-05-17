import * as a from "../actions/types";

let initialState = {
  friend: {
    id: 0,
    name: "",
    username: ""
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
          name: localStorage.getItem("name"),
          username: localStorage.getItem("username"),
        },
        loggedIn: true,
      }
    case a.LOGIN_START:
      return {
        ...state,
        loggedIn: false,
        loggedOut: true,
        loggingIn: true,
        loggingInMessage: action.payload,
        errorMessage: "",
        error: false
      }
    case a.LOGIN_SUCCESS:
      return {
        ...state,
        friend: {
          ...state.friend,
          id: action.payload.id,
          name: action.payload.name,
          username: action.payload.username,
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
          errorMessage: "Try Logging In/Registering Again. Invalid Credentials for login, or username already in use for register.",
          error: true
        }
    default:
      return state;
  }
};

export default signUpReducer;
