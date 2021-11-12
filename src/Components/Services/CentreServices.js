import axios from "axios";

export async function getloadCentre(url, token) {
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

  /*
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
    */
}

export function getCenterUser(idCountry, url, token) {
  // const idCountry = "EC";
  // const url = "http://localhost:8000/api/country/id/";
  // const token =
  //   "bAwgxladTW4sczS6mT9ddZQZgAez1H8PtIR6vrYGyZSFaDUVu6abYMrZfJS9iPSFU5wp0XFDhSJy2Eeirj9mG2cFgLt7Z4dbs5GzpAFwcK7sT6sGZMTw2ej5NM9H6oX6cRWl9LlcURUch2lUDcDRNxnaL1LtZQvwyAfJzRBRForbuO2tZaNeKUKDM7CdNSVje0t6KbN7EszWnfaYqNzdI8PNiqTa0gwurgIF1bX0eVQG6GCu4OMOIrKI27CjcAm";

  const requestAxios = {
    method: "get",
    url: url + idCountry,
    responseType: "json",
    credentials: "include",
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  };

  /*
  try {
    const data = axios(requestAxios);
    return data;
  } catch (err) {
    return false;
  }
  

  const data = axios(requestAxios)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
    */
}

export default {
  getloadCentre,
};
