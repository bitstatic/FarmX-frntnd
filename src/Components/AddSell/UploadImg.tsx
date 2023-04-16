import React from 'react'
import styled from 'styled-components'
import {ImAttachment} from 'react-icons/im'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #171717;
    border-radius: 5px;
    padding: 0.5rem;
    p{
        font-size: 1.25rem;
        font-weight: 400;
    }
    .attach-icon-div{
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border: 1px solid #171717;
        border-radius: 5px;
    }
`

function UploadImg() {
  return (
    <Container>
        <p>Upload Image</p>
        <div className='attach-icon-div'><ImAttachment size={25}/></div>
    </Container>
  )
}

export default UploadImg