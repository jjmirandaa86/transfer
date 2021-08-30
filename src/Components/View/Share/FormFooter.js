import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function FormFooter() {
  const { t } = useTranslation();
  return (
    <>
      <Card.Footer className="text-center">
        {"Acertijo"} {" - "}
        <Link to={{ pathname: "https://www.acertijo.dev/" }} target="_blank">
          {"www.acertijo.dev"}
        </Link>
        <br></br>
        {"admin@acertijo.dev"} <br></br>
        {"Derechos reservados"}
      </Card.Footer>
    </>
  );
}
