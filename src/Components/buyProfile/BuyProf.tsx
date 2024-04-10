import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import SearchSection from './SearchSection'
import HistorySection from './HistorySection'

const PageLayout = styled.section`
    display: flex;
    height: fit-content;
    position: relative;
    top: 5rem;
    width: 80%;
    padding-bottom: 1rem;
    justify-content: start;
    align-items: center;
    gap: 3rem;
    flex-direction: column;
    >h1{
        // margin-top: 15rem;
        font-size: 3rem;
        // padding: 1rem;
    }
    >h2{
        font-size: 2.5rem;
        margin-bottom: -1rem;
    }
`



function BuyProf() {
  return (
    <>
        <Navbar />
        <PageLayout>
            <h1>Harvest Hive</h1>
            <SearchSection />
            <h2>Your Orders</h2>
            <HistorySection />
        </PageLayout>
    </>
  )
}

export default BuyProf