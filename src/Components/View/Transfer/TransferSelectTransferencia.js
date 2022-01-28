import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { getDateFormat } from "../../../Helpers/Funciones";

const TransferSelectTransferencia = ({ data, bankSelected }) => {
  return (
    <div style={{ "text-align": "left" }}>
      <Card>
        <Card.Header>Datos Transferencia</Card.Header>
        <Card.Body>
          <Row>
            <Col>Cliente:</Col>
            <Col>{data.idCustomer}</Col>
          </Row>
          <Row>
            <Col>Nombre:</Col>
            <Col>{data.nameCustomer}</Col>
          </Row>
          <Row>
            <Col>Banco|:</Col>
            <Col>{bankSelected.name}</Col>
          </Row>
          <Row>
            <Col>Monto:</Col>
            <Col>{data.amount}</Col>
          </Row>
          <Row>
            <Col>Ruta:</Col>
            <Col>{data.route}</Col>
          </Row>
          <Row>
            <Col>Estado:</Col>
            <Col>{data.state}</Col>
          </Row>
          <Row>
            <Col>Creción:</Col>
            <Col>{getDateFormat(data.created_at)}</Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TransferSelectTransferencia;
