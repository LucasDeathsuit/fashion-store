import React from 'react'
import styled from 'styled-components'

const Icone = styled.img`
width: 55px;
border-radius: 30px;
border: 5px solid pink;
object-fit: cover;`

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Description = styled.div`
color: white;
text-transform: uppercase;
font-family: sans-serif;
margin-top: 0.5rem;
font-size: 1rem;
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
