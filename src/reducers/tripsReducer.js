import * as a from "../actions/types";

let initialState = {
  trips: [],
  error: false,
  errorMessage: "",
  gettingTrips: false,
  gotTrips: false,
};

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_TRIPS:
      return {
        ...state,
        trips: action.payload,
      };
    default:
      return state;
  }
};

export default tripsReducer;
