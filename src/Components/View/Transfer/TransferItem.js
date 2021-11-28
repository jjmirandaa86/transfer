import React, { useState } from "react";
import { useSelector } from "react-redux";

import Icon from "../Share/Icon";
// import ExpensiveCard from "./ExpensiveCard";
import { ToggleButtonGroup, ToggleButton, Button } from "react-bootstrap";
import { getDateFormat } from "../../../Helpers/Funciones";
import TransferSelect from "./TransferSelect";

const TransferItem = (data) => {
  const appStore = useSelector((store) => store.general.app);
  const bankStore = useSelector((store) => store.general.bank);

  const [isHovering, setIsHovering] = useState(false);
  const [datoExpensive, setDatoExpensive] = useState({});

  const ListData = () => (
    <>
      {data.data.map((el) => {
        //extrae el banco
        const bankSelected = bankStore.find((bl) => bl.idBank === el.idBank);

        return (
          <tr key={el.idTransfer}>
            <td>{getDateFormat(el.created_at)}</td>
            <td>{bankSelected.name}</td>
            <td>{el.idCustomer + " - " + el.nameCustomer}</td>
            <td>{el.voucher}</td>
            <td>${Number.parseFloat(el.amount).toFixed(2)}</td>
            <td>
              <ToggleButtonGroup type="checkbox" id={el.idTransfer}>
                <Button
                  id={"id" + el.idTransfer + 1}
                  key={"key" + el.idTransfer + 1}
                  value={1}
                  variant="outline-primary"
                  onClick={() => {
                    setIsHovering(true);
                    setDatoExpensive(el);
                  }}
                >
                  <Icon img={appStore.ico + "search.svg"} />
                </Button>
                <Button
                  id={"id" + el.idTransfer + 2}
                  key={"key" + el.idTransfer + 2}
                  value={2}
                  variant="outline-primary"
                  onClick={() => {
                    setIsHovering(true);
                    setDatoExpensive(el);
                  }}
                  disabled={el.state === "I" ? false : true}
                >
                  <Icon img={appStore.ico + "edit.svg"} />
                </Button>
              </ToggleButtonGroup>
            </td>
          </tr>
        );
      })}
    </>
  );

  return (
    <>
      <ListData />
      {isHovering && (
        <>
          <TransferSelect data={datoExpensive} setIsHovering={setIsHovering} />
        </>
      )}
    </>
  );
};

export default TransferItem;
