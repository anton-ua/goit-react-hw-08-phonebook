import { createAction } from "@reduxjs/toolkit";
import { Type } from "../actionTypes";

export const signupStart = createAction(Type.SIGNUP_START);

export const signupSuccess = createAction(Type.SIGNUP_SUCCESS);

export const signupError = createAction(Type.SIGNUP_ERROR);

export const loginStart = createAction(Type.LOGIN_START);

export const loginSuccess = createAction(Type.LOGIN_SUCCESS);

export const loginError = createAction(Type.LOGIN_ERROR);

export const getUserStart = createAction(Type.GET_USER_START);

export const getUserSuccess = createAction(Type.GET_USER_SUCCESS);

export const getUserError = createAction(Type.GET_USER_ERROR);

export const logoutStart = createAction(Type.LOGOUT_START);

export const logoutSuccess = createAction(Type.LOGOUT_SUCCESS);

export const logoutError = createAction(Type.LOGOUT_ERROR);

export const deleteUserStart = createAction(Type.DELETE_USER_START);

export const deleteUserSuccess = createAction(Type.DELETE_USER_SUCCESS);

export const deleteUserError = createAction(Type.DELETE_USER_ERROR);
