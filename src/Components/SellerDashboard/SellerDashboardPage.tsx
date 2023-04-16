import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Button from '../Button'
import SaleSec from './SaleSec'

const Container = styled.section`
    height: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2rem;
    > h2{
        font-size: 2rem;
        font-weight: 500;
    }
    > .buttons{
        display: flex;
        gap: 1rem;
        justify-content: center;
        width: fit-content;
    }
    > p{
        font-size: 1.5rem;
        margin-bottom: -1rem;
      }
`

function SellerDashboard() {
    const navigate = useNavigate()
    function nav(path: string) {
        navigate(path)
    }
    return (
    <>
        <Navbar />
        <Container>
            <h1>FarmX</h1>
            <h2>Dashboard</h2>
            <div className='buttons'>
                <Button Text={"Current Sell List"} onClick={() => {nav("sell-list")}}/>
                <Button Text={"Register for Mandi"} onClick={() => {nav("register-page")}}/>
            </div>
            <p>Past Sale:</p>
            <SaleSec />
        </Container>
    </>
  )
}

export default SellerDashboard