import Axios from "axios";
import {
  signupStart,
  signupSuccess,
  signupError,
  loginStart,
  loginSuccess,
  loginError,
  getUserSuccess,
  getUserStart,
  getUserError,
  logoutStart,
  logoutError,
  logoutSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserError,
} from "./sessionActions";
import { setAuthToken } from "../../Services/server";

export const signupFetch = (userToSignup) => (dispatch) => {
  dispatch(signupStart());

  Axios.post("/users/signup", userToSignup)
    .then(({ data }) => {
      setAuthToken(data.token);
      dispatch(signupSuccess(data));
    })
    .catch((error) => dispatch(signupError(error)));
};

export const loginFetch = (userToLogin) => (dispatch) => {
  dispatch(loginStart());

  Axios.post("/users/login", userToLogin)
    .then(({ data }) => {
      setAuthToken(data.token);
      dispatch(loginSuccess(data));
    })
    .catch((error) => dispatch(loginError(error)));
};

export const getUserFetch = () => (dispatch) => {
  dispatch(getUserStart());

  Axios.get("/users/current")
    .then(({ data }) => {
      dispatch(getUserSuccess(data));
    })
    .catch((error) => dispatch(getUserError(error)));
};

export const logoutFetch = () => (dispatch, getState) => {
  dispatch(logoutStart());

  Axios.post("/users/logout")
    .then(() => {
      dispatch(logoutSuccess());
    })
    .catch((error) => {
      dispatch(logoutError(error));
    });
};

export const deleteUserFetch = () => (dispatch) => {
  dispatch(deleteUserStart());

  Axios.delete("/users/current")
    .then(() => {
      dispatch(deleteUserSuccess());
    })
    .catch((error) => {
      dispatch(deleteUserError(error));
    });
};
