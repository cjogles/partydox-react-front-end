import * as a from "../actions/types";

let initialState = {
  flights: [],
  flight: [],
  error: false,
  errorMessage: "",
  gettingFlights: false,
  gotFlights: false,
  gotFlight: false,
  addingFlight: false,
  addingFlightMessage: "",
  updatingFlight: false,
  updatingFlightMessage: "",
  deletingFlight: false,
  deletingFlightMessage: "",
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
      };
    case a.ADDING_FLIGHT:
      return {
        ...state,
        addingFlight: true,
        addingFlightMessage: action.payload,
      };
    case a.ADDED_FLIGHT:
      return {
        ...state,
        addingFlight: false,
        addingFlightMessage: "",
      };
    case a.UPDATING_FLIGHT:
      return {
        ...state,
        updatingFlight: true,
        updatingFlightMessage: action.payload,
      };
    case a.UPDATED_FLIGHT:
      return {
        ...state,
        updatingFlight: false,
        updatingFlightMessage: "",
      };
    case a.DELETING_FLIGHT:
      return {
        ...state,
        deletingFlight: true,
        deletingFlightMessage: action.payload,
      };
    case a.DELETED_FLIGHT:
      return {
        ...state,
        deletingFlight: false,
        deletingFlightMessage: "",
      };
    case a.GET_SINGLE_FLIGHT:
      return {
        ...state,
        flight: action.payload,
        gotFlight: true,
      };
    case a.RESET_STORE:
      return {
        ...state,
        flights: [],
        flight: [],
      };
    default:
      return state;
  }
};

export default flightReducer;
