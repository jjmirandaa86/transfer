import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Form, Col } from "react-bootstrap";
import { HookNewTransfers } from "../../Hook/HookNewTransfers";

import IconButton from "../Share/IconButton";

const NewTransfers = (props) => {
  const {
    form,
    file,
    setFiles,
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
      <option key={el.idCountry} value={el.name.toLowerCase()}>
        {el.name}{" "}
      </option>
    );
  });

  //Bank
  const bankStore = useSelector((store) => store.general.bank);
  const listBank = bankStore.map((el) => {
    return (
      <option key={el.idBank} value={el.name.toLowerCase()}>
        {el.name}{" "}
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
                      <Form.Control as={"select"}>{listCountry}</Form.Control>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    {/* Bank*/}
                    <Form.Group controlId="formBank" sm={6}>
                      <Form.Label>Banco:</Form.Label>
                      <Form.Control as={"select"}>{listBank}</Form.Control>
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
                        type="number"
                        placeholder="Ingrese la serie de la factura"
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
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row sm="auto" className="mb-3">
                  <Col sm={6}>
                    {/* image*/}
                    <Form.Group className="mb-3">
                      <Form.Control
                        onChange={() => setFiles(inputRef.current.files[0])}
                        ref={inputRef}
                        id="input"
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

// import { HookNewExpensive } from "../../Hook/HookNewExpensive";
// import Cargando from "../share/Cargando";
// import AlertaInformativa from "../share/AlertaInformativa";

// const initialForm = {
//   idExpense: 0,
//   idCountry: "EC",
//   idUser: 500857,
//   idTypeEntry: 0,
//   idSupplier: "",
//   nameSupplier: "",
//   serieInvoice: "",
//   dateInvoice: "1900/01/01",
//   amount: "",
//   image: "",
//   state: "A",
// };

// const NewExpensive = (props) => {

//   return (
//     <>
//       {alertaToast.estado && (
//         <AlertaInformativa
//           titulo={alertaToast.titulo}
//           fechaHora={alertaToast.fechaHora}
//           mensaje={alertaToast.mensaje}
//           estado={alertaToast.estado}
//           iconoError={alertaToast.iconoError}
//         />
//       )}
//       {loading && (
//         <div className="loader">
//           <Cargando />
//         </div>
//       )}
//       {!loading && (

//       )}
//     </>
//   );
// };

// export default NewExpensive;
