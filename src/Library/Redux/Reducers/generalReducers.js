import { TYPES } from "../Actions/generalActions";

export const generalInitialState = {
  filter: {
    dateInit: "",
    dateEnd: "",
    bank: 0,
    stateTransfer: "",
  },
  location: {
    country: [],
    region: [],
    centre: [],
    office: [],
    route: [],
  },
  bank: [],
  statesTransfer: [],
  app: {
    title: "App Tesalia Transfers",
    ico: "media/ico/",
    img: "media/img/",
    traslations: "json/translations",
    style: {
      cards: {
        color: "dark",
        letters: "dark",
      },
      badge: {
        color: "Light",
      },
      button: {
        color: "primary",
      },
      alert: {
        colorSuccess: "primary",
        colorError: "danger",
      },
    },
  },
  money: {},
};

export function generalReducers(state = generalInitialState, action) {
  switch (action.type) {
    case TYPES.SET_GENERAL_LOCATION_CENTRE:
      return {
        ...state,
        location: { ...state.location, centre: action.payload.centre },
      };

    case TYPES.SET_GENERAL_MONEY:
      return { ...state, money: action.payload };

    case TYPES.SET_GENERAL_TYPEENTRIES:
      return { ...state, typeEntries: action.payload };

    case TYPES.SET_GENERAL_STATES:
      return { ...state, states: action.payload };

    case TYPES.SET_GENERAL_INICIALICE_FILTER:
      return { ...state, filter: action.payload };

    case TYPES.SET_GENERAL_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}
