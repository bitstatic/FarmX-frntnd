import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import SearchSection from './SearchSection'
import HistorySection from './HistorySection'

const PageLayout = styled.section`
    display: flex;
    height: 100%;
    justify-content: start;
    align-items: center;
    gap: 3.5rem;
    flex-direction: column;
    >h1{
        font-size: 3.5rem;
        padding: 1rem;
    }
    >div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 5rem;
    }
`



function BuyProf() {
  return (
    <>
        <Navbar />
        <PageLayout>
            <h1>FarmX</h1>
            <SearchSection />
            <HistorySection />
        </PageLayout>
    </>
  )
}

export default BuyProf