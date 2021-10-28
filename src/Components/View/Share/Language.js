import { Form } from "react-bootstrap";
import { HookLanguage } from "../../Hook/HookLanguage";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { languages, selectedLenguage, handleLanguage } = HookLanguage();
  const { t } = useTranslation();

  return (
    <>
      {/* {t("app")} */}
      {languages ? (
        <Form.Control
          as={"select"}
          value={selectedLenguage}
          onChange={handleLanguage}
        >
          {languages.map((lenguage) => {
            const { idLanguage, shortName, name } = lenguage;
            return (
              <option key={idLanguage} value={shortName.toLowerCase()}>
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
