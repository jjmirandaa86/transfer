import React from "react";
import { useSelector } from "react-redux";
import { Container, Spinner, Image } from "react-bootstrap";

export default function Cargando() {
  const routeImg = useSelector((store) => store.general.app.img);
  return (
    <>
      <Container>
        <div>
          <Image
            src={routeImg + "logo_app.svg"}
            style={{
              height: 60,
              width: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
        <div style={{ padding: 10 }}>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="danger" />
        </div>
      </Container>
    </>
  );
}
