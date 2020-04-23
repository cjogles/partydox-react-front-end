import * as a from "../01_actions/authActions";

const initialState = {
  user: {
    id: 0,
    name: "",
    username: "",
  },
  isSigningIn: false,
  isSignedIn: false,
  isError: false,
  error: "",
  status: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case a.LOGIN_START:
      return {
        ...state,
        isSigningIn: true,
        status: action.payload,
      };
    case a.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          name: action.payload.name,
          username: action.payload.username,
          status: `Welcome ${action.payload.name}! 🎉`,
        },
        isSigningin: false,
        isSignedIn: true,
      };
    case a.LOGIN_FAIL:
      return {
        ...state,
        isSignedIn: false,
        isSigningIn: false,
        isError: true,
        error: action.payload,
      };
      case a.REGISTER_START:
        return {
          ...state,
          isSigningIn: true,
          status: action.payload,
        };
      case a.REGISTER_SUCCESS:
        return {
          ...state,
          user: {
            ...state.user,
            id: action.payload.id,
            name: action.payload.name,
            username: action.payload.username,
            status: `Welcome ${action.payload.name}! 🎉`,
          },
          isSigningin: false,
          isSignedIn: true,
        };
      case a.REGISTER_FAIL:
        return {
          ...state,
          isSignedIn: false,
          isSigningIn: false,
          isError: true,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default auth;
