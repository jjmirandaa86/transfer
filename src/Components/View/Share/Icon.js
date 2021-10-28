import React from "react";
import { Image } from "react-bootstrap";

const Icon = (props) => {
  return (
    <>
      <Image
        src={props.img}
        style={{
          height: props.xheight,
          width: props.xwidth,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
};

export default Icon;

Icon.defaultProps = {
  img: 100,
  xheight: 20,
  xwidth: 20,
};
