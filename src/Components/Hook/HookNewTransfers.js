import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { regExpresion, routesApi } from "../../Helpers/Constantes";

export const HookNewTransfers = () => {
  const tokenStore = useSelector((store) => store.user.session.api_token);
  const idUserStore = useSelector((store) => store.user.info.idUser);

  const initialForm = {
    idTransfers: 0,
    idCountry: "",
    idCustomer: 0,
    nameCustomer: "",
    serieInvoice: "",
    amount: "",
    idBank: 0,
    dateInvoice: new Date(),
    image: "",
    state: "I",
  };

  const [form, setForm] = useState(initialForm);
  const [file, setFiles] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const [alertaToast, setAlertaToast] = useState({
    titulo: "",
    mensaje: "",
    fechaHora: "",
    estado: false,
    iconoError: false,
  });

  const seteaMensajePersonalizado = (
    titulo = "",
    mensaje = "",
    estado = false,
    iconoError = false
  ) => {
    const dateNow = new Date();
    const hora =
      dateNow.getHours() < 10
        ? "0" + dateNow.getHours().toString()
        : (dateNow.getHours() + 1).toString();
    const minutos =
      dateNow.getMinutes() < 10
        ? "0" + dateNow.getMinutes().toString()
        : dateNow.getMinutes().toString();

    setAlertaToast({
      titulo,
      mensaje,
      fechaHora: hora + ":" + minutos + ":" + dateNow.getMilliseconds(),
      estado,
      iconoError,
    });
  };

  //Cambiar los valores de lo Inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //Pierde el foco de la pagina Inputs
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(form));
  };

  //Cuando presiono guardar
  const handleSubmit = (e) => {
    if (Object.keys(errors).length === 0) {
      uploadFile();
    } else {
      seteaMensajePersonalizado(
        "Error",
        "Hay campos que ingresar en el formulario",
        true,
        true
      );
    }
  };

  const validationsForm = (form) => {
    let errors = {};

    //Validacion Pais
    if (form.idCountry === "") {
      errors.idCountry = "Favor selecciona el pais.";
    }

    //Validacion Banco
    if (form.idBank === 0) {
      errors.idBank = "Favor selecciona un banco.";
    }

    //Validacion RUC / CEDULA
    if (!regExpresion.NUMBERENTERO.test(form.idCustomer)) {
      errors.idSupplier = "Favor valide, Solo acepta numeros.";
    } else if (form.idCustomer.length != 10 && form.idCustomer.length != 13) {
      errors.idSupplier = "Debe tener 10 o 13 digitos.";
    }

    //Validacion Nombre Proveedor
    if (!form.nameCustomer.trim()) {
      errors.nameCustomer = "Dato requerido.";
    } else if (!regExpresion.NAME.test(form.nameCustomer.trim())) {
      errors.nameCustomer = "Favor valide, Solo acepta letras.";
    }

    //Validacion Serie de la factura
    if (!form.serieInvoice.trim()) {
      errors.serieInvoice = "Dato requerido.";
    } else if (!regExpresion.NUMBERYGUION.test(form.serieInvoice.trim())) {
      errors.serieInvoice = "Favor valide, Solo acepta numeros y Guion";
    }

    //Validacion del monto
    if (!form.amount.trim()) {
      //!form.amount > 0
      //errors.amount = "Solo acepta punto, valor debe ser mayor a cero.";
      errors.amount = "Dato requerido.";
    } else if (!regExpresion.NUMBERFLOAT.test(form.amount)) {
      errors.amount = "Favor valide, Solo acepta numeros y punto";
    }

    if (!regExpresion.NUMBERFLOAT.test(form.amount)) {
      errors.amount = "Favor valide, Solo acepta numeros y punto";
    }

    //Validacion de la imagen
    /*
    if (!file) {
      errors.image = "Dato requerido.";
    }
*/
    return errors;
  };

  //guarda File
  const uploadFile = () => {
    //construir la Url de la| imagen y directorio
    const dateFile = new Date();
    const month =
      dateFile.getMonth() + 1 < 10
        ? "0" + (dateFile.getMonth() + 1).toString()
        : (dateFile.getMonth() + 1).toString();
    const day =
      dateFile.getDate() < 10
        ? "0" + dateFile.getDate().toString()
        : dateFile.getDate().toString();

    //datos que envio en form / body
    let datosEnviado = new FormData();
    datosEnviado.append("folder", "Transfers");
    datosEnviado.append("year", dateFile.getFullYear().toString());
    datosEnviado.append("month", month);
    datosEnviado.append("day", day);
    datosEnviado.append("idCountry", form.idCountry);
    datosEnviado.append("idCustomer", form.idCustomer);
    datosEnviado.append("serieInvoice", form.serieInvoice);
    datosEnviado.append("file", file);

    const cabeceraAxios = {
      method: "post",
      url: routesApi.API + routesApi.TRANSFER_SAVE_IMAGE,
      data: datosEnviado,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${tokenStore}`,
      },
    };

    console.log(cabeceraAxios);
    console.log(datosEnviado);

    setLoading(true);
    axios(cabeceraAxios)
      .then((response) => {
        //Si consulta con exito
        if (response.data.exito) {
          saveTransfer(response.data.urlFile);
        } else {
          seteaMensajePersonalizado(
            "Error",
            "No se ejecuto la consulta",
            true,
            true
          );
        }
      })
      .catch((e) => {
        seteaMensajePersonalizado("Error", "Catch API >>" + e, true, true);
      })
      .finally(() => {});
    setLoading(false);
  };

  //guarda Expensive
  const saveTransfer = (urlFile) => {
    const datosEnviado = {
      idCountry: form.idCountry,
      idUser: idUserStore,
      idBank: form.idBank,
      idCustomer: form.idCustomer,
      nameCustomer: form.nameCustomer,
      voucher: form.serieInvoice,
      amount: form.amount,
      image: urlFile,
      state: "I",
    };

    const cabeceraAxios = {
      method: "post",
      url: routesApi.API + routesApi.TRANSFER_SAVE,
      data: datosEnviado,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${tokenStore}`,
      },
    };

    setLoading(true);
    axios(cabeceraAxios)
      .then((response) => {
        if (response.data.exito) {
          seteaMensajePersonalizado("Mensaje", response.data.msg, true, false);
          setForm(initialForm);
          setFiles(null);
        } else {
          seteaMensajePersonalizado(
            "Error",
            response.data.error.errorInfo[2],
            true,
            true
          );
        }
      })
      .catch((e) => {
        seteaMensajePersonalizado("Error", "Catch API >>" + e, true, true);
      })
      .finally(() => {});
    setLoading(false);
  };

  return {
    form,
    file,
    setFiles,
    errors,
    loading,
    alertaToast,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
