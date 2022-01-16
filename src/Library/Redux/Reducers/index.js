import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { generalReducers } from "./generalReducers";
import { languageReducers } from "./languageReducers";
import { userReducers } from "./userReducers";
import { messageReducers } from "./messageReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const reducers = combineReducers({
  general: generalReducers,
  language: languageReducers,
  user: userReducers,
  message: messageReducers,
});

export default persistReducer(persistConfig, reducers);
