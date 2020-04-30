import * as a from "../actions/types";

let initialState = {
  flights: [],
  error: false,
  errorMessage: "",
  gettingFlights: false,
  gotFlights: false,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
      };
    default:
      return state;
  }
};

export default flightReducer;