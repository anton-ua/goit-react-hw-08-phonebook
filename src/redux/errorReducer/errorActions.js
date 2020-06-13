const { createAction } = require("@reduxjs/toolkit");
const { Type } = require("../actionTypes");

export const clearAuthError = createAction(Type.CLEAR_AUTH_ERROR);
