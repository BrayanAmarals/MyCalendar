import Day from "./Day";
import DayPassed from "./DayPassed";
import styled from "styled-components";
import numbers from "./numbers";

const hoje = new Date();

const diaDoAno = Math.floor(
  (hoje - new Date(hoje.getFullYear(), 0, 0)) / 86400000 - 1
);

const diasRestantes = 366 - diaDoAno;

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h1
            style={{
              padding: "0",
              margin: "0",
            }}
          >
            Dia atual: {diaDoAno}
          </h1>
          <h1
            style={{
              padding: "0",
              margin: "0",
            }}
          >
            Dias restantes: {diasRestantes}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <BarraDeProgresso max="100" value={(100 * diaDoAno) / 366}>
            <p>{(100 * diaDoAno) / 366}</p>
          </BarraDeProgresso>
          <h3
            style={{
              padding: "0",
              margin: "0",
            }}
          >
            {Math.floor((100 * diaDoAno) / 366)} %
          </h3>
        </div>
      </div>

      <CalendarContainer>
        {numbers.map((num) => {
          return num > diaDoAno ? (
            <Day number={num} />
          ) : (
            <DayPassed number={num} />
          );
        })}
      </CalendarContainer>
    </>
  );
}

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

const BarraDeProgresso = styled.progress`
  background-color: white;
  color: blue;
  width: 300px;
  height: 60px;
  border: white 3px solid;
  border-radius: 5px;
`;

export default App;
