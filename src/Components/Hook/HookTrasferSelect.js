import axios from "axios";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { routesApi } from "../../Helpers/Constantes";

export const HookTrasferSelect = (inicialState) => {
  const tokenStore = useSelector((store) => store.user.session.api_token);
  const perfilStore = useSelector((store) => store.user.info.profile);

  const [data, setData] = useState(inicialState);
  const [aprobador, setAprobador] = useState(false);

  //Zoom Img
  const [valorZoom, setValorZoom] = useState(70);
  const [zoomHeight, setZoomHeight] = useState(300);

  useEffect(() => {
    if (perfilStore === "ADM") setAprobador(true);
    if (perfilStore === "APR") setAprobador(true);
  }, []);

  const incrementZoomHeight = (operador) => {
    if (operador === "+") {
      const newHeight = (zoomHeight * valorZoom) / 100;
      setZoomHeight(zoomHeight + newHeight);
    } else {
      const newHeight = (zoomHeight * valorZoom) / 100;
      setZoomHeight(zoomHeight - newHeight);
    }
  };

  const approveTransfer = () => {
    setData({ ...data, state: "A" });
  };

  const denyTransfer = () => {
    setData({ ...data, state: "N" });
  };

  useEffect(() => {
    const datosEnviado = {
      idTransfer: data.idTransfer,
      state: data.state,
    };

    const cabeceraAxios = {
      method: "put",
      url: routesApi.API + routesApi.TRANSFER_CHANGE_STATUS,
      data: datosEnviado,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${tokenStore}`,
      },
    };

    axios(cabeceraAxios)
      .then((response) => {
        //Si consulta con exito
        console.log(response.data.data.msg);
      })
      .catch((e) => {
        console.log("Catch API >>" + e);
      })
      .finally(() => {});
  }, [data.state]);

  return {
    aprobador,
    zoomHeight,
    data,
    incrementZoomHeight,
    approveTransfer,
    denyTransfer,
  };
};
