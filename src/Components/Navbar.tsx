import React from 'react'
import {FaRegUserCircle} from "react-icons/fa"
import styled from "styled-components"

const NavBar= styled.nav`
  width: 100%;
  display: flex;
  justify-content: end;
`
function Navbar() {
  return (
    <NavBar>
        <FaRegUserCircle size="2.2rem" />
    </NavBar>
  )
}

export default Navbar