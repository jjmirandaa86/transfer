import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Menu from "../View/Menu/Menu";
import Transfer from "./Transfer/Transfer";
import Login from "./Login";
import NewTransfers from "../View/Menu/NewTransfers";
import FindTransfers from "../View/Menu/FindTransfers";
import DataUser from "../View/Menu/DataUser";

const Main = () => {
  const [showWindow, setShowWindow] = useState("M");
  const sessionStore = useSelector((store) => store.user.session);
  const infoStore = useSelector((store) => store.user.info);
  return (
    <>
      {/* valido el login, si no redirecciono a login */}
      {sessionStore.api_token === undefined ? (
        <>
          <Login />
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Menu setShowWindow={setShowWindow} />
          {/* Muestra en la ventana las opciones del menu */}
          {/* Nuevo transfers */}
          {showWindow === "N" && <NewTransfers setShowWindow={setShowWindow} />}
          {/* buscar transfers */}
          {showWindow === "F" && (
            <FindTransfers setShowWindow={setShowWindow} />
          )}
          {/* datos del usuario */}
          {showWindow === "D" && <DataUser setShowWindow={setShowWindow} />}

          {/* muestra grid transferencias */}
          {showWindow === "M" && <Transfer />}
        </>
      )}

      {/* {sessionStore.api_token && <div className="main">Hello</div>}
      {!sessionStore.api_token && <Redirect to="/" />} */}
    </>
  );
};

export default Main;
