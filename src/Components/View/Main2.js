import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";

// import ExpensiveGraphicsTorta from "./Graphics/ExpensiveGraphicsTorta";
// import ExpensiveGraphics from "./Graphics/ExpensiveGraphics";
// import ExpensiveGraphicsLine from "./Graphics/ExpensiveGraphicsLine";
// import Expensive from "./main/Expensive";
//
//import FindParameter from "./Menu/FindParameter";
// import ShowUser from "./Menu/ShowUser";

const Main2 = () => {
  // //Parametros
  // const idCountry = "EC";
  // const idUser = 500857;
  // const dateFirst = "2021-03-01";
  // const dateEnd = "2021-08-30";
  // const token =
  //   "WeKHSYaSd1aLTd0K4Qz77kcallnDzyPTmkKKa702SA5L9YEGTfHI8Nbz6LNEJq7Sg55OvbzxUzNHRKGwrGO8xZ2BeR8ehqMSziG8SRJ4QsLASyrBHebqlpSeP61nCNTr8arijxzFRMeRQgl14lk0McXold34LHPiBJU4a9ZWBvsCmglPnbD5MAqfAcDS3Q8cHDOMY9Mmvgpq0CEwFhwHwDPpLgPlGfO7F9S9cQ67cmcpuRNbpFKp97YHphkICll";

  return (
    <>
      {/* Muestra el contenedor de los datos */}
      {/* 
      {showWindow === "M" && (
        <Container>
          <Row>
            <Col sm={12}>
              <br></br>
              <Expensive />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <ExpensiveGraphicsTorta />
            </Col>
            <Col sm={6}>
              <ExpensiveGraphics />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <ExpensiveGraphicsLine />
            </Col>
          </Row>
        </Container>
      )} */}

      {/* Muestra la pantalla de filtro */}
      {/* {showWindow === "F" && <FindParameter setShowWindow={setShowWindow} />} */}
      {/* Muestra la pantalla de datos del usuario */}
      {/* {showWindow === "U" && <ShowUser setShowWindow={setShowWindow} />} */}
    </>
  );
};

export default Main2;
