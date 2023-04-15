import React from 'react'
import styled from 'styled-components'
import HistoryCard from './HistoryCard'

const HistSec = styled.div`
  >ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    width: 80%;
    padding: 1rem;
    border: 1px solid rgba(61, 61, 61, 0.3);
    border-radius: 5px;
  }
    li{
      list-style: none;
    }
`


function HistorySection() {
  return (
    <HistSec >
      <ul>
        <li><HistoryCard /></li>
        <li><HistoryCard /></li>
        <li><HistoryCard /></li>
        <li><HistoryCard /></li>
        <li><HistoryCard /></li>
        <li><HistoryCard /></li>
      </ul>
    </HistSec>
  )
}

export default HistorySection