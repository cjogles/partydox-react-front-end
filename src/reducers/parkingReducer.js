import * as a from "../actions/types";

let initialState = {
  parkingLots: [],
  error: false,
  errorMessage: "",
  gettingParkingLots: false,
  gotParkingLots: false,
};

const parkingReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_PARKING_LOTS:
      return {
        ...state,
        parkingLots: action.payload,
      };
    default:
      return state;
  }
};

export default parkingReducer;