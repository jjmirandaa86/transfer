//****************************************
//Convertidor de fechas
//stringToDate("17/9/2014","dd/MM/yyyy","/");
//stringToDate("9/17/2014","mm/dd/yyyy","/")
//stringToDate("9-17-2014","mm-dd-yyyy","-")

export function stringToDate(_date, _format, _delimiter) {
  var formatLowerCase = _format.toLowerCase();
  var formatItems = formatLowerCase.split(_delimiter);
  var dateItems = _date.split(_delimiter);
  var monthIndex = formatItems.indexOf("mm");
  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var month = parseInt(dateItems[monthIndex]);
  month -= 1;
  var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
  return formatedDate;
}

//************************************
//Url de la pagina
export const urlPage = () => window.location.origin;

//*************** DEVUELVO FECHA ACTUAL *********************
export const getHoraActual = () => {
  const fecha = new Date();
  return fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
};

//*************** DEVUELVO FECHA ACTUAL *********************
export const getFechaActual = () => {
  const fecha = new Date();
  return (
    ("0" + fecha.getDate()).slice(-2) +
    "." +
    ("0" + (fecha.getMonth() + 1)).slice(-2) +
    "." +
    fecha.getFullYear()
  );
};

export const getPrimerDiaMes = () => {
  var date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getUltimoDiaMes = () => {
  var date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};
