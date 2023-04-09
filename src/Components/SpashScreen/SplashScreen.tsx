import React from "react";
import styled from "styled-components";
import NavButton from "../SpashScreen/NavButton";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40vh;
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
  return (
    <div>
      <Container>
        <h1>FarmX</h1>
        <span>
          <NavButton
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
          />
        </span>
      </Container>
    </div>
  );
}

export default SplashScreen;
