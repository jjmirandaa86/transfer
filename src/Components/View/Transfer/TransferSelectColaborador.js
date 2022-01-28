import React from "react";
import { Card, Col, Row, Accordion, Alert } from "react-bootstrap";

const TransferSelectColaborador = ({ infoStore }) => {
  return (
    <>
      <div style={{ "text-align": "left" }}>
        <Card>
          <Card.Header>Datos Colaborador</Card.Header>
          <Card.Body>
            <Row>
              <Col>Colaborador:</Col>
              <Col>{infoStore.idUser}</Col>
            </Row>
            <Row>
              <Col>Nombre:</Col>
              <Col>
                {infoStore.firtsName} {infoStore.lastName}
              </Col>
            </Row>
            <Row>
              <Col>Posición:</Col>
              <Col>{infoStore.position}</Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default TransferSelectColaborador;
