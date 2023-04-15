import React from 'react'
import styled from 'styled-components'
import SearchField from './SearchField'
import Button from '../Button'

const SearchSec = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 90%;
    >Button{
        margin-top: 1rem;
    }
`

function SearchSection() {
  return (
    <SearchSec>
        <SearchField id='search-item' type='text' name='Search' />
        <SearchField id='mandi' type='text' name='Mandi' />
        <Button Text="Search" onClick={() => {console.log("Button Clicked")}}/>
    </SearchSec>
  )
}

export default SearchSection