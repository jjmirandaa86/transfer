import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getPrimerDiaMes, getUltimoDiaMes } from "../../Helpers/Funciones";
//Agrego los REDUX
import { TYPES as TYPES_GENERAL } from "../../Library/Redux/Actions/generalActions";

export const HookFindTransfers = () => {
  const dispatch = useDispatch();
  const countryStore = useSelector((store) => store.general.location.country);
  const filterStore = useSelector((store) => store.general.filter);
  const [filter, setFilter] = useState(filterStore);

  const initialStateFilter = {
    dateStart: getPrimerDiaMes(),
    dateEnd: getUltimoDiaMes(),
    idCountry: "",
    idRegion: 0,
    idCenter: "",
    idOffice: 0,
    idRoute: "",
    idBank: 0,
    idState: 0,
  };

  const handleReset = () => {
    console.log("reseteo");
    setFilter(initialStateFilter);
  };

  //Cambiar los valores de lo Inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
  };

  const handleSave = () => {
    // ===============================
    // filtro
    // ===============================
    dispatch({
      type: TYPES_GENERAL.SET_GENERAL_FILTER,
      payload: filter,
    });
  };

  return {
    handleSave,
    handleChange,
    handleReset,
    handleBlur,
    filter,
  };
};
