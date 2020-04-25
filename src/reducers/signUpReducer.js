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
          errorMessage: "Failed to Login! Try again?",
          error: true
        }
    default:
      return state;
  }
};

export default signUpReducer;
