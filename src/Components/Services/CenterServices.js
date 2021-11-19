import axios from "axios";

export function getCenters(arrayCenters, token, url) {
  //POST
  const requestAxios = {
    method: "post",
    url: url,
    data: arrayCenters,
    responseType: "json",
    credentials: "include",
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
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
  getCenters,
};
