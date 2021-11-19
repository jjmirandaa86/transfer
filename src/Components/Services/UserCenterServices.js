import axios from "axios";

export async function getUserCenter(token, url) {
  const requestAxios = {
    method: "get",
    url: url,
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
    return err;
  }
}

export default {
  getUserCenter,
};
