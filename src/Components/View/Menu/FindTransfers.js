import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Card, Row, Col, Form } from "react-bootstrap";
import IconButton from "../Share/IconButton";
import { HookFindTransfers } from "../../Hook/HookFindTransfers";

const FindTransfers = (props) => {
  const { handleSave, handleChange, handleReset, handleBlur, filter } =
    HookFindTransfers();

  const appStore = useSelector((store) => store.general.app);

  //Country
  const countryStore = useSelector((store) => store.general.location.country);
  const listCountry = countryStore.map((el) => {
    return (
      <option key={el.idCountry} value={el.idCountry}>
        {el.idCountry + "-" + el.name}{" "}
      </option>
    );
  });

  //Region
  const regionStore = useSelector((store) => store.general.location.region);
  const listRegion = regionStore.map((el) => {
    return (
      <option key={el.idRegion} value={el.idRegion}>
        {el.idRegion + "-" + el.name}{" "}
      </option>
    );
  });

  //Centro
  const centroStore = useSelector((store) => store.general.location.center);
  const listCentro = centroStore.map((el) => {
    return (
      <option key={el.idCenter} value={el.idCenter}>
        {el.idCenter + "-" + el.name}{" "}
      </option>
    );
  });

  //Oficina
  const oficinaStore = useSelector((store) => store.general.location.office);
  const listOficina = oficinaStore.map((el) => {
    return (
      <option key={el.idOffice} value={el.idOffice}>
        {el.idOffice + "-" + el.name}{" "}
      </option>
    );
  });

  //Route
  const routeStore = useSelector((store) => store.general.location.route);
  const listRoute = routeStore.map((el) => {
    return (
      <option key={el.idRoute} value={el.idRoute}>
        {el.idRoute}
        {"-"}
        {el.name}
      </option>
    );
  });

  //Bank
  const bankStore = useSelector((store) => store.general.bank);
  const listBank = bankStore.map((el) => {
    return (
      <option key={el.idBank} value={el.idBank}>
        {el.name}{" "}
      </option>
    );
  });

  //State
  let stateStore = useSelector((store) => store.general.states);
  stateStore = stateStore.filter(
    (el) => el.tableReference.toUpperCase() === "transfers".toUpperCase()
  );
  const listStates = stateStore.map((el) => {
    return (
      <option key={el.id} value={el.id}>
        {el.id + "-" + el.name}{" "}
      </option>
    );
  });

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
          <Card.Header className="text-center">Filtro</Card.Header>
          <Card.Body>
            <Container>
              <Card.Text>
                <Form>
                  <Row sm="auto" className="mb-3">
                    <Col sm={6}>
                      <Form.Group controlId="findFechaInicial">
                        <Form.Label>Fecha Inicial:</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="date"
                          name="dateStart"
                          value={filter.dateStart}
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="findFechaFinal">
                        <Form.Label>Fecha Final:</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="date"
                          name="dateEnd"
                          value={filter.dateEnd}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row sm="auto" className="mb-3">
                    <Col sm={6}>
                      <Form.Group controlId="findCountry">
                        <Form.Label>Pais:</Form.Label>
                        <Form.Control
                          as={"select"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="idCountry"
                          value={filter.idCountry}
                        >
                          <option key={""} value={""}>
                            {"Selecciona  Pais"}
                          </option>
                          {listCountry}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="findRegion" sm={6}>
                        <Form.Label>Region:</Form.Label>
                        <Form.Control
                          as={"select"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="idRegion"
                          value={filter.idRegion}
                        >
                          <option key={0} value={0}>
                            {"Selecciona Region"}
                          </option>
                          {listRegion}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row sm="auto" className="mb-3">
                    <Col sm={6}>
                      <Form.Group controlId="findCenter">
                        <Form.Label>Centro:</Form.Label>
                        <Form.Control
                          as={"select"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="idCenter"
                          value={filter.idCenter}
                        >
                          <option key={""} value={""}>
                            {"Selecciona Centro"}
                          </option>
                          {listCentro}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="findOffice" sm={6}>
                        <Form.Label>Oficina:</Form.Label>
                        <Form.Control
                          as={"select"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="idOffice"
                          value={filter.idOffice}
                        >
                          <option key={0} value={0}>
                            {"Selecciona Oficina"}
                          </option>
                          {listOficina}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row sm="auto" className="mb-3">
                    <Col sm={6}>
                      <Form.Group controlId="findRoute">
                        <Form.Label>Ruta:</Form.Label>
                        <Form.Control
                          as={"select"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="idRoute"
                          value={filter.idRoute}
                        >
                          <option key={""} value={""}>
                            {"Selecciona Ruta"}
                          </option>
                          {listRoute}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="findBank" sm={6}>
                        <Form.Label>Banco:</Form.Label>
                        <Form.Control
                          as={"select"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="idBank"
                          value={filter.idBank}
                        >
                          <option key={0} value={0}>
                            {"Selecciona Banco"}
                          </option>
                          {listBank}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row sm="auto" className="mb-3">
                    <Col sm={6}>
                      <Form.Group controlId="findState" sm={6}>
                        <Form.Label>Estado Transferencia:</Form.Label>
                        <Form.Control
                          as={"select"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="idState"
                          value={filter.idState}
                        >
                          <option key={0} value={0}>
                            {"Selecciona Estado"}
                          </option>
                          {listStates}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Text>
              <div className="d-grid gap-2" style={{ padding: 10 }}>
                <IconButton
                  img={appStore.ico + "save.svg"}
                  title={"Guardar"}
                  handleButton={() => {
                    handleSave();
                    props.setShowWindow("M");
                  }}
                  size={"sm"}
                />
                <IconButton
                  img={appStore.ico + "reset.svg"}
                  title={"Reset"}
                  handleButton={() => {
                    handleReset();
                  }}
                  size={"sm"}
                />
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

export default FindTransfers;
