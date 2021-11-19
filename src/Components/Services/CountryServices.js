import axios from "axios";

export function getCountrys(arrayCountrys, token, url) {
  //POST
  const requestAxios = {
    method: "post",
    url: url,
    data: arrayCountrys,
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
  getCountrys,
};
