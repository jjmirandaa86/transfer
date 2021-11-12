import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";

const DataUser = () => {
  const sessionStore = useSelector((store) => store.user.session);
  const infoStore = useSelector((store) => store.user.info);
  const styleStrore = useSelector((store) => store.general.app.style);

  return (
    <>
      <Container>
        <Card border="primary">
          <Card.Header>Información</Card.Header>
          <Card.Body>
            <Card.Title>Datos de Colaborador:</Card.Title>
            <Card.Text>
              <Form>
                <Row sm="auto" className="mb-3">
                  <Form.Group controlId="formId">
                    <Form.Label>Codigo colaborador</Form.Label>
                    <Form.Control type="text" value={infoStore.idUser} />
                  </Form.Group>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Form.Group controlId="formFirstName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={infoStore.firtsName} />
                  </Form.Group>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" value={infoStore.lastName} />
                  </Form.Group>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Form.Group controlId="formPosition">
                    <Form.Label>Posición</Form.Label>
                    <Form.Control type="text" value={infoStore.position} />
                  </Form.Group>
                  <Form.Group controlId="formProfile">
                    <Form.Label>Perfil</Form.Label>
                    <Form.Control type="text" value={infoStore.profile} />
                  </Form.Group>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" value={infoStore.email} />
                  </Form.Group>
                </Row>
              </Form>
            </Card.Text>
            <Card.Title>Datos de Session:</Card.Title>
            <Card.Text>
              <Row sm="auto" className="mb-3">
                <Form.Group controlId="formDate">
                  <Form.Label>Ultima conexión</Form.Label>
                  <Form.Control type="text" value={sessionStore.date} />
                </Form.Group>
                <Form.Group controlId="formHour">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control type="text" value={sessionStore.hour} />
                </Form.Group>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default DataUser;
