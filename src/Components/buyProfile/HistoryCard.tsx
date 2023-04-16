import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  // padding: 0.5rem;
  gap: 0.1rem;
  border: 1px solid rgba(61, 61, 61, 0.3);
  border-radius: 5px;
  > .hist-card-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    > img {
      border-radius: 5px;
      width: 5.5rem;
    }
    > .card-text {
      width: 100%;
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      > .row {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
`;

interface Props {
  Name: string;
  Stock: number;
  Payment: number;
  Mandi: string;
  img: string;
}

function HistoryCard({ ...prop }: Props) {
  return (
    <Card>
      <div className="hist-card-container">
        <img src={prop.img} alt="" />
        <div className="card-text">
          <h3>{prop.Name}</h3>
          <div className="row">
            <p>Stock : {prop.Stock}</p>
            <p>Payment : {"₹ "+prop.Payment}</p>
          </div>
          <p>Mandi : {prop.Mandi}</p>
        </div>
      </div>
    </Card>
  );
}

export default HistoryCard;
