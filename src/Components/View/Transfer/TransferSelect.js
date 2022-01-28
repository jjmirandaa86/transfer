import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CloseButton,
  Col,
  Row,
  Image,
  Button,
  Tabs,
  Tab,
} from "react-bootstrap";
import { HookTrasferSelect } from "../../Hook/HookTrasferSelect";
import { routesApi } from "../../../Helpers/Constantes";
import TransferSelectColaborador from "./TransferSelectColaborador";
import TransferSelectTransferencia from "./TransferSelectTransferencia";

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
                  <Tabs
                    defaultActiveKey="img"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="img" title="Imagen">
                      <Image
                        src={routesApi.IMAGEN + props.data.image}
                        width={zoomHeight}
                      />
                    </Tab>
                    {aprobador && (
                      <Tab eventKey="col" title="Colaborador">
                        <TransferSelectColaborador infoStore={infoStore} />
                      </Tab>
                    )}
                    <Tab eventKey="tra" title="Transferencia">
                      <TransferSelectTransferencia
                        data={props.data}
                        bankSelected={bankSelected}
                      />
                    </Tab>
                  </Tabs>
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
