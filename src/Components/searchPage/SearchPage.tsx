import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import SearchRes from './SearchRes'

const Searches = styled.section`
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  height: fit-content;
  width: 100%;
  > h1{
    font-size: 2.5rem;
    font-weight: 300;
    text-decoration: none;
  }
`

function SearchPage() {
  return (
    <>
        <Navbar />
        <Searches>
          <h1>Search results</h1>
          <SearchRes />
        </Searches>
    </>
  )
}

export default SearchPage