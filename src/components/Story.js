import React from 'react'
import styled from 'styled-components'

const Icone = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 3px solid pink;
    object-fit: cover;

    @media only screen and (min-width: 768px) {
        border-radius: 50%;
        border: 3px solid pink;
        object-fit: cover;
    }
`

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 0.5rem;
margin-right: 0.5rem;
`

const Description = styled.div`
color: #f2f2f2;
text-transform: uppercase;
font-family: 'Roboto', sans-serif;
font-size: 0.85rem;
font-weight: 600;
margin-top: 0.5rem;
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
