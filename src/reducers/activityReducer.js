import * as a from "../actions/types";

let initialState = {
  activities: [],
  activity: [],
  error: false,
  errorMessage: "",
  gettingActivities: false,
  gotActivities: false,
  gotActivity: false,
  addingActivity: false,
  addingActivityMessage: "",
  updatingActivity: false,
  updatingActivityMessage: "",
  deletingActivity: false,
  deletingActivityMessage: "",
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case a.ADDING_ACTIVITY:
      return {
        ...state,
        addingActivity: true,
        addingActivityMessage: action.payload,
      };
    case a.ADDED_ACTIVITY:
      return {
        ...state,
        addingActivity: false,
        addingActivityMessage: "",
      };
    case a.UPDATING_ACTIVITY:
      return {
        ...state,
        updatingActivity: true,
        updatingActivityMessage: action.payload,
      };
    case a.UPDATED_ACTIVITY:
      return {
        ...state,
        updatingActivity: false,
        updatingActivityMessage: "",
      };
    case a.DELETING_ACTIVITY:
      return {
        ...state,
        deletingActivity: true,
        deletingActivityMessage: action.payload,
      };
    case a.DELETED_ACTIVITY:
      return {
        ...state,
        deletingActivity: false,
        deletingActivityMessage: "",
      };
    case a.GET_SINGLE_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
        gotActivity: true,
      };
    case a.RESET_STORE:
      return {
        ...state,
        activities: [],
        activity: [],
      }
    default:
      return state;
  }
};

export default activityReducer;
