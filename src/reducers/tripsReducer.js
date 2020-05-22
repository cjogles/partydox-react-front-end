import * as a from "../actions/types";

let initialState = {
  trips: [],
  trip: [],
  error: false,
  errorMessage: "",
  gettingTrips: false,
  gotTrips: false,
  gotTrip: false,
  addingTrip: false,
  addingTripMessage: "",
  updatingTrip: false,
  updatingTripMessage: "",
  deletingTrip: false,
  deletingTripMessage: "",
  addingSingleTrip: false,
};

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_TRIPS:
      return {
        ...state,
        trips: action.payload,
        gotTrips: true,
      };
    case a.ADDING_TRIP:
      return {
        ...state,
        addingTrip: true,
        addingTripMessage: action.payload,
      };
    case a.ADDED_TRIP:
      return {
        ...state,
        addingTrip: false,
        addingTripMessage: "",
      };
    case a.UPDATING_TRIP:
      return {
        ...state,
        updatingTrip: true,
        updatingTripMessage: action.payload,
      };
    case a.UPDATED_TRIP:
      return {
        ...state,
        updatingTrip: false,
        updatingTripMessage: "",
      };
    case a.DELETING_TRIP:
      return {
        ...state,
        deletingTrip: true,
        deletingTripMessage: action.payload,
      };
    case a.DELETED_TRIP:
      return {
        ...state,
        deletingTrip: false,
        deletingTripMessage: "",
      };
    case a.GET_SINGLE_TRIP:
      return {
        ...state,
        trip: action.payload,
        gotTrip: true,
      };
    case a.RESET_STORE:
      return {
        ...state,
        trips: [],
        trip: [],
      };
    default:
      return state;
  }
};

export default tripsReducer;
