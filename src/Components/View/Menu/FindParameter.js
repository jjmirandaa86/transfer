import React, { useState } from "react";

import {
  Card,
  CloseButton,
  Container,
  Row,
  Form,
  FloatingLabel,
  Alert,
} from "react-bootstrap";
import FindParameterItems from "./FindParameterItems";

const FindParameter = (props) => {
  return (
    <>
      <Container style={{ paddingTop: 20 }}>
        <Card>
          <Card.Header as="h5">Filtro</Card.Header>
          <Card.Body>
            <Card.Title>Datos:</Card.Title>
            <Card.Text>
              <FindParameterItems setShowWindow={props.setShowWindow} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default FindParameter;
