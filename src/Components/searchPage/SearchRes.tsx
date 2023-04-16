import React from 'react'
import styled from 'styled-components'
import SearchCard from './SearchCard'
import dummy from "/imagedummy.png";

const SearchSec = styled.div`
    width: 100%;
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
    { id: 0, Name: "Apple", Stock: 1,currentHeighestBid: "XYZ", Payment: 500, img: dummy },
    { id: 1, Name: "Potato", Stock: 2,currentHeighestBid: "XYZ", Payment: 600, img: dummy },
    { id: 2, Name: "Papaya", Stock: 3,currentHeighestBid: "XYZ", Payment: 700, img: dummy },
    { id: 3, Name: "Lichi", Stock: 4,currentHeighestBid: "XYZ", Payment: 800, img: dummy },
    { id: 4, Name: "Mango", Stock: 5,currentHeighestBid: "XYZ", Payment: 900, img: dummy },
    { id: 5, Name: "Lemon", Stock: 6,currentHeighestBid: "XYZ", Payment: 1000, img: dummy } ,
    { id: 6, Name: "Couliflower", Stock: 6,currentHeighestBid: "XYZ", Payment: 1000, img: dummy } ,
    { id: 8, Name: "Brinjal", Stock: 6,currentHeighestBid: "XYZ", Payment: 1000, img: dummy } ,
    { id: 9, Name: "Peas", Stock: 6,currentHeighestBid: "XYZ", Payment: 1000, img: dummy }];
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