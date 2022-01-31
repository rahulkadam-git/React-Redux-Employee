import * as actionTypes from "./types";

const initialState = { isLoggedIn: false, user: null };

//reducer

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
