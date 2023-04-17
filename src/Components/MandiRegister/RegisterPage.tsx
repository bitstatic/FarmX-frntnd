import React , { ChangeEvent , useState } from 'react'
import TextField from '../TextField'
import styled from "styled-components"
import Button from '../Button'
import Navbar from '../Navbar'
import { useNavigate, Link } from "react-router-dom";

const Container = styled.section`
    width: 100%;
    height: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2.5rem;
    h1{
      margin: 5vh 0rem;
      font-size: 3.5rem;
    }
    > p{
        font-size: 1.8rem;
        margin-bottom: -1rem;
      }
`

function RegisterPage() {
    const nav=useNavigate();

    const [RegisterInfo, setRegisterInfo] = useState({
        mcode: "",
        name: "",
        phn: "",
    });

    const isDisabled = RegisterInfo.mcode === "" || RegisterInfo.name === "" || RegisterInfo.phn === "";

    const handleMandiCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterInfo({...RegisterInfo, mcode: e.target.value});
    };
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterInfo({...RegisterInfo, name: e.target.value});
    };
    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterInfo({...RegisterInfo, phn: e.target.value});
    };

    function verifyRegister() {
        console.log("Register information fetched " ,RegisterInfo);
        console.log("Server Verification request sent");
        nav("../dashboard/confirm")
    }

    return (
    <>
        <Navbar />
        <Container>
            <h1>FarmX</h1>
            <p>Register for a Mandi</p>
            <TextField change={handleMandiCodeChange} name="Mandi Code" id="mcode" type="number"/>  
            <TextField change={handleNameChange} name="Name" id="name" type="text"/>
            <TextField change={handlePhoneNumberChange} name="Phone Number" id="phn" type="number"/>
            <Button disable={isDisabled} Text="Register" onClick={() => {verifyRegister()}}/>
        </Container>
    </>
  )
}

export default RegisterPage