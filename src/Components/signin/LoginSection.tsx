import React , { ChangeEvent , useState } from 'react'
import TextField from '../TextField'
import styled from "styled-components"
import Button from '../Button'
import { useNavigate, Link } from "react-router-dom";

const Login = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    padding-bottom: 10rem;
    h1{
      margin: 5vh 0rem;
      font-size: 3.5rem;
    }
    h2{
    font-size:2.5rem;
    }
    a{
      color: #000;
      font-weight: 700;
      text-decoration: none;
    }
`

function LoginSection() {
  const nav=useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  }); 

  const isDisabled = loginInfo.email === "" || loginInfo.password === "";

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({...loginInfo, email: e.target.value});
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({...loginInfo, password: e.target.value});
  };

  function verifyLogin() {
    console.log("login information fetched " ,loginInfo);
    console.log("Server Verification request sent");
    nav("../home")
  }
  

  return (
    <Login>
        <h1>Harvest Hive</h1>
        <h2>Login</h2>
        <TextField change={handleEmailChange}  name="Email" id="email" type="text"/>
        <TextField change={handlePasswordChange} name="Password" id="pass" type="password"/>
        <Button disable = {isDisabled} Text="Log In" onClick={() => {verifyLogin()}}/>
        <span>
          Don't have an account?  
          <a><Link to= '../signup'> Sign Up?</Link></a>
        </span>
    </Login>
  )
}

export default LoginSection
