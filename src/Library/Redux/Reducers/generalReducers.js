import { TYPES } from "../Actions/generalActions";

export const generalInitialState = {
  filter: {
    dateInit: "",
    dateEnd: "",
    typeEntry: 0,
    statusExpensive: "",
  },
  location: {
    country: [],
    office: [],
    region: [],
  },
  typeEntries: [],
  states: [],
  app: {
    title: "App",
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
