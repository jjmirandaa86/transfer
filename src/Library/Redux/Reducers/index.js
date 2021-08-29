import { combineReducers } from "redux";

import { generalReducers } from "./generalReducers";
import { languageReducers } from "./languageReducers";
import { userReducers } from "./userReducers";
import { messageReducers } from "./messageReducers";

const reducers = combineReducers({
  general: generalReducers,
  language: languageReducers,
  user: userReducers,
  message: messageReducers,
});

export default reducers;
