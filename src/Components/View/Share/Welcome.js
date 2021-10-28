import { Container, Spinner, Row, Col } from "react-bootstrap";
import { HookWelcome } from "../../Hook/HookWelcome";

export const Welcome = () => {
  const { word } = HookWelcome();
  return (
    <>
      <div className={"all_screem"} style={{ backgroundColor: "#000000" }}>
        <span class="fondo_welcome">{word}</span>
      </div>
    </>
  );
};
