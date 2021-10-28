import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { routesApi } from "../../Helpers/Constantes";
//Agrego los REDUX
import { TYPES } from "../../Library/Redux/Actions/languageActions";
import {
  languageInitialState,
  languageReducers,
} from "../../Library/Redux/Reducers/languageReducers";

//Traduccion
import { useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const HookLanguage = () => {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();
  const languages = useSelector((store) => store.language);

  const [selectedLenguage, setSelectedLenguage] = useState("es");

  //Load state inicial
  useEffect(() => {
    loadLanguage();
  }, []);

  //Cuando Cambio el idioma
  const handleLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setSelectedLenguage(event.target.value);
  };

  // //Para cargar desde la API
  const loadLanguage = async () => {
    const requestAxios = {
      method: "get",
      url: routesApi.API + routesApi.LANGUAGE_ALL,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
      },
    };

    const response = await axios(requestAxios);
    if (response.status === 200) {
      dispatch({
        type: TYPES.INICIALIZA_LENGUAGE,
        payload: response.data.data,
      });
    }
  };

  return {
    languages,
    selectedLenguage,
    handleLanguage,
  };
};
