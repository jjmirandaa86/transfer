import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const RowPerPage = (props) => {
  const ListPagination = () => (
    <>
      <Container fluid="sm">
        <Row>
          <Col>Pagina: {props.data.currentPage}</Col>
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

export default RowPerPage;
