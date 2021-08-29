import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { regExpresion, routesApi } from "../../Helpers/Constantes";

//Agrego los REDUX
import { TYPES } from "../../Library/Redux/Actions/userActions";
// import { userInitialState } from "../../Library/Redux/Reducers/userReducers";
import { TYPES as TYPES_GENERAL } from "../../Library/Redux/Actions/generalActions";
// import { generalReducers } from "../../Library/Redux/Reducers/generalReducers";
import { TYPES as TYPES_MESSAGE } from "../../Library/Redux/Actions/messageActions";
// import { messageReducers } from "../../Library/Redux/Reducers/messageReducers";
//Funciones
import { getHoraActual, getFechaActual } from "../../Helpers/Funciones";

export const HookLogin = () => {
  const dispatch = useDispatch();

  const userSelector = useSelector((store) => store.user);
  //Parametros por de los datos.
  const initialForm = {
    idUser: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  //Cambiar los valores de lo Inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //Pierde el foco de la pagina
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(form));
  };

  //Cuando presiono el boton de ingresar al login
  const handleSubmit = (e) => {
    // Valido errores en el ingreso de datos
    setErrors(validationsForm(form));

    if (Object.keys(errors).length === 0) {
      const datosEnviado = {
        idUser: form.idUser,
        password: form.password,
      };

      const requestAxios = {
        method: "post",
        url: routesApi.API + routesApi.USER_LOGIN,
        data: datosEnviado,
        responseType: "json",
        credentials: "include",
        mode: "no-cors",
        headers: {
          Accept: "*/*",
        },
      };
      setLoading(true);
      axios(requestAxios).then((response) => {
        if (response.status === 200) {
          if (response.data.user) {
            const user = response.data.user[0];

            const info = {
              idUser: user.idUser,
              firtsName: user.firtsName,
              lastName: user.lastName,
              position: user.position,
              profile: user.profile,
              email: user.email,
              state: user.state,
            };

            const session = {
              api_token: user.api_token,
              date: getFechaActual(),
              hour: getHoraActual(),
            };

            const ubication = {
              idCountry: user.idCountry,
              countryName: user.countryName,
              idRegion: user.idRegion,
              regionsName: user.regionsName,
              idOffice: user.idOffice,
              officeName: user.officeName,
            };

            //USUARIO
            dispatch({
              type: TYPES.SET_USER_LOGIN_INFO,
              payload: { info, session, ubication },
            });

            const money = {
              currency: user.currency,
              simbol: user.simbol,
            };

            //GENERAL
            dispatch({
              type: TYPES_GENERAL.SET_GENERAL_MONEY,
              payload: money,
            });

            const message = {
              type: "S",
              title: "Inicia Session",
              date: getFechaActual(),
              hour: getHoraActual(),
              body: response.data.msg,
              timeShow: 5000,
            };
            //MENSAJE
            dispatch({
              type: TYPES_MESSAGE.SET_MESSAGE_SHOW,
              payload: message,
            });

            setMensaje(true);
            setResponse(true);
          } else {
            if (response.data.msg) {
              const message = {
                type: "E",
                title: "Inicia Session",
                date: getFechaActual(),
                hour: getHoraActual(),
                body: response.data.msg,
                timeShow: 5000,
              };
              //MENSAJE
              dispatch({
                type: TYPES_MESSAGE.SET_MESSAGE_SHOW,
                payload: message,
              });
            } else if (response.data.error.errorInfo[1] === 1062) {
              const message = {
                type: "E",
                title: "Inicia Session",
                date: getFechaActual(),
                hour: getHoraActual(),
                body: "El usuario ya ingreso en otra session",
                timeShow: 5000,
              };
              //MENSAJE
              dispatch({
                type: TYPES_MESSAGE.SET_MESSAGE_SHOW,
                payload: message,
              });
            }
          }
        } else {
          const message = {
            type: "E",
            title: "Inicia Session",
            date: getFechaActual(),
            hour: getHoraActual(),
            body: response.status + ", " + response.statusText,
            timeShow: 5000,
          };
          //MENSAJE
          dispatch({
            type: TYPES_MESSAGE.SET_MESSAGE_SHOW,
            payload: message,
          });
        }
      });

      // .catch((e) => {
      //   setMensajeAlerta("Error: " + e.message);
      //   console.log("Catch API >>" + e);
      // })
      // .finally(() => {
      //   setLoading(false);
      //   setAlerta(true);
      // });
    } else {
      const message = {
        type: "E",
        title: "Inicia Session",
        date: getFechaActual(),
        hour: getHoraActual(),
        body: "Error: Debes ingresar Correo y contraseña",
        timeShow: 5000,
      };
      //MENSAJE
      dispatch({
        type: TYPES_MESSAGE.SET_MESSAGE_SHOW,
        payload: message,
      });
      setMensaje(true);
    }
    setLoading(false);
  };

  //Validacion de Inputs
  const validationsForm = (form) => {
    let errors = {};
    if (!form.idUser.trim()) {
      errors.idUser = "El campo codigo colaborador es requerido";
    } else if (!regExpresion.NUMBERENTERO.test(form.idUser.trim())) {
      // CONSTANTE.REGEXEMAIL.test(form.email.trim())
      errors.idUser =
        "El campo codigo colabrador es incorrecto, favor valide. Ejemplo: 500857";
    }

    if (!form.password.trim()) {
      errors.password = "El campo password es requerido";
    } else if (!regExpresion.PASSWORD.test(form.password.trim())) {
      errors.password = "El campo contraseña no es incorrecto, favor valide.";
    }

    return errors;
  };

  return {
    form,
    errors,
    loading,
    mensaje,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
