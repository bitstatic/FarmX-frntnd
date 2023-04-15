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
  }

function SearchField({name, id, type}:props) {
  return (<SearchArea id={id} type={type} placeholder={name} />)
}


export default SearchField