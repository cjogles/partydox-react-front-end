import { combineReducers } from 'redux';
import signUpReducer from '../reducers/signUpReducer';
import tripsReducer from '../reducers/tripsReducer';
import activityReducer from '../reducers/activityReducer';
import shoppingReducer from '../reducers/shoppingReducer';
import parkingReducer from '../reducers/parkingReducer';
import flightReducer from '../reducers/flightReducer';

export default combineReducers({
  signUpReducer,
  tripsReducer,
  activityReducer,
  shoppingReducer,
  parkingReducer,
  flightReducer,
});