import * as a from "../actions/types";

let initialState = {
  trip: {
    id: 0,
    name: "",
    location: "",
    lift_off_location: "",
    car: "",
    start_date: "",
    end_date: "",
    upvote: 0,
    notes: "",
  },
};

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_ALL_TRIPS:
        return {
            ...state,
            trip: {
                ...state.trip,
                id: action.payload.id,
                name: action.payload.name,
                location: action.payload.location,
                lift_off_location: action.payload.lift_off_location,
                car: action.payload.car,
                start_date: action.payload.start_date,
                end_date: action.payload.end_date,
                upvote: action.payload.upvote,
                notes: action.payload.notes,
            }
        }
    default:
      return state;
  }
};

export default tripsReducer;
