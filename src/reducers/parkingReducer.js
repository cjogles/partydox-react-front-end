import * as a from "../actions/types";

let initialState = {
  parkings: [],
  parking: [],
  error: false,
  errorMessage: "",
  gettingParkings: false,
  gotParkings: false,
  gotParking: false,
  addingParking: false,
  addingParkingMessage: "",
  updatingParking: false,
  updatingParkingMessage: "",
  deletingParking: false,
  deletingParkingMessage: "",
};

const parkingReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_PARKING:
      return {
        ...state,
        parkings: action.payload,
      };
    case a.ADDING_PARKING:
      return {
        ...state,
        addingParking: true,
        addingParkingMessage: action.payload,
      };
    case a.ADDED_PARKING:
      return {
        ...state,
        addingParking: false,
        addingParkingMessage: "",
      };
    case a.UPDATING_PARKING:
      return {
        ...state,
        updatingParking: true,
        updatingParkingMessage: action.payload,
      };
    case a.UPDATED_PARKING:
      return {
        ...state,
        updatingParking: false,
        updatingParkingMessage: "",
      };
    case a.DELETING_PARKING:
      return {
        ...state,
        deletingParking: true,
        deletingParkingMessage: action.payload,
      };
    case a.DELETED_PARKING:
      return {
        ...state,
        deletingParking: false,
        deletingParkingMessage: "",
      };
    case a.GET_SINGLE_PARKING:
      return {
        ...state,
        parking: action.payload,
        gotParking: true,
      };
    case a.RESET_STORE:
      return {
        ...state,
        parkings: [],
        parking: [],
      };
    default:
      return state;
  }
};

export default parkingReducer;
