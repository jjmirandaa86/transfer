import axios from "axios";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

export const HookTransfer = (props) => {
  const r_api_token = useSelector((store) => store.user.session.token);

  const [dato, setDato] = useState([]);
  const [url, setUrl] = useState(props.REACT_APP_EXPENSE_POST_USER_DATE);
  const [datoPagination, setDatoPagination] = useState([]);
  const [datoHead, setDatoHead] = useState({
    idTransfer: "Gasto",
    idCountry: "Pais",
    idUser: "Empleado",
    idBank: "Tipo Gasto",
    idCustomer: "Proveedor",
    nameCustomer: "Nombre",
    vaucher: "Factura",
    amount: "Monto",
    dateTranfer: "Fecha Factura",
    image: "Ver",
    state: "Estado",
    created_at: "Creación",
    updated_at: "Actualización",
  });

  const datosEnviado = {
    idCountry: "EC",
    idUser: 500857,
    dateFirst: "2020-01-01",
    dateEnd: "2021-08-30",
  };

  const cabeceraAxios = {
    method: "post",
    url: url,
    data: datosEnviado,
    responseType: "json",
    credentials: "include",
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${r_api_token}`,
    },
  };

  //carga los datos
  useEffect(() => {
    axios(cabeceraAxios)
      .then((response) => {
        //Si consulta con exito
        if (response.status === 200) {
          if (response.data.data) {
            setDato(response.data.data);
            setDatoPagination({
              currentPage: response.data.current_page,
              fromPage: response.data.current_page,
              lastPage: response.data.last_page,
              perPage: response.data.per_page,
              toPage: response.data.to,
              totalPage: response.data.total,
              firstPageUrl: response.data.first_page_url,
              prevPageUrl: response.data.prev_page_url,
              nextPageUrl: response.data.next_page_url,
              lastPageUrl: response.data.last_page_url,
            });
          } else {
            setDato([]);
          }
        } else {
          setDato([]);
        }
      })
      .catch((e) => {
        console.log("Catch API >>" + e);
      })
      .finally(() => {});
  }, [url]);

  const handleChangeUrl = (newUrl) => {
    setUrl(newUrl);
  };

  return {
    dato,
    datoHead,
    datoPagination,
    handleChangeUrl,
  };
};
