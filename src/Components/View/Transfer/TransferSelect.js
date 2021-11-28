import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CloseButton,
  Col,
  Row,
  Image,
  Button,
  Badge,
  Table,
} from "react-bootstrap";
import { HookTrasferSelect } from "../../Hook/HookTrasferSelect";
import { routesApi } from "../../../Helpers/Constantes";
import { getDateFormat } from "../../../Helpers/Funciones";

const TransferSelect = (props) => {
  const infoStore = useSelector((store) => store.user.info);

  const {
    aprobador,
    zoomHeight,
    data,
    incrementZoomHeight,
    approveTransfer,
    denyTransfer,
  } = HookTrasferSelect(props.data);

  //Bank
  const bankStore = useSelector((store) => store.general.bank);
  const bankSelected = bankStore.find((bl) => bl.idBank === props.data.idBank);

  //State
  // const stateStore = useSelector((store) => store.general.state);
  // const stateSelected = stateStore.find(
  //   (bl) =>
  //     bl.idCounrty === props.data.idCountry ||
  //     bl.tableReference === "transfers" ||
  //     bl.value === props.data.state
  // );

  return (
    <>
      <div className="showCardExpensive">
        <div className="container">
          <div className="vh-100 justify-content-center align-items-center formLogin">
            <div className="bg-light p-3">
              <CloseButton onClick={() => props.setIsHovering(false)} />
              <Card className="text-center" bg={"light"}>
                <Card.Header>
                  Factura: <strong>{props.data.voucher}</strong>
                  {" - "}Id Interno: {props.data.idTransfer} {"  "}
                  <Button size="sm" onClick={() => incrementZoomHeight("+")}>
                    +
                  </Button>{" "}
                  <Button size="sm" onClick={() => incrementZoomHeight("-")}>
                    -
                  </Button>{" "}
                </Card.Header>
                <Card.Body onDoubleClick={() => props.setIsHovering(false)}>
                  <div>
                    {aprobador && (
                      <>
                        <Button
                          size="sm"
                          variant={"success"}
                          onClick={() => approveTransfer("-")}
                          disabled={
                            data.state === "I" || data.state === "N"
                              ? false
                              : true
                          }
                        >
                          ✓ Aprobar
                        </Button>{" "}
                        <Button
                          size="sm"
                          variant={"danger"}
                          onClick={() => denyTransfer("-")}
                          disabled={
                            data.state === "I" || data.state === "A"
                              ? false
                              : true
                          }
                        >
                          ✗ Negar
                        </Button>
                      </>
                    )}
                  </div>
                  {aprobador && (
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
                  )}
                  <div style={{ "text-align": "left" }}>
                    <Card>
                      <Card.Header>Datos Transferencia</Card.Header>
                      <Card.Body>
                        <Row>
                          <Col>Cliente:</Col>
                          <Col>{props.data.idCustomer}</Col>
                        </Row>
                        <Row>
                          <Col>Nombre:</Col>
                          <Col>{props.data.nameCustomer}</Col>
                        </Row>
                        <Row>
                          <Col>Banco|:</Col>
                          <Col>{bankSelected.name}</Col>
                        </Row>
                        <Row>
                          <Col>Monto:</Col>
                          <Col>{props.data.amount}</Col>
                        </Row>
                        <Row>
                          <Col>Ruta:</Col>
                          <Col>{props.data.route}</Col>
                        </Row>
                        <Row>
                          <Col>Estado:</Col>
                          <Col>{props.data.state}</Col>
                        </Row>
                        <Row>
                          <Col>Creción:</Col>
                          <Col>{getDateFormat(props.data.created_at)}</Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </div>

                  <Row>
                    <Col xs={12} md={12}>
                      <Image
                        src={routesApi.IMAGEN + props.data.image}
                        width={zoomHeight}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferSelect;
