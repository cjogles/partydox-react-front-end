import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signUpReducer from '../reducers/signUpReducer';

export default combineReducers({
  form: formReducer,
  signUpReducer
});