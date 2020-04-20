import * as a from "../01_actions/loginActions";

const initialState = {
  user: {
    id: null,
    username: "",
    name: "",
    role: "",
    name: "",
    profile_pic: "",
    email: "",
    phone: ""
  },
  isLoggingIn: false,
  isLoggedIn: false,
  status: "",
  isError: false,
  error: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        status: action.payload
      };
    case a.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          username: action.payload.username,
          name: action.payload.name,
          profile_pic: action.payload.friend_profile_pic,
          email: action.payload.friend_email,
          phone: action.payload.friend_phone,
          status: `Welcome ${action.payload.name}! 🎉`
        },
        isLoggingIn: false,
        isLoggedIn: true,
      };
    case a.LOGIN_FAIL:
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

export default loginReducer;
