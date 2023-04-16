import React from 'react'
import styled from 'styled-components'
import { useLocation , useNavigate} from 'react-router-dom'
import Navbar from '../Navbar'
import image from "/prodDummyImg.png"
import Button from '../Button'
import KeyValuePair from '../KeyValuePair'

const Container = styled.section`
    height: 100%;
    width: 90%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    justify-content: start;
    .hero{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        > img{
            width: 100%;
        }
        > .seller{
            font-weight: 500;
            font-size: 1.3rem;
        }
    }
    .stock-info > h3{
        font-weight: 600;
        font-size: 2rem;
    }
    > .buttons{
        width: 100%;
        align-self: center;
        display: flex;
        gap: 4%;
        > button{
            width: 48%;
        }
    }
    > .bid-info{
        display: flex;
        width: 100%;
        justify-content: space-between;
        > .highest-bid, .view-bid-button{
            color: black;
            font-weight: 600;
            font-size: 1.3rem;
        }
        > .view-bid-button{
            text-decoration: underline;
        }
        
    }
`

function ProductPage() {
    const location = useLocation()
    const {Name, Stock, Payment} = location.state
    console.log(location.state)
    const navigate= useNavigate()
    function handleBid(){
        navigate("./bid", {state: {Name, Stock, Payment,  address: "address", Date: "01/05/2023"}})
    }
    
    return (
        <>
            <Navbar />
            <Container>
                <div className='hero'>
                    <h1>{Name}</h1>
                    <img src={image} alt="" />
                    <p className='seller'>By Farmer's Name</p>
                </div>
                <div className='stock-info'>
                    <h3>Stock Left: {Stock}</h3>
                    <p>1 Unit = 10kg</p>
                </div>
                <KeyValuePair Key='Pickup Date' Value={"01/05/2023"} />
                <div className='bid-info'>
                    <p className='highest-bid'>Highest Bid: {500}</p>
                    <a className='view-bid-button'>View All Bids &#62;</a>
                </div>
                <div className='buttons'>
                    <Button Text={"Place Bid"} onClick={()=> {handleBid()}}/>
                    <Button Text={"Buy at ₹"+Payment} onClick={()=> {console.log("Buy function called")}}/>
                </div>
            </Container>
        </>
    )
}

export default ProductPage