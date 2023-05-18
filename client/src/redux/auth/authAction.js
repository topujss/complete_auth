import axios from 'axios';
import { USER_LOGIN_FULLFILLED, USER_LOGOUT, USER_REG_FULLFILLED, USER_REG_REJECTED } from './authTypes';

/**
 * @Title user registration action
 */
export const userRegAction =
  ({ input, setInput }) =>
  async (dispatch) => {
    try {
      axios
        .post('http://localhost:5050/api/v1/auth/register', input)
        .then((res) => {
          setInput({
            name: '',
            email: '',
            password: '',
          });
          dispatch({ type: USER_REG_FULLFILLED, payload: res.data.message });
        })
        .catch((err) => {
          dispatch({ type: USER_REG_REJECTED, payload: err.response.data.message });
        });
    } catch (err) {
      dispatch({ type: USER_REG_REJECTED, payload: err.response.data.message });
    }
  };

/**
 * @Title user registration action
 */
export const userLoginAction =
  ({ input, setInput, navigate }) =>
  async (dispatch) => {
    try {
      axios
        .post('http://localhost:5050/api/v1/auth/login', input)
        .then((res) => {
          console.log(res.data);
          setInput({
            email: '',
            password: '',
          });
          dispatch({ type: USER_LOGIN_FULLFILLED, payload: res.data.user });
          navigate('/');
        })
        .catch((err) => {
          // dispatch({ type: USER_REG_REJECTED, payload: err.response.data.message });
        });
    } catch (err) {
      // dispatch({ type: USER_REG_REJECTED, payload: err.response.data.message });
    }
  };

/**
 * @Title user logout action
 */
export const userLogoutAction =
  ({ navigate }) =>
  async (dispatch) => {
    try {
      axios
        .post('http://localhost:5050/api/v1/auth/logout')
        .then((res) => {
          dispatch({ type: USER_LOGOUT, payload: res.data.message });
          navigate('/login');
        })
        .catch();
    } catch (error) {
      console.log(error.message);
    }
  };
