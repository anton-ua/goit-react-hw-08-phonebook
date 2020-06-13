import { Type } from "../actionTypes";

export const authError = (state = { isError: false }, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_ERROR:
    case Type.SIGNUP_ERROR:
      return { isError: true, type: "danger", text: payload.message };

    case Type.CLEAR_AUTH_ERROR:
      return { isError: false };

    default:
      return state;
  }
};
