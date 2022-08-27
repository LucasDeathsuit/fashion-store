import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ClothItem from './ClothItem'
import { getClothes, getPromoData } from './APIServices/APIServices'
import Alert from './Alert'


const PromoItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 3rem;
    padding: 50px;
    margin: auto;
    background-color: #f0f6fa;
    background: rgb(255,228,252);
    background: linear-gradient(90deg, #8ec5fc 0%, #E0c3fc 100%);

`

const ItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 300px));
    gap: 1rem;
    align-items: stretch;
    align-self: center;
    justify-content: center;
    max-width: 1200px;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, minmax(100px, 300px));
        
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, minmax(100px, 300px));
    }

    @media (max-width: 600px) {
        grid-template-columns: minmax(100px, 300px);
    }

`

export default function Promo() {

    const [data, setData] = useState([])

    const [, setCart] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const data = await getClothes();
            setData(data);
        }
        fetchData();
    }, [])

    let localCart = localStorage.getItem("cart") ? localStorage.getItem("cart") : []

    const addOrRemoveFromCart = (cloth) => {
        let tempLocalCart = []
        if (localCart.length) {
            tempLocalCart = JSON.parse(localCart)
        }
        if (!isItemOnCart(cloth)) {
            tempLocalCart.push(cloth)
            setCart(tempLocalCart)
            localStorage.setItem("cart", JSON.stringify(tempLocalCart))
        }
    }

    const isItemOnCart = (cloth) => {
        let tempLocalCart
        if (localCart.length) {
            tempLocalCart = JSON.parse(localCart)
            return tempLocalCart.some(cartItem => cartItem.id === cloth.id)
        }
    }

    return (
        <PromoItem>
            <ItemsWrapper>
                {
                    data ?
                        data.map(cloth => {
                            return <ClothItem addedToCart={() => isItemOnCart(cloth)} key={cloth.id} onClick={addOrRemoveFromCart} cloth={cloth} />
                        })
                        : null
                }
            </ItemsWrapper>
        </PromoItem>
    )
}
