import React from 'react'
import TextField from '../TextField'
import Button from '../Button'
import styled from "styled-components"
import { Link } from "react-router-dom";

const Signin = styled.section`
    display: flex;
    align-items: center;
    gap: 50px;
    flex-direction: column;
    // padding-bottom: rem;
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

function SignupSection() {
  return (
    <Signin>
        <h1>FarmX</h1>
        <h2>Sign Up</h2>
        <TextField name='Name' id='name' type='text' />
        <TextField name='Email ID' id='mail' type='text' />
        <TextField name='Password' id='pass' type='password' />
        <TextField name='Confirm Password' id='name' type='password' />
        <Button Text='Sign Up' onClick={() => {console.log("clicked")}}/>
        <span>
          Already have an account?  
          <a><Link to= '../login'>  Sign In.</Link></a>
        </span>
    </Signin>
  )
}

export default SignupSection