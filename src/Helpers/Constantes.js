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
  API: "http://localhost:8000/api/",

  LANGUAGE: "---------------------LANGUAGE------------------",
  LANGUAGE_ALL: "language/all",

  USER: "---------------------USER------------------",
  USER_LOGIN: "user/login",
};
