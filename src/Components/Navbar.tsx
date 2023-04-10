import React from 'react'
import {FaRegUserCircle} from "react-icons/fa"
import styled from "styled-components"

const NavBar= styled.nav`
  width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 0rem 0rem;
`
function Navbar() {
  return (
    <NavBar>
        <img src="./title_logo.svg" alt=""  width={"50px"} />
        <FaRegUserCircle size="2.2rem" />
    </NavBar>
  )
}

export default Navbar