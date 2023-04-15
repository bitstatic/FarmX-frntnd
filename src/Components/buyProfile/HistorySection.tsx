import React from "react";
import styled from "styled-components";
import HistoryCard from "./HistoryCard";
import dummy from "/imagedummy.png";

const HistSec = styled.div`
  width: 100%;
  >ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid rgba(61, 61, 61, 0.3);
    border-radius: 5px;
  }
    li{
      width: 100%;
      list-style: none;
    }
`


function HistorySection() {
  const orderItems = [
    { id: 0, Name: "Name", Stock: 1, Mandi: "XYZ", Payment: 500, img: dummy },
    { id: 1, Name: "Name", Stock: 2, Mandi: "XYZ", Payment: 600, img: dummy },
    { id: 2, Name: "Name", Stock: 3, Mandi: "XYZ", Payment: 700, img: dummy },
    { id: 7, Name: "Name", Stock: 4, Mandi: "XYZ", Payment: 800, img: dummy },
    { id: 4, Name: "Name", Stock: 5, Mandi: "XYZ", Payment: 900, img: dummy },
    { id: 5, Name: "Name", Stock: 6, Mandi: "XYZ", Payment: 1000, img: dummy },
  ];
  const history = orderItems.map((orderedItem) => (
    <li key={orderedItem.id}>
      <HistoryCard {...orderedItem} />
    </li>
  ));

  return (
    <HistSec>
      <ul>{history}</ul>
    </HistSec>
  );
}

export default HistorySection;
