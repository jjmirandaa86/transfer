import axios from "axios";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { regExpresion, routesApi } from "../../Helpers/Constantes";
//Funciones
import { getHoraActual, getFechaActual } from "../../Helpers/Funciones";
import { getloginUser, getCenterUser } from "../Services/UserServices";

//Agrego los REDUX
import { TYPES as TYPES_USER } from "../../Library/Redux/Actions/userActions";
// import { userInitialState } from "../../Library/Redux/Reducers/userReducers";
import { TYPES as TYPES_GENERAL } from "../../Library/Redux/Actions/generalActions";
// import { generalReducers } from "../../Library/Redux/Reducers/generalReducers";
import { TYPES as TYPES_MESSAGE } from "../../Library/Redux/Actions/messageActions";
// import { messageReducers } from "../../Library/Redux/Reducers/messageReducers";

export const HookLogin = () => {
  const dispatch = useDispatch();

  const sessionStore = useSelector((store) => store.user.session);
  const infoStore = useSelector((store) => store.user.info);
  //Parametros por de los datos.
  const initialForm = {
    idUser: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm); //Formulario
  const [errors, setErrors] = useState({}); //Error Formulario
  const [errorApi, setErrorApi] = useState(false); //Error API

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [showMensaje, setShowMensaje] = useState(false);
  const [mensaje, setMensaje] = useState({});
  const [loadComponents, setLoadComponents] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadComponents(true);
    }, 2000);
  }, []);

  //Cambiar los valores de lo Inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //Validacion de Inputs
  const validationsForm = (form) => {
    let errors = {};
    if (!regExpresion.NUMBERENTERO.test(form.idUser.trim())) {
      // CONSTANTE.REGEXEMAIL.test(form.email.trim())
      errors.idUser =
        "El campo codigo colabrador es incorrecto, favor valide. Ejemplo: 500857";
    }

    if (!form.password.trim()) {
      errors.password = "El campo password es requerido";
    }

    return errors;
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
      setLoading(true);
      loadUser();
      setLoading(false);
      setShowMensaje(true);
    }
  };

  async function loadUser() {
    var userData = await getloginUser(
      form.idUser,
      form.password,
      routesApi.API + routesApi.USER_LOGIN
    );
    console.log(userData);
    if (!Boolean(userData.data.err)) {
      //USUARIO
      const info = userData.data.data.info;
      const session = userData.data.data.session;
      setErrorApi(false);
      seteaMensaje("S", "Login", "Success", 5000);

      dispatch({
        type: TYPES_USER.SET_USER_LOGIN_INFO,
        payload: { info, session },
      });

      console.log("redirige a otra pagina ");
      return <Redirect to="/main" />;

      //carga los parametros del usuario
      //loadCentre(info.idUser, session.api_token);
      //loadBank(info.idCountry, session.api_token);
      //loadRegion();
      // loadCountry();
      // loadOffice();
      // loadRoute();
    } else {
      setErrorApi(true);
      seteaMensaje("E", "Error", userData.data.msg.errorInfo[2], 5000);
    }
  }

  // loadCountry
  // console.log("Inicia el proceso de validación de usuario");
  // var userData = await getCenterUser(
  //   "EC",
  //   "http://localhost:8000/api/country/id/",
  //   "AwgxladTW4sczS6mT9ddZQZgAez1H8PtIR6vrYGyZSFaDUVu6abYMrZfJS9iPSFU5wp0XFDhSJy2Eeirj9mG2cFgLt7Z4dbs5GzpAFwcK7sT6sGZMTw2ej5NM9H6oX6cRWl9LlcURUch2lUDcDRNxnaL1LtZQvwyAfJzRBRForbuO2tZaNeKUKDM7CdNSVje0t6KbN7EszWnfaYqNzdI8PNiqTa0gwurgIF1bX0eVQG6GCu4OMOIrKI27CjcAm"
  // );
  // console.log(userData);

  async function loadCentre(idUser, api_token) {
    /*
    if (!errorApi) {
      var userData = await getloginUser(
        "http://localhost:8000/api/user/center/id/" + idUser,
        token
      );
      console.log(userData);
    } else {
      seteaMensaje("E", "Error", "Error consulta api User", 5000);
    }
    */
  }

  const loadBank = (idCountry, api_token) => {
    if (!errorApi) {
      const requestAxios = {
        method: "get",
        url: routesApi.API + routesApi.BANK_COUNTRY + idCountry,
        responseType: "json",
        credentials: "include",
        mode: "no-cors",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${api_token}`,
        },
      };

      axios(requestAxios)
        .then((res) => {
          console.log(res);
          return res;
        })
        .then((res) => {
          if (!Boolean(res.data.err)) {
            const centre = res.data.data;
            //CENTRE
            dispatch({
              type: TYPES_GENERAL.SET_GENERAL_LOCATION_CENTRE,
              payload: { centre },
            });

            seteaMensaje("S", "get Api-Centre", "Success", 5000);
            setErrorApi(false);
          } else {
            seteaMensaje("E", "Error", res.data.msg.errorInfo[2], 5000);
            setErrorApi(true);
          }
        })
        .catch((err) => {
          seteaMensaje("E", "Error", err, 5000);
          setErrorApi(true);
        })
        .finally(() => console.log("finaliza"));
    } else {
      seteaMensaje("E", "Error", "Error consulta api User", 5000);
    }
  };

  const loadMoney = () => {
    const requestAxios = {
      method: "get",
      url: routesApi.API + routesApi.BANK_COUNTRY + "EC",
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${sessionStore.api_token}`,
      },
    };

    //**************** MONEDA *****************

    axios(requestAxios).then((response) => {
      if (response.status === 200) {
        console.log(response);
        if (response.data.data) {
          const user = response.data.data;

          console.log(user);
          //USUARIO
          const info = user.info;
          const session = user.session;

          dispatch({
            type: TYPES_GENERAL.SET_GENERAL_MONEY,
            payload: { info, session },
          });

          //MENSAJE
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

          const money = {
            currency: user.currency,
            simbol: user.simbol,
          };

          console.log(money);
          // //GENERAL
          // dispatch({
          //   type: TYPES_GENERAL.SET_GENERAL_MONEY,
          //   payload: money,
          // });

          loadBank();

          setResponse(true);
        } else {
          console.log("entro al false ------------------");
          if (response.data.err) {
            const message = {
              type: "E",
              title: "Inicia Session",
              date: getFechaActual(),
              hour: getHoraActual(),
              body: response.data.msg.errorInfo[2],
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
  };

  const seteaMensaje = (type, title, body, timeShow) => {
    const message = {
      type,
      title,
      date: getFechaActual(),
      hour: getHoraActual(),
      body,
      timeShow,
    };
    //MENSAJE
    dispatch({
      type: TYPES_MESSAGE.SET_MESSAGE_SHOW,
      payload: message,
    });
  };

  return {
    loadComponents,
    form,
    errors,
    loading,
    showMensaje,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
