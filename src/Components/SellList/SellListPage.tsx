import React from 'react'
import styled from 'styled-components'
import { GoDiffAdded } from 'react-icons/go'
import Navbar from '../Navbar'
import SellListSec from './SellListSec'
import { useNavigate } from 'react-router-dom'

const Container = styled.section`
    height: 100%;
    width: 80%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2rem;
    > .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

    }
`

function SellList() {
    const navigate = useNavigate()
    function nav(path: string){
        navigate(path)
    }

      return (
    <>
        <Navbar />
        <Container>
            <h1>FarmX</h1>
            <div className='top'>
                <h2>Current Sell list</h2>
                <a onClick={() => {nav("/dashboard/add-sell")}} className='add-to-list'>
                    <GoDiffAdded size={30}/>
                </a>
            </div>
            <SellListSec />
        </Container>
    </>
  )
}

export default SellList