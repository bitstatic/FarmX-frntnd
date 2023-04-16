import React from 'react'
import styled from 'styled-components'
import SearchField from './SearchField'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const SearchSec = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;
    max-width: 90%;
    >Button{
      width: 80%;
      margin-top: 1rem;
    }
`

function SearchSection() {
  const nav = useNavigate()
  function handleClick() {
    console.log("Button Clicked")
    nav("/home/buy/search")
  }
  return (
    <SearchSec>
        <SearchField id='search-item' type='text' name='Search' />
        <SearchField id='mandi' type='text' name='Mandi' />
        <Button Text="Search" onClick={() => {handleClick()}}/>
    </SearchSec>
  )
}

export default SearchSection