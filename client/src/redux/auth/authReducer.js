import initalState from './authInit';
import { USER_LOGIN_FULLFILLED, USER_LOGOUT, USER_REG_FULLFILLED, USER_REG_REJECTED } from './authTypes';

//---- create auth reducer ----
const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case USER_REG_FULLFILLED:
      return {
        ...state,
        message: payload,
      };
    case USER_REG_REJECTED:
      return {
        ...state,
        message: payload,
      };
    case USER_LOGIN_FULLFILLED:
      return {
        ...state,
        loginState: true,
        user: payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loginState: false,
        user: null,
        message: payload,
      };
    default:
      return state;
  }
};

//---- export auth reducer ----
export default authReducer;
