import React, { useState } from "react";
import styled from 'styled-components'
import Navbar from '../Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import KeyValuePair from '../KeyValuePair';
import Button from '../Button';

const Container = styled.section`
    min-height: calc( 100vh - 6.5rem);
    height: fit-content;
    margin-top: 5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    .buttons{
        display: flex;
        gap: 1rem;
    }
    .inputs{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: end;
        justify-content: center;
        padding: 1rem 0rem;
        margin-bottom: auto;
        > button{
            padding: 0.5rem 1rem;
        }
        > div{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        input{
            width: 80%;
            font-size: 1.5rem;
            margin: 1rem 0;
            background-color: #F7FEFA;
            width: fit-content;
            border: none;
            border-bottom: 1px solid #000;
            padding: 5px;
            margin: 0.2rem 0rem;
            font-size: 1.25rem;
            :focus{
                outline: none;
            }
        }
    }
`

function PlaceBidPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const {Name, Stock, Payment, address, Date} = location.state

    const [bid , setBid] = useState({
        stock: 0,
        price: 0
    });

    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(parseInt(e.target.value) <= Stock && parseInt(e.target.value) > 0){
            setBid({...bid, stock: parseInt(e.target.value)});
        }
        else{
            setBid({...bid, stock: Stock});
            if(parseInt(e.target.value) > Stock ){
                alert("You can't buy more than available stock");
                e.target.value = Stock.toString();
            }
            if(parseInt(e.target.value) <= 0 ){
                alert("You can't buy less than 1 stock");
                e.target.value = "1";
            }
        }
    };
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(parseInt(e.target.value) > 0 && parseInt(e.target.value) <= Payment)
            setBid({...bid, price: parseInt(e.target.value)});
        else{
            setBid({...bid, price: Payment});
            if(parseInt(e.target.value) <= 0 ){
                alert("You can't bid less than 1");
                e.target.value = "1";
            }
            if(parseInt(e.target.value) >= Payment ){
                e.target.value = Payment.toString();
                alert("You can't bid more than the Buying price");
            }
        }
    };

    function placeBid(path: string) {
        if (path === "-1") {
            navigate(-1)
        }
        else {
            console.log("Bid To be Placed and Data : ", bid) // Data to be read from the form
            navigate(path)
        }
    }
    
  return (
    <>
        <Navbar />
        <Container>
            <h1>{Name}</h1>
            <p>by Farmer's name</p>
            <hr />
            <KeyValuePair Key='Amount to be paid' Value={"₹"+ (bid.price * bid.stock )} />
            <hr />
            <KeyValuePair Key='Pickup Location' Value={address} />
            <hr />
            <KeyValuePair Key='Pickup Date' Value={Date} />
            <hr />
            <div className='inputs'>
                <input onChange={handlePriceChange} placeholder='Bid your Price' id='bid' type='number'/>
                <input onChange={handleStockChange} placeholder='Enter amount of stock' id='want-stock' type='number'/>
            </div>
            <div className='buttons'>
                <Button Text="Cancel" onClick={() => {placeBid("-1")}} />
                <Button Text="Submit" onClick={() => {placeBid("/home/buy/search/product/confirm")}} />
            </div>
        </Container>
    </>

  )
}

export default PlaceBidPage