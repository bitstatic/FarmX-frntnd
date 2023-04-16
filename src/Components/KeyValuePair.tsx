import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    >.key{
        font-weight: 400;
        font-size: 1.2rem;
    }
    > .value{
        font-weight: 600;
        font-size: 2rem;
    }
`

interface Props {
    Key: string;
    Value: String;
  }

function KeyValuePair({Key, Value}: Props) {
  return (
    <Container>
        <p className='key'>{Key+":"}</p>
        <p className='value'>{Value}</p>
    </Container>
  )
}


export default KeyValuePair
