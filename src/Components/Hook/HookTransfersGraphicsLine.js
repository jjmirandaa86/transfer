import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const HookTransfersGraphicsLine = (props) => {
  const [datos, setDatos] = useState([]);
  const titleGraphics = "Total pagos por mes";
  const titleGraphicsX = "Mes";
  const titleGraphicsY = "Total";

  const countryStore = useSelector((store) => store.general.location.country);
  const idUserStore = useSelector((store) => store.user.info.idUser);
  const filterStore = useSelector((store) => store.general.filter);

  var arrayCountryDataTmp = [];

  //   const arrayCountry = [];
  //   countryStore.map(function (el) {
  //     arrayCountryDataTmp.push(el.idCountry);
  //   });

  const datosEnviado = {
    idCountrys: arrayCountryDataTmp,
    idUser: idUserStore,
    dateFirst: filterStore.dateInit,
    dateEnd: filterStore.dateEnd,
  };

  const cabeceraAxios = {
    method: "post",
    url: props.REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE,
    data: datosEnviado,
    responseType: "json",
    credentials: "include",
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${props.token}`,
    },
  };

  //carga los datos
  useEffect(() => {
    axios(cabeceraAxios)
      .then((response) => {
        //Si consulta con exito
        if (response.status === 200) {
          if (response.data) {
            //.data
            const arr = [];
            const cabecera = ["Mes", "Cantidad"];
            arr.push(cabecera);
            //recorro el array de datos
            //response.data.data.map((el) => {
            response.data.map((el) => {
              let dato = [
                el.month.substr(0, 3) + " " + el.year,
                el.countExpensive,
              ];
              arr.push(dato);
            });
            setDatos(arr);
          } else {
            setDatos([]);
          }
        } else {
          setDatos([]);
        }
      })
      .catch((e) => {
        console.log("Catch API >>" + e);
      })
      .finally(() => {});
  }, []);

  return {
    datos,
    titleGraphics,
    titleGraphicsX,
    titleGraphicsY,
  };
};
