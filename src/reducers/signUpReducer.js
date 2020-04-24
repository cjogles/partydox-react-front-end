import * as a from "../actions/types";

let initialState = {
  friend: {
    id: 0,
    name: "",
    username: ""
  },
  loggedIn: false,
  loggedOut: true,
  errorMessage: "",
  error: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
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
        errorMessage: "",
        error: false,
      };
    default:
      return state;
  }
};

export default signUpReducer;
