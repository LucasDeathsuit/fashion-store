import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Product = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: top;
    border-radius: 8px 8px 0 0;
`

const Data = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f2f2f2;
    background-color: #355c7d;
    width: 200px;
    border-radius: 0 0 8px 8px;
`

const Price = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 8px;
`

const Description = styled.p`
    margin: 10px;
    font-weight: 300;
`

export default function ClothItem({ cloth }) {
    return (
        <Item>
            <Product src={`images/${cloth.icon}`} />
            <Data>
                <Price>R$120.00</Price>
                <Description>{cloth.name}</Description>
            </Data>
        </Item>
    )
}
