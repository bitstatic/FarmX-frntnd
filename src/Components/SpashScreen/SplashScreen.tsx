import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 32vh;
  justify-content: center;
  align-items: center;
  h1 {
    padding: 3rem;
    font-size: 5rem;
  }
  span {
    display: flex;
    gap: 2rem;
  }
`;

function SplashScreen() {
  const nav=useNavigate();
  return (
    <div>
      <Container>
        <h1>FarmX</h1>
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
