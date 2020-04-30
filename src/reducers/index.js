import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signUpReducer from '../reducers/signUpReducer';
import tripsReducer from '../reducers/tripsReducer';
import activityReducer from '../reducers/activityReducer';
import shoppingReducer from '../reducers/shoppingReducer';
import parkingReducer from '../reducers/parkingReducer';
import flightReducer from '../reducers/flightReducer';

export default combineReducers({
  form: formReducer,
  signUpReducer,
  tripsReducer,
  activityReducer,
  shoppingReducer,
  parkingReducer,
  flightReducer,
});