import { TYPES } from "../Actions/userActions";

export const userInitialState = {
  info: {},
  session: {},
};

export function userReducers(state = userInitialState, action) {
  console.log(action.type);
  console.log(action.payload);

  console.log(state);

  switch (action.type) {
    case TYPES.SET_USER_LOGIN_INFO:
      return action.payload;

    case TYPES.USER_CLOSE_SESSION:
      return action.payload;

    default:
      return state;
  }
}
