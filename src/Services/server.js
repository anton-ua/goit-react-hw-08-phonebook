import Axios from "axios";

export const setBaseURL = () =>
  (Axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com");

export const setAuthToken = (token) => {
  Axios.defaults.headers.common["Authorization"] = `${token}`;
};

export const clearAuthToken = () => {
  Axios.defaults.headers.common["Authorization"] = null;
};
