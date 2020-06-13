import { Type } from "../actionTypes";
import { createReducer } from "@reduxjs/toolkit";

export const tokenReducer = createReducer("", {
  [Type.SIGNUP_SUCCESS]: (state, { payload }) => payload.token,
  [Type.LOGIN_SUCCESS]: (state, { payload }) => payload.token,
  [Type.LOGOUT_SUCCESS]: () => "",
  [Type.DELETE_USER_SUCCESS]: () => "",
});

export const userReducer = createReducer("", {
  [Type.SIGNUP_SUCCESS]: (state, { payload }) => payload.user,
  [Type.LOGIN_SUCCESS]: (state, { payload }) => payload.user,
  [Type.GET_USER_SUCCESS]: (state, { payload }) => payload,
  [Type.LOGOUT_SUCCESS]: () => "",
  [Type.DELETE_USER_SUCCESS]: () => "",
});

export const authentificated = (state = false, { type }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
    case Type.SIGNUP_SUCCESS:
    case Type.GET_USER_SUCCESS:
      return true;

    case Type.LOGOUT_SUCCESS:
    case Type.DELETE_USER_SUCCESS:
      return false;

    default:
      return state;
  }
};
