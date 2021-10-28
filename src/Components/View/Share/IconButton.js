import React from "react";
import { Image, Button } from "react-bootstrap";

const IconButton = (props) => {
  return (
    <>
      <Button variant="primary" size={props.size} onClick={props.handleButton}>
        <Image
          src={props.img}
          style={{
            height: props.xheight,
            width: props.xwidth,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        />{" "}
        {props.title}
      </Button>
    </>
  );
};

export default IconButton;

IconButton.defaultProps = {
  img: 100,
  xheight: 20,
  xwidth: 20,
};
