import { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { routesApi } from "../../Helpers/Constantes";

import { getPrimerDiaMes, getUltimoDiaMes } from "../../Helpers/Funciones";
//Agrego los REDUX
import { TYPES } from "../../Library/Redux/Actions/generalActions";
import {
  generalInitialState,
  generalReducers,
} from "../../Library/Redux/Reducers/generalReducers";

export const HookFilter = () => {
  const dispatch = useDispatch();
  const idCountry = useSelector((store) => store.user.ubication.idCountry);
  const typeEntry = useSelector((store) => store.general.typeEntries);
  const states = useSelector((store) => store.general.states);

  useEffect(() => {
    findTypeEntries();
    findStates();

    const filter = {
      dateInit: getPrimerDiaMes(),
      dateEnd: getUltimoDiaMes(),
      typeEntry: 0,
      statusExpensive: "",
    };

    dispatch({
      type: TYPES.SET_GENERAL_INICIALICE_FILTER,
      payload: filter,
    });
  }, []);

  const handleSave = () => {
    alert("guardar");
  };

  const findTypeEntries = async () => {
    const requestAxios = {
      method: "get",
      url: routesApi.API + routesApi.BANK_COUNTRY + "EC",
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
      },
    };

    const response = await axios(requestAxios);
    if (response.status === 200) {
      console.log(response.data.data);
      dispatch({
        type: TYPES.SET_GENERAL_TYPEENTRIES,
        payload: response.data.data,
      });
    }
  };

  const findStates = async () => {
    console.log("se ejecuto el find State");
    const datosEnviado = {
      table: "expenses",
      idCountry: idCountry,
    };

    const requestAxios = {
      method: "post",
      url: routesApi.REACT_APP_API + routesApi.REACT_APP_STATE_TABLE_IDCOUNTRY,
      data: datosEnviado,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
      },
    };

    const response = await axios(requestAxios);
    if (response.status === 200) {
      console.log(response.data.data);
      dispatch({
        type: TYPES.SET_GENERAL_STATES,
        payload: response.data.data,
      });
    }
  };

  return {
    typeEntry,
    states,
    handleSave,
  };
};
