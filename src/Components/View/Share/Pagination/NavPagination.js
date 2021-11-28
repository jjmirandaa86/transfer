import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Pagination, Row, Col } from "react-bootstrap";
import Icon from "../Icon";

const NavPagination = (props) => {
  const appStore = useSelector((store) => store.general.app);

  const ListPagination = () => (
    <>
      <Pagination size="sm">
        {props.data.prevPageUrl === null ? (
          <Pagination.Item disabled>
            <Icon img={appStore.ico + "first.svg"} />
          </Pagination.Item>
        ) : (
          <Pagination.Item
            onClick={() => props.handleChangeUrl(props.data.firstPageUrl)}
          >
            <Icon img={appStore.ico + "first.svg"} />
          </Pagination.Item>
        )}
        {props.data.prevPageUrl === null ? (
          <Pagination.Item disabled>
            <Icon img={appStore.ico + "back.svg"} />
          </Pagination.Item>
        ) : (
          <Pagination.Item
            onClick={() => props.handleChangeUrl(props.data.prevPageUrl)}
          >
            <Icon img={appStore.ico + "back.svg"} />
          </Pagination.Item>
        )}
        {props.data.nextPageUrl === null ? (
          <Pagination.Item disabled>
            <Icon img={appStore.ico + "next.svg"} />
          </Pagination.Item>
        ) : (
          <Pagination.Item
            onClick={() => props.handleChangeUrl(props.data.nextPageUrl)}
          >
            <Icon img={appStore.ico + "next.svg"} />
          </Pagination.Item>
        )}
        {props.data.nextPageUrl === null ? (
          <Pagination.Item disabled>
            <Icon img={appStore.ico + "last.svg"} />
          </Pagination.Item>
        ) : (
          <Pagination.Item
            onClick={() => props.handleChangeUrl(props.data.lastPageUrl)}
          >
            <Icon img={appStore.ico + "last.svg"} />
          </Pagination.Item>
        )}
      </Pagination>
    </>
  );

  return (
    <>
      <ListPagination />
    </>
  );
};

export default NavPagination;
