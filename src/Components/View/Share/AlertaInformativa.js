import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toast, Col, Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
//Agrego los REDUX
import { TYPES } from "../../../Library/Redux/Actions/messageActions";
import { messageInitialState } from "../../../Library/Redux/Reducers/messageReducers";

export default function AlertaInformativa() {
  const dispatch = useDispatch();
  const [showMsg, setShowMsg] = useState(
    useSelector((store) => store.message.show.state)
  );
  const messageStore = useSelector((store) => store.message);
  const type = useSelector((store) => store.message.show.type);
  const typeError = messageStore.typeError.filter((el) => el.type === type);
  const mensaje = typeError[0];
  const appSelector = useSelector((store) => store.general.app);

  //ocultar el mensaje en automatico
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: TYPES.MESSAGE_DELETE,
        payload: messageInitialState,
      });
      setShowMsg(false);
    }, messageStore.show.timeShow);
  }, []);

  return (
    <>
      {showMsg && (
        <Container>
          <div className="alertaInformativa">
            <Toast
              bg={mensaje.color}
              onClose={() => false}
              show={true}
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
                      src={appSelector.ico + mensaje.img}
                      className="rounded mr-3"
                      alt={mensaje.name}
                      width={15}
                      height={15}
                    />
                  </Col>
                  <Col xs={10}>
                    <strong className="mr-auto">
                      {messageStore.show.title}
                    </strong>
                  </Col>
                </Row>
              </Toast.Header>
              <Toast.Body>
                <div>{messageStore.show.body}</div>
                <div style={{ paddingTop: 12 }}>
                  {messageStore.show.date} {" - "} {messageStore.show.hour}
                </div>
              </Toast.Body>
            </Toast>
          </div>
        </Container>
      )}
    </>
  );
}
