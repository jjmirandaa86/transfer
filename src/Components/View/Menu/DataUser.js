import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import IconButton from "../Share/IconButton";

const DataUser = (props) => {
  const sessionStore = useSelector((store) => store.user.session);
  const infoStore = useSelector((store) => store.user.info);
  const appStore = useSelector((store) => store.general.app);
  return (
    <>
      <Container style={{ paddingTop: 20 }}>
        <Card
          bg={appStore.style.cards.color}
          text={
            appStore.style.cards.color.toLowerCase() === "light"
              ? "dark"
              : "white"
          }
        >
          <Card.Header className="text-center">Información</Card.Header>
          <Card.Body>
            <Container>
              <Card.Title>Datos de Colaborador:</Card.Title>
              <Form>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    <Form.Group controlId="formId">
                      <Form.Label>Codigo colaborador</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={infoStore.idUser}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={infoStore.firtsName}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={infoStore.lastName}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    <Form.Group controlId="formPosition">
                      <Form.Label>Posición</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={infoStore.position}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formProfile">
                      <Form.Label>Perfil</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={infoStore.profile}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Correo Electronico</Form.Label>
                      <Form.Control
                        type="email"
                        defaultValue={infoStore.email}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>

              <Card.Title>Datos de Session:</Card.Title>
              <Card.Text>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    <Form.Group controlId="formDate">
                      <Form.Label>Ultima conexión</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={sessionStore.date}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formHour">
                      <Form.Label>Hora</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={sessionStore.hour}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Text>
              <div className="d-grid gap-2" style={{ padding: 10 }}>
                <IconButton
                  img={appStore.ico + "cancel.svg"}
                  title={"Salir"}
                  handleButton={() => props.setShowWindow("M")}
                  size={"sm"}
                />
              </div>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default DataUser;
