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

  const [searchInfo, setSearchInfo] = React.useState({
    searchItem: '',
    mandi: '',
  })

  const isDisabled = searchInfo.searchItem === '' || searchInfo.mandi === '';
  
  const handleSearchItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInfo({ ...searchInfo, searchItem: e.target.value })
  }
  const handleMandiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInfo({ ...searchInfo, mandi: e.target.value })
  }

  function handleClick() {
    console.log("search clicked : ", searchInfo);
    nav("/home/buy/search")
  }

  return (
    <SearchSec>
        <SearchField change={handleSearchItemChange} id='search-item' type='text' name='Search' />
        <SearchField change={handleMandiChange} id='mandi' type='text' name='Mandi' />
        <Button disable={isDisabled} Text="Search" onClick={() => {handleClick()}}/>
    </SearchSec>
  )

}

export default SearchSection