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
}

export default {
  getloginUser,
};
