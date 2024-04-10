import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from '/title_logo.svg';
import Button from "../Button";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  justify-content: center;
  align-items: center;
  h1 {
    // padding: 3rem;
    font-size: 3rem;
    // color: #04110B;
  }
  span {
    display: flex;
    gap: 3rem;
    margin: 7rem;
  }
`;

function SplashScreen() {
  const nav=useNavigate();
  return (
    <div>
      <Container>
        <img src={logo} alt="logo"></img>
        <h1>Harvest Hive</h1>
        <span>
          <Button Text="Log In" onClick={()=>{nav("./login")}}/>
          <Button Text="Sign Up" onClick={()=>{nav("./signup")}}/>
          {/* <NavButton
            Text="Log In"
            Add="./login"
            onClick={() => {
              console.log("clicked");
            }}
          />
          <NavButton
            Text="Sign Up"
            Add="./signup"
            onClick={() => {
              console.log("clicked");
            }}
          /> */}
        </span>
      </Container>
    </div>
  );
}

export default SplashScreen;
