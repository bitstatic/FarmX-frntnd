import React from 'react'
import styled from 'styled-components'

const TextArea= styled.input`
  background-color: #fff;
  width: 70%;
  border: none;
  border-bottom: 1px solid #000;
  padding: 5px;
  margin: 0.2rem 0rem;
  font-size: 1.25rem;
  :focus{
    outline: none;
  }
`

interface props{
  name: string;
  id: string;
  type: string;
}

function TextField({name, id, type}:props) {
  return (
    <TextArea id={id} type={type} placeholder={name}></TextArea>
  )
}

export default TextField