import * as a from "../01_actions/registerActions";

const initialState = {
  user: {
    id: null,
    username: "",
    name: ""
  },
  isLoggingIn: false,
  isLoggedIn: false,
  status: "",
  isError: false,
  error: ""
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.REGISTER_START:
      return {
        ...state,
        isLoggingIn: true,
        status: action.payload
      };
    case a.REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          username: action.payload.username,
          name: action.payload.friend_name,
          status: `Welcome ${action.payload.friend_name}!`
        },
        isLoggingIn: false,
        isLoggedIn: true,
      };
    case a.REGISTER_FAIL:
        return {
            ...state,
            isLoggedIn: false,
            isLoggingIn: false,
            isError: true,
            error: action.payload
        }
    default:
      return state;
  }
};

export default registerReducer;
