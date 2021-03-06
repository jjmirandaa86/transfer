import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { HookLogin } from "../Hook/HookLogin";

// //Componentes Grafico UI
import Welcome from "./Share/Welcome";
import Cargando from "../View/Share/Cargando";
import Fondo from "../View/Share/Fondo";
import LoginForm from "../View/Login/LoginForm";
import FormFooter from "../View/Share/FormFooter";
import FormHead from "../View/Share/FormHead";
import AlertaInformativa from "../View/Share/AlertaInformativa";
import "../../App.css";

const Login = () => {
  const {
    loadComponents,
    form,
    errors,
    loading,
    alertaFlotante,
    handleChange,
    handleBlur,
    handleSubmit,
  } = HookLogin();

  const { t } = useTranslation();
  const style = useSelector((store) => store.general.app.style);

  return (
    <>
      <Fondo />
      {alertaFlotante && (
        <>
          <AlertaInformativa status={alertaFlotante} />
        </>
      )}
      {loading && (
        <div className="loader">
          <Cargando />
        </div>
      )}
      {/* Carga el componende de bienvenida */}
      {!loadComponents && <Welcome />}
      {/* Carga la ventana de login*/}
      {loadComponents && (
        <>
          {!loading && (
            <div className="container">
              <div className="vh-100 justify-content-center align-items-center formLogin">
                <Card
                  bg={style.cards.color}
                  text={
                    style.cards.letters.toLowerCase() === "light"
                      ? "dark"
                      : "white"
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
          )}
        </>
      )}
    </>
  );
};

export default Login;
