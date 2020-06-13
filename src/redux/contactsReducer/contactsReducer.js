import { Type } from "../actionTypes";
import { createReducer } from "@reduxjs/toolkit";

export const contactsReducer = createReducer([], {
  [Type.GET_CONTACTS_SUCCESS]: (state, { payload }) => payload,
  [Type.POST_CONTACT_SUCCESS]: (state, { payload }) => [...state, payload],
  [Type.DELETE_CONTACT_SUCESS]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [Type.LOGOUT_SUCCESS]: () => "",
  [Type.DELETE_USER_SUCCESS]: () => "",
});

export const filterReducer = createReducer("", {
  [Type.FILTER_CONTACT]: (state, { payload }) => payload,
  [Type.LOGOUT_SUCCESS]: () => "",
  [Type.DELETE_USER_SUCCESS]: () => "",
});
