import React, { useState } from "react";
import styled from 'styled-components'
import Navbar from '../Navbar'
import UploadImg from './UploadImg'
import TextField from '../TextField'
import Button from '../Button'
import { useNavigate } from "react-router-dom";

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
  const nav = useNavigate();

  const [sellingData,setSellingData] = useState({
    name: "",
    mcode: "",
    phn: "",
    stock: "",
    ask: "",
    msp: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSellingData({...sellingData, name: e.target.value});
  };
  const handleMcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSellingData({...sellingData, mcode: e.target.value});
  };
  const handlePhnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSellingData({...sellingData, phn: e.target.value});
  };
  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSellingData({...sellingData, stock: e.target.value});
  }
  const handleAskChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSellingData({...sellingData, ask: e.target.value});
  }
  const handleMspChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSellingData({...sellingData, msp: e.target.value});
  }

  function AddToSellList(){
    console.log("Selling Data fetched " ,sellingData);
    console.log("Server Verification request sent : Your item is added to the selling list");
    nav("../dashboard/confirm")
  }

  return (
    <>
        <Navbar />
        <Container>
            <h1>FarmX</h1>
            <h2>Add To Your Selling List</h2>
            <TextField change={handleNameChange} name='Name' id='name' type='text'/>
            <TextField change={handleMcodeChange} name='Mandi Code' id='mcode' type='number'/>
            <TextField change={handlePhnChange} name='Phone Number' id='phn' type='number'/>
            <TextField change={handleStockChange} name='Stock' id='stock' type='number'/>
            <TextField change={handleAskChange} name='Ask Price' id='ask' type='number'/>
            <TextField change={handleMspChange} name='Minimum Selling Price' id='msp' type='number'/>
            <UploadImg />
            <Button Text={"Add"} onClick={() => {AddToSellList()}}/>
        </Container>
    </>
  )
}

export default AddSellPage