import React, { useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  // padding-bottom: rem;
  h1 {
    margin: 5vh 0rem;
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  a {
    color: #000;
    font-weight: 700;
    text-decoration: none;
  }
`;


function SignupSection() {
  const nav=useNavigate();

  const [userData,setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    pin: "",
    phone: "",
    dob: "",
  });

  const isDisabledFirst = userData.name === "" || userData.email === "" || userData.password === "" || userData.confirmPassword === "" || userData.password !== userData.confirmPassword  ;

  const isDisabledSec = userData.pin === "" || userData.phone === "" || userData.dob === "";

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, name: e.target.value});
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, email: e.target.value});
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserData({...userData, password: e.target.value});
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserData({...userData, confirmPassword: e.target.value});
  };
  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserData({...userData, pin: e.target.value});
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserData({...userData, phone: e.target.value});
  };
  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserData({...userData, dob: e.target.value});
  };


  function verify() {
    console.log("Data sent to Server: " , userData);
    console.log("Awaiting Server Verification");
    nav("../home")
  }

  const [Visibility, setVisibility] = React.useState(true);
  function changeVis() {
    if (Visibility) setVisibility(false);
    else verify()
  }

  return (
    <Signin>
      <h1>FarmX</h1>
      <h2>Sign Up</h2>

      {Visibility && <TextField change={handleNameChange} name="Name" id="name" type="text" />}
      {Visibility && <TextField change={handleEmailChange} name="Email ID" id="mail" type="text" />}
      {Visibility && <TextField change={handlePasswordChange} name="Password" id="pass" type="password" />}
      {Visibility && <TextField change={handleConfirmPasswordChange} name="Confirm Password" id="pass2" type="password" />}
      {!Visibility && <TextField change={handlePinChange} name="Area Pin Code" id="pin" type="text" />}
      {!Visibility && <TextField change={handlePhoneChange} name="Phone Number" id="phone" type="text" />}
      {!Visibility && <TextField change={handleDobChange} name="Date Of Birth (DD/MM/YYY)" id="dob" type="date" />}

      <Button disable={(isDisabledFirst && Visibility) || (isDisabledSec && !Visibility) } Text="Sign Up" onClick={() => {changeVis();}}/>
      <span>
        Already have an account?
        <a>
          <Link to="../login"> Sign In.</Link>
        </a>
      </span>
    </Signin>
  );
}

export default SignupSection;
