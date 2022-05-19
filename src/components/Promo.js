import React from 'react'
import styled from 'styled-components'
import ClothItem from './ClothItem'

const StoreWrapper = styled.div`
    display: flex;
    flex-basis: 35%;
    height: 100vh;

`

const ItemsWrapper = styled.div`
    
`


const Influencer = styled.div`

`


export default function Promo() {
    return (
        <div>
            <StoreWrapper>
                <ItemsWrapper>
                    <ClothItem/>
                </ItemsWrapper>
            </StoreWrapper>
            <Influencer>

            </Influencer>
        </div>
    )
}
