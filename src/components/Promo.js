import React from 'react'
import styled from 'styled-components'
import ClothItem from './ClothItem'

const data = [
    {
        name: "Blusas",
        icon: "blusas.jpg",
    },
    {
        name: "Casacos",
        icon: "casacos.jpg",
    },
    {
        name: "Sapatos",
        icon: "sapatos.jpg",

    }, {
        name: "Blusas",
        icon: "blusas.jpg",
    },
    {
        name: "Casacos",
        icon: "casacos.jpg",
    }, {
        name: "Blusas",
        icon: "blusas.jpg",
    },
]

const PromoItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: 220px 220px 220px;
    gap: 20px;
    margin: 20px;
    height: 100%;
    width: 70vw;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        grid-template-columns: 220px 220px;
    }
`

const SideImage = styled.div`
`
const Woman = styled.img`
    right: 0;
    display: block;
    width: 100%;
`


export default function Promo() {
    return (
        <PromoItem>
            <ItemsWrapper>
                {
                    data.map(cloth => {
                        return <ClothItem cloth={cloth} />
                    })
                }
            </ItemsWrapper>
            <SideImage>
            </SideImage>
        </PromoItem>
    )
}
