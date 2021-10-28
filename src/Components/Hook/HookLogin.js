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

  const sessionStore = useSelector((store) => store.user.session);
  const infoStore = useSelector((store) => store.user.info);
  //Parametros por de los datos.
  const initialForm = {
    idUser: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [errorApi, setErrorApi] = useState(false);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [showMensaje, setShowMensaje] = useState(false);
  const [mensaje, setMensaje] = useState({});

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
      buildData();
      setLoading(false);
      setShowMensaje(true);
    }
  };

  //async function buildData() {
  const buildData = () => {
    loadUser();
    // loadCentre();
    // loadRegion();
    // loadCountry();
    // loadOffice();
    // loadRoute();
    // loadBank();
  };

  async function loadUser() {
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

    try {
      let res = await axios(requestAxios);

      console.log(">>>>>>>>>>>>>>>>>>>>>><<<");
      console.log(res.data.err);
      if (Boolean(res.data.err) === true) {
        //***************************** */
        //USUARIO
        const info = res.data.data.info;
        const session = res.data.data.session;

        dispatch({
          type: TYPES.SET_USER_LOGIN_INFO,
          payload: { info, session },
        });

        seteaMensaje("S", "Login", "Success", 5000);
        setErrorApi(false);
      } else {
        console.log(res);
        seteaMensaje("E", "Error", res.data.msg.errorInfo[2], 5000);
        setErrorApi(true);
      }
    } catch (err) {
      seteaMensaje("E", "Error", err, 5000);
      setErrorApi(true);
    }
  }

  //   msg	Object { errorInfo: […] }
  // errorInfo	[ "acertijo.dev", 0, "Usuario o contraseña invalida" ]
  // 0	"acertijo.dev"
  // 1	0
  // 2	"Usuario o contraseña invalida"
  // err	true
  // data	null

  async function loadCentre() {
    if (infoStore.idUser) {
      const requestAxios = {
        method: "get",
        url: "http://localhost:8000/api/user/center/id/" + infoStore.idUser,
        responseType: "json",
        credentials: "include",
        mode: "no-cors",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${sessionStore.api_token}`,
        },
      };

      try {
        let res = await axios(requestAxios);
        //***************************** */
        //CENTRE
        const centre = res.data.data;

        console.log(centre);
        // dispatch({
        //   type: TYPES.SET_USER_LOGIN_INFO,
        //   payload: { info, session },
        // });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Error>>>>>>>>>>>>>>>>>>>>>>>>>>>><");
    }
  }

  const loadBank = () => {
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

    axios(requestAxios).then((response) => {
      if (response.status === 200) {
        console.log(response);
        //BANK
        // dispatch({
        //   type: TYPES_MESSAGE.SET_MESSAGE_SHOW,
        //   payload: message,
        // });
      }
    });
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
            type: TYPES.SET_USER_LOGIN_INFO,
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
