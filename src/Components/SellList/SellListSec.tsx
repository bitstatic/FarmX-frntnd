import React from 'react'
import styled from 'styled-components'
import SellCard from './SellCard'
import dummy from '/imagedummy.png'

const Container = styled.section`
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

function SellListSec() {
    const orderItems = [
        { id: 0, name: "Name", stockSold: 1, stockLeft: 10, earning: 500, img: dummy },
        { id: 1, name: "Name", stockSold: 2, stockLeft: 10, earning: 600, img: dummy },
        { id: 2, name: "Name", stockSold: 3, stockLeft: 10, earning: 700, img: dummy },
        { id: 7, name: "Name", stockSold: 4, stockLeft: 10, earning: 800, img: dummy },
        { id: 4, name: "Name", stockSold: 5, stockLeft: 10, earning: 900, img: dummy },
        { id: 5, name: "Name", stockSold: 6, stockLeft: 10, earning: 1000, img: dummy },
      ];
      const history = orderItems.map((orderedItem) => (
        <li key={orderedItem.id}>
          <SellCard {...orderedItem} />
        </li>
      ));
    
      return (
        <Container>
          <ul>{history}</ul>
        </Container>
      );
}

export default SellListSec