import React from 'react'
import styled from 'styled-components'

const Icone = styled.img`
    width: 3rem;
    border-radius: 30px;
    border: 3px solid pink;
    object-fit: cover;

    @media only screen and (min-width: 768px) {
        width: 3rem;
        border-radius: 30px;
        border: 3px solid pink;
        object-fit: cover;
    }
`

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80px;
`

const Description = styled.div`
color: white;
text-transform: uppercase;
font-family: sans-serif;
margin-top: 0.5rem;
font-size: 0.8rem;
margin: 8px;
`

export default function Story({ name, icon }) {
    return (
        <Item>
            <Icone src={`images/${icon}`} />
            <Description>
                {name}
            </Description>
        </Item>
    )
}
