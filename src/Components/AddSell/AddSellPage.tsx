import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import UploadImg from './UploadImg'
import TextField from '../TextField'
import Button from '../Button'

const Container = styled.section`
    height: 100%;
    margin-top: 5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2rem;

`

function AddSellPage() {
  return (
    <>
        <Navbar />
        <Container>
            <h1>FarmX</h1>
            <h2>Add To Your Selling List</h2>
            <TextField name='Name' id='name' type='text'/>
            <TextField name='Mandi Code' id='mcode' type='text'/>
            <TextField name='Phone Number' id='phn' type='text'/>
            <TextField name='Stock' id='stock' type='text'/>
            <TextField name='Ask Price' id='ask' type='text'/>
            <TextField name='Minimum Selling Price' id='msp' type='text'/>
            <UploadImg />
            <Button Text={"Add"} onClick={() => {}}/>
        </Container>
    </>
  )
}

export default AddSellPage