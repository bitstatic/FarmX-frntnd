import React from 'react'
import styled from 'styled-components'
import SearchCard from './SearchCard'

const SearchSec = styled.div`
    width: 85%;
    >ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 1rem;
        padding: 1rem;
        border: 1px solid rgba(61, 61, 61, 0.3);
        border-radius: 5px;
    }
    li{
        width: 100%;
        list-style: none;
    }
`

function SearchRes() {
  return (
    <SearchSec>
        <ul>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
            <li><SearchCard /></li>
        </ul>
    </SearchSec>
  )
}

export default SearchRes