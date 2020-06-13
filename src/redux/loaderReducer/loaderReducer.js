import { Type } from "../actionTypes";
import { combineReducers } from "redux";

const loaderApp = (state = false, { type }) => {
  switch (type) {
    case Type.LOGOUT_START:
    case Type.GET_USER_START:
    case Type.DELETE_USER_START:
      return true;

    case Type.LOGOUT_SUCCESS:
    case Type.LOGOUT_ERROR:
    case Type.GET_USER_SUCCESS:
    case Type.GET_USER_ERROR:
    case Type.DELETE_USER_SUCCESS:
    case Type.DELETE_USER_ERROR:
      return false;

    default:
      return state;
  }
};

const loaderButton = (state = false, { type }) => {
  switch (type) {
    case Type.LOGIN_START:
    case Type.SIGNUP_START:
    case Type.POST_CONTACT_START:
      return true;

    case Type.LOGIN_SUCCESS:
    case Type.LOGIN_ERROR:
    case Type.SIGNUP_SUCCESS:
    case Type.SIGNUP_ERROR:
    case Type.POST_CONTACT_SUCCESS:
    case Type.POST_CONTACT_ERROR:
      return false;

    default:
      return state;
  }
};

const loaderContacts = (state = false, { type }) => {
  switch (type) {
    case Type.GET_CONTACTS_START:
      return true;

    case Type.GET_CONTACTS_SUCCESS:
    case Type.GET_CONTACTS_ERROR:
      return false;

    default:
      return state;
  }
};

const loader = combineReducers({
  loaderApp,
  loaderButton,
  loaderContacts,
});

export default loader;
