import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Form, Col } from "react-bootstrap";
import { HookNewTransfers } from "../../Hook/HookNewTransfers";

import IconButton from "../Share/IconButton";

const NewTransfers = (props) => {
  const {
    form,
    file,
    setFile,
    errors,
    loading,
    alertaToast,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = HookNewTransfers();

  const inputRef = useRef();
  const appStore = useSelector((store) => store.general.app);

  //Country
  const countryStore = useSelector((store) => store.general.location.country);
  const listCountry = countryStore.map((el) => {
    return (
      <option key={el.idCountry} value={el.idCountry}>
        {el.name}{" "}
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
          <Card.Header className="text-center">Nuevo Transferencia</Card.Header>
          <Card.Body>
            <Container>
              <Form>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    {/* Country*/}
                    <Form.Group controlId="formCountry">
                      <Form.Label>Pais:</Form.Label>
                      <Form.Control
                        as={"select"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="idCountry"
                        value={form.idCountry}
                        autoFocus
                      >
                        <option key={""} value={""}>
                          {"Selecciona  Pais"}
                        </option>
                        {listCountry}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    {/* Bank*/}
                    <Form.Group controlId="formBank" sm={6}>
                      <Form.Label>Banco:</Form.Label>
                      <Form.Control
                        as={"select"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="idBank"
                        value={form.idBank}
                      >
                        <option key={0} value={0}>
                          {"Selecciona  Banco"}
                        </option>
                        {listBank}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    {/* Customer*/}
                    <Form.Group as={Col} controlId="formIdCustomer">
                      <Form.Label>Cliente</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese codigo Cliente"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="idCustomer"
                        value={form.idCustomer}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    {/* Customer Name*/}
                    <Form.Group as={Col} controlId="formNameCustomer">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre Cliente"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="nameCustomer"
                        value={form.nameCustomer}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    {/* voucher*/}
                    <Form.Group as={Col} controlId="formVoucher">
                      <Form.Label>Factura</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese la serie de la factura"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="serieInvoice"
                        value={form.serieInvoice}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    {/* amount*/}
                    <Form.Group as={Col} controlId="formAmount">
                      <Form.Label>Monto</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el monto"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="amount"
                        value={form.amount}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    {/* ROute*/}
                    <Form.Group controlId="formRoute">
                      <Form.Label>Ruta:</Form.Label>
                      <Form.Control
                        as={"select"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="route"
                        value={form.route}
                      >
                        <option key={0} value={0}>
                          {"Selecciona Ruta"}
                        </option>
                        {listRoute}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    {/* image*/}
                    <Form.Group className="mb-3">
                      <Form.Label>Imagen:</Form.Label>
                      <Form.Control
                        onChange={() => setFile(inputRef.current.files[0])}
                        ref={inputRef}
                        onBlur={handleBlur}
                        id="input-image"
                        type="file"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>

              <div className="d-grid gap-2" style={{ padding: 10 }}>
                <IconButton
                  img={appStore.ico + "save.svg"}
                  title={"Guardar"}
                  handleButton={handleSubmit}
                  size={"sm"}
                />
                <IconButton
                  img={appStore.ico + "cancel.svg"}
                  title={"Cancelar"}
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

export default NewTransfers;
