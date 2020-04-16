import { combineReducers } from 'redux';

import { tripReducer as trip } from './tripReducer';
// import { eventReducer as event } from './eventReducer';
// import { goingReducer as going } from './goingReducer';
// import { userReducer as user } from './userReducer';

export default combineReducers({
  trip,
//   event,
//   going
//   otherReducers
});