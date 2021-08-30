import React from "react";
import { useSelector } from "react-redux";
import { Button, Form, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function LoginForm({
  handleChange,
  handleSubmit,
  handleBlur,
  form,
  errors,
}) {
  const { t } = useTranslation();
  const style = useSelector((store) => store.general.app.style);

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{"Codigo colaborador:"}</Form.Label>
          <Form.Control
            type="number"
            placeholder={"Ingresa tu codigo de colaborador"}
            name="idUser"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.idUser}
          />
          {errors.idUser && (
            <Form.Text className="text-muted">
              <Alert variant={style.alert.colorError}>{errors.idUser}</Alert>
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>{"Contraseña: "}</Form.Label>
          <Form.Control
            type="password"
            placeholder={"Ingresa tu contraseña"}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password}
          />
          {errors.password && (
            <Form.Text className="text-muted">
              <Alert variant={style.alert.colorError}>{errors.password}</Alert>
            </Form.Text>
          )}
          <Form.Text>{"No entregues tu contraseña a nadie"}</Form.Text>
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-end"
          controlId="formBasicBotonIngresar"
        >
          <Button variant={style.button.color} onClick={handleSubmit}>
            {"Ingresar"}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
