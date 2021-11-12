import axios from "axios";

export async function getloginUser(user, passwd, url) {
  const datosEnviado = {
    idUser: user,
    password: passwd,
  };

  const requestAxios = {
    method: "post",
    url: url,
    data: datosEnviado,
    responseType: "json",
    credentials: "include",
    mode: "no-cors",
    headers: {
      Accept: "*/*",
    },
  };

  try {
    const data = axios(requestAxios);
    return data;
  } catch (err) {
    return false;
  }

  // axios(requestAxios)
  //   .then((res) => {
  //     console.log("termina servicio y retorna");
  //     return res.data;
  //   })
  /*
    .then((res) => {
      if (!Boolean(res.data.err)) {
        //USUARIO
        const info = res.data.data.info;
        const session = res.data.data.session;
        setErrorApi(false);
        seteaMensaje("S", "Login", "Success", 5000);

        dispatch({
          type: TYPES_USER.SET_USER_LOGIN_INFO,
          payload: { info, session },
        });

        //carga los parametros del usuario
        loadCentre(info.idUser, session.api_token);

        //loadBank(info.idCountry, session.api_token);
        //loadRegion();
        // loadCountry();
        // loadOffice();
        // loadRoute();
//       } else {
//         setErrorApi(true);
//         seteaMensaje("E", "Error", res.data.msg.errorInfo[2], 5000);
//       }
//     })
//     */
  //     .catch((err) => {
  //       console.log("error");
  //       return err;
  //       //seteaMensaje("E", "Error", err, 5000);
  //       //setErrorApi(true);
  //     })
  //     .finally(() => console.log("finaliza"));
}

export default {
  getloginUser,
};
