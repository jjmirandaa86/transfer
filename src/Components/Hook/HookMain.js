import axios from "axios";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHoraActual, getFechaActual } from "../../Helpers/Funciones";
import { routesApi } from "../../Helpers/Constantes";
import { TYPES as TYPES_GENERAL } from "../../Library/Redux/Actions/generalActions";
import { TYPES as TYPES_MESSAGE } from "../../Library/Redux/Actions/messageActions";

export const HookMain = () => {
  const dispatch = useDispatch();
  const sessionStore = useSelector((store) => store.user.session);
  const infoStore = useSelector((store) => store.user.info);

  useEffect(() => {
    var arrayUserCenterDataTmp = {};
    var arrayCountryDataTmp = [];
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // User Center
    const requestAxios = {
      method: "get",
      url: routesApi.API + routesApi.USERCENTER_FIND_IDUSER + infoStore.idUser,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${sessionStore.api_token}`,
      },
    };

    axios(requestAxios)
      .then(function (response) {
        //devuelve Array de centros del usuario
        const data = response.data.data;
        const arrayUserCenterData = [];
        data.map(function (el) {
          arrayUserCenterData.push(el.idCenter);
        });
        arrayUserCenterDataTmp = arrayUserCenterData;
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // Center
        const requestAxios = {
          method: "post",
          url: routesApi.API + routesApi.CENTER_FIND_IDS,
          data: { idsCenter: arrayUserCenterData },
          responseType: "json",
          credentials: "include",
          mode: "no-cors",
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${sessionStore.api_token}`,
          },
        };

        return axios(requestAxios);
      })
      .then(function (response) {
        const data = response.data.data;
        //===============================
        //CENTROS
        //===============================
        dispatch({
          type: TYPES_GENERAL.SET_GENERAL_LOCATION_CENTER,
          payload: data,
        });

        const arrayRegions = [];
        data.map(function (el) {
          arrayRegions.push(el.idRegion);
        });

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //Region
        const requestAxios = {
          method: "post",
          url: routesApi.API + routesApi.REGION_FIND_IDS,
          data: { idsRegion: arrayRegions },
          responseType: "json",
          credentials: "include",
          mode: "no-cors",
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${sessionStore.api_token}`,
          },
        };
        return axios(requestAxios);
      })
      .then(function (response) {
        const data = response.data.data;
        //===============================
        //REGION
        //===============================
        dispatch({
          type: TYPES_GENERAL.SET_GENERAL_REGION,
          payload: data,
        });

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //Country
        const arrayCountry = [];
        data.map(function (el) {
          arrayCountry.push(el.idCountry);
        });

        arrayCountryDataTmp = arrayCountry;

        const requestAxios = {
          method: "post",
          url: routesApi.API + routesApi.COUNTRY_FIND_IDS,
          data: { idsCountry: arrayCountry },
          responseType: "json",
          credentials: "include",
          mode: "no-cors",
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${sessionStore.api_token}`,
          },
        };

        return axios(requestAxios);
      })
      .then(function (response) {
        const data = response.data.data;

        const money = data.map(function (el) {
          return { currency: el.currency, simbol: el.simbol };
        });
        //===============================
        //MONEDA
        //===============================
        dispatch({
          type: TYPES_GENERAL.SET_GENERAL_MONEY,
          payload: { money },
        });

        const country = data.map(function (el) {
          return { idCountry: el.idCountry, name: el.name };
        });

        //===============================
        //PAIS
        //===============================
        dispatch({
          type: TYPES_GENERAL.SET_GENERAL_COUNTRY,
          payload: country,
        });

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //Office
        const requestAxios = {
          method: "post",
          url: routesApi.API + routesApi.OFFICE_FIND_IDS,
          data: { idsCenter: arrayUserCenterDataTmp },
          responseType: "json",
          credentials: "include",
          mode: "no-cors",
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${sessionStore.api_token}`,
          },
        };
        return axios(requestAxios);
      })
      .then(function (response) {
        const data = response.data.data;
        //===============================
        //Oficinas
        //===============================
        dispatch({
          type: TYPES_GENERAL.SET_GENERAL_OFFICE,
          payload: data,
        });

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //Rutas
        const arrayOffice = [];
        data.map(function (el) {
          arrayOffice.push(el.idOffice);
        });

        const requestAxios = {
          method: "post",
          url: routesApi.API + routesApi.ROUTE_FIND_IDS,
          data: { idsOffice: arrayOffice },
          responseType: "json",
          credentials: "include",
          mode: "no-cors",
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${sessionStore.api_token}`,
          },
        };

        return axios(requestAxios);
      })
      .then(function (response) {
        const data = response.data.data;

        //===============================
        //rutas
        //===============================
        dispatch({
          type: TYPES_GENERAL.SET_GENERAL_ROUTE,
          payload: data,
        });

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //Bancos
        const requestAxios = {
          method: "post",
          url: routesApi.API + routesApi.BANK_COUNTRYS,
          data: { idsCountry: arrayCountryDataTmp },
          responseType: "json",
          credentials: "include",
          mode: "no-cors",
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${sessionStore.api_token}`,
          },
        };

        return axios(requestAxios);
      })
      .then(function (response) {
        const data = response.data.data;
        //===============================
        //bancos
        //===============================
        dispatch({
          type: TYPES_GENERAL.SET_GENERAL_BANK,
          payload: data,
        });
      })
      .catch(function (error) {
        const message = {
          type: "E",
          title: error.response.status + " - " + error.response.statusText,
          date: getFechaActual(),
          hour: getHoraActual(),
          body: error.response.statusText,
          timeShow: 5000,
        };
        //MENSAJE
        dispatch({
          type: TYPES_MESSAGE.SET_MESSAGE_SHOW,
          payload: message,
        });
      });
  }, []);

  return {};
};
