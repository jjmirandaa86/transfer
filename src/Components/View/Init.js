import { useSelector } from "react-redux";
import Login from "./Login";
import { HookInit } from "../Hook/HookInit";

export const Init = () => {
  const { loadComponents } = HookInit();
  return <>{loadComponents && <Login />}</>;
};
