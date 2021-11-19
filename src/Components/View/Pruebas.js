import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { routesApi } from "../../Helpers/Constantes";

import { getUserCenter } from "../Services/UserCenterServices";
import { getCenters } from "../Services/CenterServices";
import { getRegions } from "../Services/RegionServices";
import { getCountrys } from "../Services/CountryServices";
import { getOffices } from "../Services/OfficeServices";
import { getRoutes } from "../Services/RouteServices";

import { TYPES as TYPES_GENERAL } from "../../Library/Redux/Actions/generalActions";

const Pruebas = () => {
  const dispatch = useDispatch();

  (async () => {
    var userCenterData = await getUserCenter(
      "raFAIHIxDDOR7UWsqz5T5HxDlyU5BpSfIknZHGYwverIBbzvmzsvhBJoYdRwm4IVeaxYYOpiiKXLU1VVsAmsYFQfomtzuv0kocO2ukaZHTsftge0emiFCOEiypAIAF8PCy6NSHDfplyarv4o376UbaIkeR5izTs2Efa8azKSDVSWJaS2BbbR3gkK1TpkRFMeBmccdpu4vJn3DLvdCQir5ojf7gcQROV30koggpgiWqs3oI1x6uAAkOXzN8L2cwh",
      routesApi.API + routesApi.USERCENTER_FIND_IDUSER + 500999
    );
    userCenterData().then((x) => {
      console.log("listo");
    });
  })();

  // const x = getCenterOfUser(
  //   "raFAIHIxDDOR7UWsqz5T5HxDlyU5BpSfIknZHGYwverIBbzvmzsvhBJoYdRwm4IVeaxYYOpiiKXLU1VVsAmsYFQfomtzuv0kocO2ukaZHTsftge0emiFCOEiypAIAF8PCy6NSHDfplyarv4o376UbaIkeR5izTs2Efa8azKSDVSWJaS2BbbR3gkK1TpkRFMeBmccdpu4vJn3DLvdCQir5ojf7gcQROV30koggpgiWqs3oI1x6uAAkOXzN8L2cwh",
  //   routesApi.API + routesApi.USERCENTER_FIND_IDUSER + 500999
  // );
  // console.log("imprime x");
  // console.log(x);

  // (async () => {
  //   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   //User Center

  //   var userCenterData = await getUserCenter(
  //     "raFAIHIxDDOR7UWsqz5T5HxDlyU5BpSfIknZHGYwverIBbzvmzsvhBJoYdRwm4IVeaxYYOpiiKXLU1VVsAmsYFQfomtzuv0kocO2ukaZHTsftge0emiFCOEiypAIAF8PCy6NSHDfplyarv4o376UbaIkeR5izTs2Efa8azKSDVSWJaS2BbbR3gkK1TpkRFMeBmccdpu4vJn3DLvdCQir5ojf7gcQROV30koggpgiWqs3oI1x6uAAkOXzN8L2cwh",
  //     routesApi.API + routesApi.USERCENTER_FIND_IDUSER + 500999
  //   );
  //   userCenterData = userCenterData.data.data;

  //   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   //Center
  //   const arrayUserCenterData = [];
  //   userCenterData.map(function (el) {
  //     arrayUserCenterData.push(el.idCenter);
  //   });
  //   var centersData = await getCenters(
  //     { idsCenter: arrayUserCenterData },
  //     "raFAIHIxDDOR7UWsqz5T5HxDlyU5BpSfIknZHGYwverIBbzvmzsvhBJoYdRwm4IVeaxYYOpiiKXLU1VVsAmsYFQfomtzuv0kocO2ukaZHTsftge0emiFCOEiypAIAF8PCy6NSHDfplyarv4o376UbaIkeR5izTs2Efa8azKSDVSWJaS2BbbR3gkK1TpkRFMeBmccdpu4vJn3DLvdCQir5ojf7gcQROV30koggpgiWqs3oI1x6uAAkOXzN8L2cwh",
  //     routesApi.API + routesApi.CENTER_FIND_IDS
  //   );
  //   centersData = centersData.data.data;

  //   console.log(">>>>>>>>>>>>>> Agrego Center");
  //   console.log(centersData);

  //   dispatch({
  //     type: TYPES_GENERAL.SET_GENERAL_LOCATION_CENTER,
  //     payload: centersData,
  //   });

  //   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   //Region
  //   const arrayRegions = [];
  //   centersData.map(function (el) {
  //     arrayRegions.push(el.idRegion);
  //   });

  //   var regionsData = await getRegions(
  //     { idsRegion: arrayRegions },
  //     "raFAIHIxDDOR7UWsqz5T5HxDlyU5BpSfIknZHGYwverIBbzvmzsvhBJoYdRwm4IVeaxYYOpiiKXLU1VVsAmsYFQfomtzuv0kocO2ukaZHTsftge0emiFCOEiypAIAF8PCy6NSHDfplyarv4o376UbaIkeR5izTs2Efa8azKSDVSWJaS2BbbR3gkK1TpkRFMeBmccdpu4vJn3DLvdCQir5ojf7gcQROV30koggpgiWqs3oI1x6uAAkOXzN8L2cwh",
  //     routesApi.API + routesApi.REGION_FIND_IDS
  //   );
  //   regionsData = regionsData.data.data;

  //   console.log(">>>>>>>>>>>>>> Agrego Region");
  //   console.log(regionsData);
  //   dispatch({
  //     type: TYPES_GENERAL.SET_GENERAL_REGION,
  //     payload: regionsData,
  //   });

  //   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   //Country
  //   const arrayCountry = [];
  //   regionsData.map(function (el) {
  //     arrayCountry.push(el.idCountry);
  //   });

  //   var countryData = await getCountrys(
  //     { idsCountry: arrayCountry },
  //     "raFAIHIxDDOR7UWsqz5T5HxDlyU5BpSfIknZHGYwverIBbzvmzsvhBJoYdRwm4IVeaxYYOpiiKXLU1VVsAmsYFQfomtzuv0kocO2ukaZHTsftge0emiFCOEiypAIAF8PCy6NSHDfplyarv4o376UbaIkeR5izTs2Efa8azKSDVSWJaS2BbbR3gkK1TpkRFMeBmccdpu4vJn3DLvdCQir5ojf7gcQROV30koggpgiWqs3oI1x6uAAkOXzN8L2cwh",
  //     routesApi.API + routesApi.COUNTRY_FIND_IDS
  //   );
  //   countryData = countryData.data.data;

  //   console.log(">>>>>>>>>>>>>> Agrego moneda");
  //   const money = countryData.map(function (el) {
  //     return { currency: el.currency, simbol: el.simbol };
  //   });
  //   console.log(money);

  //   dispatch({
  //     type: TYPES_GENERAL.SET_GENERAL_MONEY,
  //     payload: { money },
  //   });

  //   console.log(">>>>>>>>>>>>>> Agrego country");
  //   const country = countryData.map(function (el) {
  //     return { idCountry: el.idCountry, name: el.name };
  //   });
  //   console.log(country);
  //   dispatch({
  //     type: TYPES_GENERAL.SET_GENERAL_COUNTRY,
  //     payload: country,
  //   });

  //   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   //Office
  //   var officesData = await getOffices(
  //     { idsCenter: arrayUserCenterData },
  //     "raFAIHIxDDOR7UWsqz5T5HxDlyU5BpSfIknZHGYwverIBbzvmzsvhBJoYdRwm4IVeaxYYOpiiKXLU1VVsAmsYFQfomtzuv0kocO2ukaZHTsftge0emiFCOEiypAIAF8PCy6NSHDfplyarv4o376UbaIkeR5izTs2Efa8azKSDVSWJaS2BbbR3gkK1TpkRFMeBmccdpu4vJn3DLvdCQir5ojf7gcQROV30koggpgiWqs3oI1x6uAAkOXzN8L2cwh",
  //     routesApi.API + routesApi.OFFICE_FIND_IDS
  //   );
  //   officesData = officesData.data.data;

  //   dispatch({
  //     type: TYPES_GENERAL.SET_GENERAL_OFFICE,
  //     payload: officesData,
  //   });

  //   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //   //route
  //   const arrayOffice = [];
  //   officesData.map(function (el) {
  //     arrayOffice.push(el.idOffice);
  //   });

  //   var routeData = await getRoutes(
  //     { idsOffice: arrayOffice },
  //     "raFAIHIxDDOR7UWsqz5T5HxDlyU5BpSfIknZHGYwverIBbzvmzsvhBJoYdRwm4IVeaxYYOpiiKXLU1VVsAmsYFQfomtzuv0kocO2ukaZHTsftge0emiFCOEiypAIAF8PCy6NSHDfplyarv4o376UbaIkeR5izTs2Efa8azKSDVSWJaS2BbbR3gkK1TpkRFMeBmccdpu4vJn3DLvdCQir5ojf7gcQROV30koggpgiWqs3oI1x6uAAkOXzN8L2cwh",
  //     routesApi.API + routesApi.ROUTE_FIND_IDS
  //   );
  //   routeData = routeData.data.data;

  //   dispatch({
  //     type: TYPES_GENERAL.SET_GENERAL_ROUTE,
  //     payload: routeData,
  //   });
  // })();

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //User Center
  // function getCenterOfUser(userCenterData) {
  //   console.log("recorre el array");
  //   //Array de Center
  //   const arrayUserCenterData = [];
  //   userCenterData.map(function (el) {
  //     arrayUserCenterData.push(el.idCenter);
  //   });
  //   return {
  //     status: userCenterData.status,
  //     data: arrayUserCenterData,
  //   };
  // }

  return <div>hi from pruebas</div>;
};

export default Pruebas;
