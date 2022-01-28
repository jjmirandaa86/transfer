import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toast, Col, Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
//Agrego los REDUX
import { TYPES } from "../../../Library/Redux/Actions/messageActions";
import { messageInitialState } from "../../../Library/Redux/Reducers/messageReducers";

const AlertaInformativa = ({ status }) => {
  const dispatch = useDispatch();
  const appStore = useSelector((store) => store.general.app);
  const typeError = useSelector((store) => store.message.typeError);
  const messageStore = useSelector((store) => store.message.show);

  const errActual = typeError.filter((el) => el.type === messageStore.type);
  const mensaje = typeError[0];

  const [showMsg, setShowMsg] = useState(status);

  return (
    <>
      <div className="alertaInformativa">
        <Toast
          bg={mensaje.color}
          onClose={() => setShowMsg(false)}
          show={showMsg}
          delay={5000}
          autohide
          animation={true}
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            width: 270,
          }}
        >
          <Toast.Header closeButton={false}>
            <Row>
              <Col xs={2}>
                <img
                  src={appStore.ico + mensaje.img}
                  className="rounded mr-3"
                  alt={mensaje.name}
                  width={15}
                  height={15}
                />
              </Col>
              <Col xs={10}>
                <strong className="mr-auto">{messageStore.title}</strong>
              </Col>
            </Row>
          </Toast.Header>
          <Toast.Body>
            <div>{messageStore.body}</div>
            <div style={{ paddingTop: 12 }}>
              {messageStore.date} {" - "} {messageStore.hour}
            </div>
          </Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default AlertaInformativa;
