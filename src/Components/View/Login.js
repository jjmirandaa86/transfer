import React from "react";
// import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { Card } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
import { HookLogin } from "../Hook/HookLogin";

// //Componentes Grafico UI
import Cargando from "../View/Share/Cargando";
import Fondo from "../View/Share/Fondo";
// import LoginForm from "./login/LoginForm";
// import FormFooter from "./share/FormFooter";
// import FormHead from "./share/FormHead";
import AlertaInformativa from "../View/Share/AlertaInformativa";
// import "../../App.css";
// import { styleApp } from "../../Helpers/Constantes";

const Login = () => {
  const {
    form,
    errors,
    loading,
    mensaje,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = HookLogin();

  // const { t } = useTranslation();
  // const style = useSelector((store) => store.general.app.style);

  return (
    <>
      <Fondo />
      {loading && (
        <div className="loader">
          <Cargando />
        </div>
      )}
      {mensaje && <AlertaInformativa />}

      {/* {response && <Redirect to="/main" />}

      
      
      {!loading && (
        <div className="container">
          <div className="vh-100 justify-content-center align-items-center formLogin">
            <Card
              bg={style.cards.bolor}
              text={
                style.cards.letters.toLowerCase() === "light" ? "dark" : "white"
              }
            >
              <FormHead />
              <Card.Body>
                <Card.Title className="text-center">
                  {"Inicia Session"}
                </Card.Title>
                <Card.Text>
                  <LoginForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleBlur={handleBlur}
                    form={form}
                    errors={errors}
                  />
                </Card.Text>
              </Card.Body>
              <FormFooter />
            </Card>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Login;
