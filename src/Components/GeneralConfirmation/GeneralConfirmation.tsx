import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import Navbar from '../Navbar'
import confirm from "/confirm.svg"
import Button from '../Button'

const Main = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
    gap: 1rem;
    > h1{
        font-size: 2.5rem;
        font-weight: 400;
    }
    > button{
        margin-top: 1rem;
    }
`

function ConfirmationPage() {
    const navigation = useNavigate()
    function goToHome() {
        navigation("/home")
    }
    return (
    <>
        <Navbar />
        <Main>
            <IoCheckmarkDoneCircleOutline  size={150}/>
            <h1>Success</h1>
            <Button Text="Go to Home"  onClick={() => {goToHome()}}/>
        </Main>
    </>
  )
}

export default ConfirmationPage