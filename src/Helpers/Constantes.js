export const regExpresion = {
  NAME: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
  EMAIL: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
  PASSWORD: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,16}$/,
  COMMENTS: /^.{1,255}$/,
  NUMBERENTERO: /^[0-9]+$/,
  NUMBERYGUION: /^[0-9-]+$/,
  NUMBERFLOAT: /^[0-9]+([.])?([0-9]+)?$/,
};

export const routesApi = {
  API: "http://192.168.1.80:8000/api/",
  IMAGEN: "http://192.168.1.80:8000/",

  LANGUAGE: "---------------------LANGUAGE------------------",
  LANGUAGE_ALL: "language/all",

  USER: "---------------------USER------------------",
  USER_ALL: "user/all",
  USER_FIND_ID: "user/id/",
  USER_FIND_EMAIL: "user/email/",
  USER_CREATE: "user",
  USER_UPDATE: "user",
  USER_DELETE: "user/",
  USER_LOGIN: "user/login",

  BANK: "---------------------BANK------------------",
  BANK_ALL: "bank/all",
  BANK_COUNTRY: "bank/country/",
  BANK_COUNTRYS: "bank/country/ids/",
  BANK_CREATE: "bank",
  BANK_DELETE: "bank/",

  COUNTRY: "---------------------COUNTRY------------------",
  COUNTRY_ALL: "country/all",
  COUNTRY_FIND_ID: "country/id/",
  COUNTRY_FIND_IDS: "country/ids/",
  COUNTRY_CREATE: "country",
  COUNTRY_DELETE: "country/",

  REGION: "---------------------REGION------------------",
  REGION_ALL: "region/all",
  REGION_FIND_ID: "region/id/",
  REGION_FIND_IDS: "region/ids/",
  REGION_FIND_IDCOUNTRY: "region/country/",
  REGION_CREATE: "region",
  REGION_DELETE: "region/",

  CENTER: "---------------------CENTER------------------",
  CENTER_ALL: "center/all",
  CENTER_FIND_ID: "center/id/",
  CENTER_FIND_IDS: "center/ids/",
  CENTER_FIND_IDREGION: "region/region/",
  CENTER_CREATE: "center",
  CENTER_DELETE: "center/",

  OFFICE: "---------------------OFFICE------------------",
  OFFICE_FIND_IDS: "office/center/ids/",

  ROUTE: "---------------------ROUTE------------------",
  ROUTE_FIND_IDS: "route/office/ids/",

  USERCENTER: "--------------USER CENTER------------------",
  USERCENTER_FIND_IDUSER: "user/center/id/",

  STATES: "--------------STATES------------------",
  STATES_FIND_IDCOUNTRYS: "states/country/ids",

  TRANSFER: "--------------TRANSFERS------------------",
  TRANSFER_FIND_USER: "transfer/id/",
  TRANSFER_SAVE_IMAGE: "transfer/save/image",
  TRANSFER_SAVE: "transfer/save",
  TRANSFER_CHANGE_STATUS: "transfer/status",
};
