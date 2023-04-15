import React from 'react'
import styled from 'styled-components'
import SearchCard from './SearchCard'
import dummy from "/imagedummy.png";

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
    const searchItems = [
    { id: 0, Name: "Name", Stock: 1,currentHeighestBid: "XYZ", Payment: 500, img: dummy },
    { id: 1, Name: "Name", Stock: 2,currentHeighestBid: "XYZ", Payment: 600, img: dummy },
    { id: 2, Name: "Name", Stock: 3,currentHeighestBid: "XYZ", Payment: 700, img: dummy },
    { id: 7, Name: "Name", Stock: 4,currentHeighestBid: "XYZ", Payment: 800, img: dummy },
    { id: 4, Name: "Name", Stock: 5,currentHeighestBid: "XYZ", Payment: 900, img: dummy },
    { id: 5, Name: "Name", Stock: 6,currentHeighestBid: "XYZ", Payment: 1000, img: dummy } ,
    { id: 6, Name: "Name", Stock: 6,currentHeighestBid: "XYZ", Payment: 1000, img: dummy } ,
    { id: 7, Name: "Name", Stock: 6,currentHeighestBid: "XYZ", Payment: 1000, img: dummy } ,
    { id: 8, Name: "Name", Stock: 6,currentHeighestBid: "XYZ", Payment: 1000, img: dummy } ,
    { id: 9, Name: "Name", Stock: 6,currentHeighestBid: "XYZ", Payment: 1000, img: dummy }];
    const search = searchItems.map((searchItem) => (
        <li key={searchItem.id}>
          <SearchCard {...searchItem} />
        </li>
      ));
  return (
    <SearchSec>
        <ul>
            {search}
        </ul>
    </SearchSec>
  )
}

export default SearchRes