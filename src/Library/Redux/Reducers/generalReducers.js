import { TYPES } from "../Actions/generalActions";

export const generalInitialState = {
  filter: {
    dateStart: null,
    dateEnd: null,
    idCountry: null,
    idRegion: null,
    idCenter: null,
    idOffice: null,
    idRoute: null,
    idBank: null,
    idState: null,
  },
  location: {
    country: [],
    region: [],
    center: [],
    office: [],
    route: [],
  },
  bank: [],
  states: [],
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
    case TYPES.SET_GENERAL_LOCATION_CENTER:
      return {
        ...state,
        location: { ...state.location, center: action.payload },
      };

    case TYPES.SET_GENERAL_MONEY:
      return {
        ...state,
        money: action.payload.money,
      };

    case TYPES.SET_GENERAL_COUNTRY:
      return {
        ...state,
        location: { ...state.location, country: action.payload },
      };

    case TYPES.SET_GENERAL_REGION:
      return {
        ...state,
        location: { ...state.location, region: action.payload },
      };

    case TYPES.SET_GENERAL_OFFICE:
      return {
        ...state,
        location: { ...state.location, office: action.payload },
      };

    case TYPES.SET_GENERAL_ROUTE:
      return {
        ...state,
        location: { ...state.location, route: action.payload },
      };

    case TYPES.SET_GENERAL_BANK:
      return {
        ...state,
        bank: action.payload,
      };

    case TYPES.SET_GENERAL_STATES:
      return {
        ...state,
        states: action.payload,
      };

    case TYPES.SET_GENERAL_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    //XXXXXXXXXXXXX
    case TYPES.SET_GENERAL_TYPEENTRIES:
      return { ...state, typeEntries: action.payload };

    case TYPES.SET_GENERAL_STATES:
      return { ...state, states: action.payload };

    case TYPES.SET_GENERAL_INICIALICE_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}
