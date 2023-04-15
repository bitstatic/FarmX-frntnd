import React from 'react'
import styled from 'styled-components'
import HistoryCard from './HistoryCard'

const HistSec = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    width: 80%;
    padding: 1rem;
    border: 1px solid rgba(61, 61, 61, 0.3);
    border-radius: 5px;
`


function HistorySection() {
  return (
    <HistSec >
        <HistoryCard  />
        <HistoryCard  />
        <HistoryCard  />
        <HistoryCard  />
        <HistoryCard  />
        <HistoryCard  />
    </HistSec>
  )
}

export default HistorySection