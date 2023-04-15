import React from 'react'
import {FaRegUserCircle} from "react-icons/fa"
import styled from "styled-components"
import logo from "../../public/title_logo.svg"

const NavBar= styled.nav`
  min-width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
`
function Navbar() {
  return (
    <NavBar>
        <img src={logo} alt=""  width={"50px"} />
        <FaRegUserCircle size="2.2rem" />
    </NavBar>
  )
}

export default Navbar