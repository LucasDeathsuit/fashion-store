import React from 'react'
import styled from 'styled-components'
import Button from './Button'

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

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled(Button)`
    position: absolute;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    opacity: 0;
    transition: all 0.7s ease-in-out;
    padding: 15px;
    border: 1px solid gray;

    ${Item}:hover & {
        opacity: 1;
    }
`

const Product = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 8px 8px 0 0;
    aspect-ratio: 9/11;
    transition: all 0.3s ease-in-out;

    ${Item}:hover & {
        opacity: 0.5;
        filter: brightness(70%);
    }
`

const Data = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f2f2f2;
    background-color: #355c7d;
    border-radius: 0 0 8px 8px;
    height: 100%;
    transition: all 0.3s ease-out;

    ${Item}:hover & {
        background-color: #F67280;
    }
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
                <ImageWrapper>
                    <Product src={`images/${cloth.icon}`} />
                    <StyledButton type="btn-outline">Visitar</StyledButton>
                </ImageWrapper>
                <Data>
                    <Price>R$120.00</Price>
                    <Description>{cloth.name}</Description>
                </Data>
            </ContentWrapper>
        </Item>
    )
}
