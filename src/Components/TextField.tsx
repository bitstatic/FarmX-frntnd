import React from 'react'
import styled from 'styled-components'

const TextArea= styled.input`
  background-color: #F7FEFA;
  width: 80%;
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
  change : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ ...prop }:props) {
  return (
    <TextArea onChange={prop.change} id={prop.id} type={prop.type} placeholder={prop.name}></TextArea>
  )
}

export default TextField