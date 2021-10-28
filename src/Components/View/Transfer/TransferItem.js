import React, { useState } from "react";
import Icon from "../Share/Icon";
// import ExpensiveCard from "./ExpensiveCard";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const TransferItem = (data) => {
  const [isHovering, setIsHovering] = useState(false);
  const [datoExpensive, setDatoExpensive] = useState({});

  const ListData = () => (
    <>
      {data.data.map((element) => {
        return (
          <tr key={element.idExpense}>
            <td>{element.serieInvoice}</td>
            <td>{element.dateInvoice}</td>
            <td>$ {Number.parseFloat(element.amount).toFixed(2)}</td>
            <td>{element.typeEntryName}</td>
            <td>{element.stateName}</td>
            <td>
              <ToggleButtonGroup type="checkbox" id={element.idExpense}>
                <ToggleButton
                  id={"id" + element.idExpense + 1}
                  key={"key" + element.idExpense + 1}
                  value={1}
                  variant="outline-primary"
                  onClick={() => {
                    setIsHovering(true);
                    setDatoExpensive(element);
                  }}
                >
                  <Icon img={"/Media/Ico/search.svg"} />
                </ToggleButton>
                <ToggleButton
                  id={"id" + element.idExpense + 2}
                  key={"key" + element.idExpense + 2}
                  value={2}
                  variant="outline-primary"
                  onClick={() => {
                    setIsHovering(true);
                    setDatoExpensive(element);
                  }}
                  disabled={element.state === "I" ? false : true}
                >
                  <Icon img={"/Media/Ico/edit.svg"} />
                </ToggleButton>
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
          {/* <ExpensiveCard
            REACT_APP_EXPENSE_PUT_STATE={data.REACT_APP_EXPENSE_PUT_STATE}
            data={datoExpensive}
            setIsHovering={setIsHovering}
          /> */}
        </>
      )}
    </>
  );
};

export default TransferItem;
