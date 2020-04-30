import * as a from "../actions/types";

let initialState = {
  activities: [],
  error: false,
  errorMessage: "",
  gettingActivities: false,
  gotActivities: false,
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
};

export default activityReducer;