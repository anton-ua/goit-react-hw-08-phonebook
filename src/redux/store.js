import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  contactsReducer,
  filterReducer,
} from "./contactsReducer/contactsReducer";
import {
  tokenReducer,
  userReducer,
  authentificated,
} from "./sessionReducer/sessionReducer";
import loader from "./loaderReducer/loaderReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authError } from "./errorReducer/errorReducer";

const persistConfig = {
  key: "session",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  token: tokenReducer,
  user: userReducer,
  authentificated,
  authError,
  loader,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = applyMiddleware(thunk);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(middlewares)
);

export const persistor = persistStore(store);
