import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ShowRowFromTo = (props) => {
  const ListPagination = () => (
    <>
      <Container fluid="sm">
        <Row>
          {props.data.from}
          {"-"}
          {props.data.toPage}
          {" de "}
          {props.data.totalPage}
        </Row>
      </Container>
    </>
  );

  return (
    <>
      <ListPagination />
    </>
  );
};

export default ShowRowFromTo;
