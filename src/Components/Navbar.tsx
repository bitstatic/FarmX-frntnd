import React from 'react'
import {FaRegUserCircle} from "react-icons/fa"
import styled from "styled-components"
import logo from "/title_logo.svg"

const NavBar= styled.nav`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: #fff;
  top: 0px;
  *{
    margin: 1rem;
  }
  margin-bottom: 5rem;
`
function Navbar() {
  return (
    <NavBar>
        <img src={logo} alt=""  width={"50px"} />
        <FaRegUserCircle size="3rem" />
    </NavBar>
  )
}

export default Navbar