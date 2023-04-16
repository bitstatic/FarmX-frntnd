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
    #want-stock{
        margin-bottom: auto;
        width: 50%; 
        min-width: 13rem;
        font-size: 1.5rem;
        background-color: #fff;
        border: none;
        border-bottom: 1px solid #000;
        padding: 5px;
        font-size: 1.25rem;
        :focus{
            outline: none;
        }
    }
    }
`

function PlaceBuyPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const {Name, Stock, Payment, address, Date} = location.state

    const [wantStock, setWantStock] = useState(1);
    
    const handleWantStock = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (parseInt(event.target.value) <= Stock && parseInt(event.target.value) > 0) {
            setWantStock(parseInt(event.target.value));
        }
        else {
            if(parseInt(event.target.value) > Stock){
                alert("You can't buy more than available stock");
                event.target.value = Stock.toString();
            }
            if(parseInt(event.target.value) < 1){
                alert("You can't buy less than 1 stock");
                event.target.value = "1";
            }
        }

    };

    function placeBid(path: string) {
        if (path === "-1") {
            navigate(-1)
        }
        else {
            console.log("Bid To be Placed and Data is : ", wantStock) // Data to be read from the form
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
            <KeyValuePair Key='Amount to be paid' Value={"₹"+ (Payment * wantStock)} />
            <hr />
            <KeyValuePair Key='Pickup Location' Value={address} />
            <hr />
            <KeyValuePair Key='Pickup Date' Value={Date} />
            <hr />
            <input onChange={handleWantStock} placeholder='Enter amount of stock' id='want-stock' type='number'/>
            <div className='buttons'>
                <Button Text="Cancel" onClick={() => {placeBid("-1")}} />
                <Button Text="Buy Now" onClick={() => {placeBid("/home/buy/search/product/confirm")}} />
            </div>
        </Container>
    </>

  )
}

export default PlaceBuyPage