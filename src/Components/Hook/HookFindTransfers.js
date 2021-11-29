import { useSelector, useDispatch } from "react-redux";

//Agrego los REDUX
import { TYPES as TYPES_GENERAL } from "../../Library/Redux/Actions/generalActions";

export const HookFindTransfers = () => {
  const dispatch = useDispatch();
  const countryStore = useSelector((store) => store.general.location.country);

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
  };
};
