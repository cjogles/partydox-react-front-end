import * as a from "../01_actions/registerActions";

const initialState = {
  user: {
    id: null,
    name: "name",
    username: "username",
    profilePic: "profilePic",
    email: "email@email.com",
    phone: "1-800-200-2000",
    role: "user",
  },
  isLoggingIn: false,
  isLoggedIn: false,
  isError: false,
  error: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.REGISTER_START:
      return {
        ...state,
        isLoggingIn: true,
      };
    case a.REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: null,
          name: action.payload.friend_name,
          username: action.payload.username,
        },
        isLoggedIn: true,
      };
    case a.REGISTER_FAIL:
        return {
            ...state,
            isLoggedIn: false,
            isError: true,
            error: action.payload
        }
    default:
      return state;
  }
};

export default registerReducer;
