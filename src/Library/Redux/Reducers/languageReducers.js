import { TYPES } from "../Actions/languageActions";

export const languageInitialState = [];

export function languageReducers(state = languageInitialState, action) {
  switch (action.type) {
    case TYPES.INICIALIZA_LENGUAGE:
      return action.payload;

    default:
      return state;
  }
}
