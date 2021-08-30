import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Logo(props) {
  const ruta = useSelector((store) => store.general.app.img);

  return (
    <>
      <Card.Img
        variant="top"
        src={ruta + "tesalia-cbc-logo-new.png"}
        style={{ width: props.pwidth }}
      />{" "}
    </>
  );
}

Logo.defaultProps = {
  pwidth: 100,
  //pheight: 100,
};
