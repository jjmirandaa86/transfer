import { createStore } from "redux";
import { persistStore } from "redux-persist";
import reducers from "./Reducers/index";

export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default { store, persistor };
