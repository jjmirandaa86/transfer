import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { routesApi } from "../../Helpers/Constantes";

//REDUX
import { TYPES } from "../../Library/Redux/Actions/languageActions";
import {
  languageInitialState,
  languageReducers,
} from "../../Library/Redux/Reducers/languageReducers";

export const HookInit = () => {
  const [loadComponents, setLoadComponents] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadComponents(true);
    }, 2000);
  }, []);

  return {
    loadComponents,
  };
};
