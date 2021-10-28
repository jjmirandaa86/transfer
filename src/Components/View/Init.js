import { useSelector } from "react-redux";
import Login from "./Login";
import { HookInit } from "../Hook/HookInit";
import Main from "./Main";
import { Welcome } from "./Share/Welcome";

export const Init = () => {
  const { loadComponents } = HookInit();
  return (
    <>
      {!loadComponents && <Welcome />}
      {loadComponents && (
        <>
          <Login />
          <Main />
        </>
      )}
    </>
  );
};
