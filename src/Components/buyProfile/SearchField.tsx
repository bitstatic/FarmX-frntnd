import React from 'react'
import styled from 'styled-components'

const SearchArea = styled.input`
background-color: #EFEFEF;
color: 666666;
width: 100%;
border-radius: 0.5rem;
border: none;
padding: 0.6rem;
margin: 0.2rem 0rem;
font-size: 1.5rem;
:focus{
  outline: none;
}
`
interface props{
    name: string;
    id: string;
    type: string;
    change : (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  function SearchField({ ...prop }:props) {
    return (
    <SearchArea onChange={prop.change} id={prop.id} type={prop.type} placeholder={prop.name} />
    )
  }


export default SearchField