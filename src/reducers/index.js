import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signUpReducer from '../reducers/signUpReducer';
import tripsReducer from '../reducers/tripsReducer';
export default combineReducers({
  form: formReducer,
  signUpReducer,
  tripsReducer,
});