import axios from "axios";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { routesApi } from "../../Helpers/Constantes";

export const HookTransfer = (props) => {
  const token = useSelector((store) => store.user.session.api_token);
  const idUser = useSelector((store) => store.user.info.idUser);
  const filter = useSelector((store) => store.general.filter);

  const [dato, setDato] = useState([]);
  const [url, setUrl] = useState(
    routesApi.API + routesApi.TRANSFER_FIND_USER + idUser
  );
  const [datoPagination, setDatoPagination] = useState([]);
  const [datoHead, setDatoHead] = useState({
    idTransfer: "#",
    idCountry: "Pais",
    idUser: "Empleado",
    idBank: "Banco",
    idCustomer: "Cliente",
    nameCustomer: "Nombre",
    voucher: "Factura",
    amount: "Monto",
    //dateTranfer: "Fecha Factura",
    image: "Ver",
    state: "Estado",
    created_at: "Creación",
    updated_at: "Actualización",
    actions: "Acciones",
  });

  const cabeceraAxios = {
    method: "get",
    url: url,
    // data: datosEnviado,
    responseType: "json",
    credentials: "include",
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  };

  //carga los datos
  useEffect(() => {
    axios(cabeceraAxios)
      .then((response) => {
        //Si consulta con exito
        if (response.status === 200) {
          if (response.data.data) {
            console.log(response);
            setDato(response.data.data);
            setDatoPagination({
              currentPage: response.data.current_page,
              fromPage: response.data.current_page,
              lastPage: response.data.last_page,
              from: response.data.from,
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
