import * as actionTypes from "./types";
import * as AuthService from "../Component/services/auth.service";

//register action

export const registerAction = (payload) => (dispatch) => {
  return AuthService.register(payload)
    .then((response) => {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        payload: { err: error.message || "Registration Failed" },
      });
      return Promise.reject(error);
    });
};

//login action

export const loginAction = (userCredential) => (dispatch) => {
  return AuthService.login(userCredential)
    .then((data) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: data,
      });

      return Promise.resolve(data);
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        payload: { err: error.message || "Login Failed" },
      });
      return Promise.reject(error);
    });
};

//logout action
export const logoutAction = () => (dispatch) => {
  const msg = AuthService.logout();
  dispatch({
    type: actionTypes.LOGOUT,
    payload: { msg },
  });
  return Promise.resolve(msg);
};
