import React from 'react'
import TextField from '../TextField'
import styled from "styled-components"
import Button from '../Button'
import { Link } from "react-router-dom";

const Login = styled.section`
    display: flex;
    align-items: center;
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
  return (
    <Login>
        <h1>FarmX</h1>
        <h2>Login</h2>
        <TextField name="Email" id="email" type="text"/>
        <TextField name="Password" id="pass" type="password"/>
        <Button Text="Log In" onClick={() => {console.log("clicked")}}/>
        <span>
          Don't have an account?  
          <a><Link to= '../signup'> Sign Up?</Link></a>
        </span>
    </Login>
  )
}

export default LoginSection