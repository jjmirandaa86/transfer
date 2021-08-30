import { Form } from "react-bootstrap";
import { HookLanguage } from "../../Hook/HookLanguage";

const Language = () => {
  const { languages, selectedLenguage, handleLanguage } = HookLanguage();

  return (
    <>
      {languages ? (
        <Form.Control
          as={"select"}
          value={selectedLenguage}
          onChange={handleLanguage}
        >
          {languages.map((lenguage) => {
            const { idLanguage, shortName, name } = lenguage;
            return (
              <option key={idLanguage} value={shortName}>
                {name}
              </option>
            );
          })}
        </Form.Control>
      ) : (
        ""
      )}
    </>
  );
};

export default Language;
