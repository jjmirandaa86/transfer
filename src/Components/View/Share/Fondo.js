import { Image } from "react-bootstrap";
import { HookFondo } from "../../Hook/HookFondo";
import { useSelector } from "react-redux";

export default function Fondo() {
  const { tamanoHeight, tamanoWidth } = HookFondo();
  const ruta = useSelector((store) => store.general.app.img);

  return (
    <>
      <Image
        src={ruta + "fondo.jpg"}
        style={{
          height: tamanoHeight,
          width: tamanoWidth,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
}
