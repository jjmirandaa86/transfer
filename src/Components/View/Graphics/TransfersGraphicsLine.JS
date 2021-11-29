import { Container } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { HookTransfersGraphicsLine } from "../../Hook/HookTransfersGraphicsLine";
import Cargando from "../share/Cargando";

const TransfersGraphicsLine = (props) => {
  const { datos, titleGraphics, titleGraphicsX, titleGraphicsY } =
    HookTransfersGraphicsLine(props);

  return (
    <>
      <Container>
        {datos.length === 1 ? (
          ""
        ) : (
          <>
            <Chart
              chartType="LineChart"
              loader={<Cargando />}
              data={datos}
              options={{
                legend: { position: "none" },
                hAxis: {
                  title: "Mes",
                },
                vAxis: {
                  title: "Cantidad",
                },
              }}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default TransfersGraphicsLine;
