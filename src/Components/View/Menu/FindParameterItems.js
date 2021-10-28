import { useEffect } from "react";
import { Row, Form, Col } from "react-bootstrap";
import IconButton from "../Share/IconButton";
import { HookFilter } from "../../Hook/HookFilter";

const FindParameterItems = (props) => {
  const { typeEntry, states, handleSave } = HookFilter();
  // const ComboTypeEntry = [];

  // useEffect(
  //   (ComboTypeEntry) => {
  //     ComboTypeEntry = () => {
  //       <select>
  //         {typeEntry.map(function (el) {
  //           return <option value={el.idTypeEntry}>{el.name}</option>;
  //         })}
  //       </select>;
  //     };
  //   },
  //   [typeEntry]
  // );

  // console.log("hola desde fiend");
  // console.log(typeEntry);
  // console.log(states);

  return (
    <>
      {/* {typeEntry && <ComboTypeEntry />}  */}

      <Form>
        <Row>
          <Col xs={12} sm={6} lg={6}>
            <Form.Control
              id="floatingInputDateInvoice"
              type="date"
              name="dateInvoice"
              /* onChange={handleChange}
              value={form.dateInvoice}
              onBlur={handleBlur}
              isValid={form.dateInvoice && !errors.dateInvoice} */
            />
            <label htmlFor="floatingInputCustom">Desde:</label>
            {/* {errors.dateInvoice && (
              <Form.Text className="text-muted">
              <Alert
              variant={process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA}
              >
              {errors.dateInvoice}
              </Alert>
              </Form.Text>
            )} */}
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <Form.Control
              id="floatingInputDateInvoice"
              type="date"
              name="dateInvoice"
              /* onChange={handleChange}
              value={form.dateInvoice}
              onBlur={handleBlur}
              isValid={form.dateInvoice && !errors.dateInvoice} */
            />
            <label htmlFor="floatingInputCustom">Hasta:</label>
            {/* {errors.dateInvoice && (
              <Form.Text className="text-muted">
                <Alert
                  variant={process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA}
                >
                  {errors.dateInvoice}
                </Alert>
              </Form.Text>
            )} */}
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={6}>
            controlId="floatingSelectGrid" label="Tipo de Gasto"
            className="mb-1" >
            <Form.Select
              aria-label="Floating label select example"
              name="idTypeEntry"
              /* onChange={handleChange}
              onBlur={handleBlur}
              value={form.idTypeEntry}
              isValid={form.idTypeEntry && !errors.idTypeEntry} */
              autoFocus
            >
              <option value="">Todos</option>
              <option value="1">Combustible Vehículo</option>
              <option value="2">Deprec Vehículo Empleado</option>
              <option value="3">Reembolso Alimentación</option>
              <option value="4">Reembolso Movilización</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <Form.Select
              aria-label="Floating label select example"
              name="idTypeEntry"
              /*  onChange={handleChange}
              onBlur={handleBlur}
              value={form.idTypeEntry}
              isValid={form.idTypeEntry && !errors.idTypeEntry} */
              autoFocus
            >
              <option value="">Todos</option>
              <option value="I">Ingresada</option>
              <option value="R">Rechazada</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <IconButton
              img={"/Media/Ico/save.svg"}
              title={"Guardar"}
              handleButton={handleSave}
              size={"sm"}
            />{" "}
            <IconButton
              img={"/Media/Ico/cancel.svg"}
              title={"Cancelar"}
              handleButton={() => props.setShowWindow("M")}
              size={"sm"}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FindParameterItems;

//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>{"Codigo colaborador:"}</Form.Label>
//     <Form.Control
//       type="number"
//       placeholder={"Ingresa tu codigo de colaborador"}
//       name="idUser"
//       onChange={handleChange}
//       onBlur={handleBlur}
//       value={form.idUser}
//     />
//     {errors.idUser && (
//       <Form.Text className="text-muted">
//         <Alert variant={style.alert.colorError}>{errors.idUser}</Alert>
//       </Form.Text>
//     )}
//   </Form.Group>
//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>{"Contraseña: "}</Form.Label>
//     <Form.Control
//       type="password"
//       placeholder={"Ingresa tu contraseña"}
//       name="password"
//       onChange={handleChange}
//       onBlur={handleBlur}
//       value={form.password}
//     />
//     {errors.password && (
//       <Form.Text className="text-muted">
//         <Alert variant={style.alert.colorError}>{errors.password}</Alert>
//       </Form.Text>
//     )}
//     <Form.Text>{"No entregues tu contraseña a nadie"}</Form.Text>
//   </Form.Group>
//   <Form.Group
//     className="d-flex justify-content-end"
//     controlId="formBasicBotonIngresar"
//   >
//     <Button variant={style.button.color} onClick={handleSubmit}>
//       {"Ingresar"}
//     </Button>
//   </Form.Group>
