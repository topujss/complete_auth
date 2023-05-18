import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';

//---- create root reducer ----
const rootReducer = combineReducers({
  auth: authReducer
});

//---- export root reducer ----
export default rootReducer;
