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

    }, 
    {
        name: "Blusas",
        icon: "blusas.jpg",
    },
    {
        name: "Casacos",
        icon: "casacos.jpg",
    }, 
    {
        name: "Blusas",
        icon: "blusas.jpg",
    },
    {
        name: "Sapatos",
        icon: "sapatos.jpg",

    }, 
    {
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
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    align-items: stretch;
    justify-content: center;
    max-width: 1200px;

    @media (max-width: 1300px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 1000px) {
        display: flex;
        flex-wrap: wrap;
        margin: 10px;
    }

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
        </PromoItem>
    )
}
