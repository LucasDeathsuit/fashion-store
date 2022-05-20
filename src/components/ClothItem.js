import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 8px;
    width: 100%;    
    max-width: 250px;
    
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`


const Product = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 8px 8px 0 0;
    aspect-ratio: 4/5;
`

const Data = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f2f2f2;
    background-color: #355c7d;
    border-radius: 0 0 8px 8px;
    height: 100%;
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
            <ContentWrapper>
                <Product src={`images/${cloth.icon}`} />
                <Data>
                    <Price>R$120.00</Price>
                    <Description>{cloth.name}</Description>
                </Data>
            </ContentWrapper>
        </Item>
    )
}
