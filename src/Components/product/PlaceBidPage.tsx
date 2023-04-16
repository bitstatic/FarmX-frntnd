import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import KeyValuePair from '../KeyValuePair';
import Button from '../Button';

// interface props {
//     price: number;
//     location: string;
//     Date: string;
// }

const Container = styled.section`
    height: fit-content;
    margin-top: 5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    #want-stock{
        width: 80%;
        font-size: 1.5rem;
        margin: 1rem 0;
    }
    button{
        width: 15rem;
    }
    #want-stock{
        background-color: #fff;
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
`

function PlaceBidPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const {Name, Stock, Payment, address, Date} = location.state
    function placeBid() {
        console.log("Bid To be Placed and Data to be read from the form")
        // navigate(-1)
        navigate("/home/buy/search/product/confirm")
    }
    // const wantedStock = document.getElementById('want-stock').value;
    // console.log(wantedStock)
  return (
    <>
        <Navbar />
        <Container>
            <h1>{Name}</h1>
            <p>by Farmer's name</p>
            <hr />
            <KeyValuePair Key='Amount to be paid' Value={"₹"+ (Payment * 1)} />
            <hr />
            <KeyValuePair Key='Pickup Location' Value={address} />
            <hr />
            <KeyValuePair Key='Pickup Date' Value={Date} />
            <hr />
            <input placeholder='Enter amount of stock' id='want-stock' type='number'/>
            <Button Text="Place Bid" onClick={() => {placeBid()}} />
        </Container>
    </>

  )
}

export default PlaceBidPage