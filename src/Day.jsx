import styled from "styled-components";

export default function Day(props) {
  return (
    <DayCard>
      <CardTitle>Dia</CardTitle>
      <CardDay>{props.number}</CardDay>
    </DayCard>
  );
}

const DayCard = styled.div`
  display: flex;
  background-color: #535353;
  border: 2px white solid;
  width: 100px;
  height: 150px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
`;

const CardTitle = styled.p`
  font-size: 24px;
  padding: 0;
  margin: 0;
`;

const CardDay = styled.p`
  font-size: 42px;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;
