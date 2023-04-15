import React from 'react'
import {FaRegUserCircle} from "react-icons/fa"
import styled from "styled-components"
import logo from "/title_logo.svg"
import { useNavigate } from 'react-router-dom'

const NavBar= styled.nav`
  width: 50%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  border-radius: inherit;
  top: 0px;
  background-color: #fff;
  *{
    margin: 1rem;
  }
  margin-bottom: 0rem;
`
function Navbar() {
  const nav= useNavigate()
  function handleClick(){
      nav("/home")
  }
  return (
    <NavBar>
        <img src={logo} alt=""  width={"50px"} onClick={() => {handleClick()}}/>
        <FaRegUserCircle size="3rem" />
    </NavBar>
  )
}

export default Navbar