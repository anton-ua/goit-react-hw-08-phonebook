import { createAction } from "@reduxjs/toolkit";
import { Type } from "../actionTypes";

export const filterContact = createAction(Type.FILTER_CONTACT);

export const getContactsStart = createAction(Type.GET_CONTACTS_START);

export const getContactsSucess = createAction(Type.GET_CONTACTS_SUCCESS);

export const getContactsError = createAction(Type.GET_CONTACTS_ERROR);

export const postContactStart = createAction(Type.POST_CONTACT_START);

export const postContactSuccess = createAction(Type.POST_CONTACT_SUCCESS);

export const postContactError = createAction(Type.POST_CONTACT_ERROR);

export const deleteContactStart = createAction(Type.DELETE_CONTACT_START);

export const deleteContactSuccess = createAction(Type.DELETE_CONTACT_SUCESS);

export const deleteContactError = createAction(Type.DELETE_CONTACT_ERROR);
