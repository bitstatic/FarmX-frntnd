import React, { useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Signin = styled.section`
  display: flex;
  align-items: center;
  gap: 50px;
  flex-direction: column;
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
  const [Visibility, setVisibility] = React.useState(true);
  function changeVis() {
    if (Visibility) setVisibility(false);
    else console.log("Server Verification sent")
  }
  return (
    <Signin>
      <h1>FarmX</h1>
      <h2>Sign Up</h2>

      {Visibility && <TextField name="Name" id="name" type="text" />}
      {Visibility && <TextField name="Email ID" id="mail" type="text" />}
      {Visibility && <TextField name="Password" id="pass" type="password" />}
      {Visibility && (
        <TextField name="Confirm Password" id="pass2" type="password" />
      )}
      {!Visibility && <TextField name="Area Pin Code" id="pin" type="text" />}
      {!Visibility && <TextField name="Phone Number" id="phone" type="text" />}
      {!Visibility && (
        <TextField name="Date Of Birth (DD/MM/YYY)" id="dob" type="password" />
      )}

      <Button
        Text="Sign Up"
        onClick={() => {
          changeVis();
        }}
      />
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
