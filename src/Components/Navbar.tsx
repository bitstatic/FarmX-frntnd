import React from 'react'
import {FaRegUserCircle} from "react-icons/fa"
import styled from "styled-components"
import logo from "/title_logo.svg"
import { useNavigate } from 'react-router-dom'

const NavBar= styled.nav`
  width: 50%;
  max-width: 500px;
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  border-radius: inherit;
  top: 0px;
  background-color: #fff;
  z-index: 100;
  > img, a{
    margin: 1rem;
  }
  margin-bottom: 0rem;
  @media (width<500px) {
        width: 100%;
  }
`
function Navbar() {
  const navigate = useNavigate()
    function nav(path: string) {
        navigate(path)
    }
  return (
    <NavBar>
        <img src={logo} alt=""  width={"50px"} onClick={() => {nav("/home")}}/>
        <a onClick={() => {nav('/')}}>
          <FaRegUserCircle size="3rem" />
        </a>
    </NavBar>
  )
}

export default Navbar