import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

//Agrego los REDUX
import { TYPES as TYPES_GENERAL } from "../../Library/Redux/Actions/generalActions";

export const HookFindTransfers = () => {
  const dispatch = useDispatch();
  const countryStore = useSelector((store) => store.general.location.country);
  const filterStore = useSelector((store) => store.general.filter);
  const [filter, setFilter] = useState(filterStore);

  //Cambiar los valores de lo Inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSave = () => {
    const filtro = {
      dateInit: "1",
      dateEnd: "1",
      countrySelect: "1",
      regionSelect: 1,
      centerSelect: "1",
      officeSelect: "1",
      routeSelect: 1,
      bankSelect: 1,
      stateTransferSelect: 1,
    };

    // ===============================
    // filtro
    // ===============================
    dispatch({
      type: TYPES_GENERAL.SET_GENERAL_FILTER,
      payload: filtro,
    });
  };

  return {
    handleSave,
    handleChange,
    filter,
  };
};
