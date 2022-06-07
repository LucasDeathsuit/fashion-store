import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ClothItem from './ClothItem'
import { getPromoData } from './APIServices/APIServices'
import Alert from './Alert'


const PromoItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;

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

    const [data, setData] = useState([])

    const [, setCart] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const data = await getPromoData();
            setData(data);
        }
        fetchData();
    }, [])

    let localCart = localStorage.getItem("cart") ? localStorage.getItem("cart") : []

    const addToCart = (cloth) => {
        let tempLocalCart = []
        if (localCart.length) {
            tempLocalCart = JSON.parse(localCart)
        }
        if (!checkItemOnCart(cloth)) {
            tempLocalCart.push(cloth)
            setCart(tempLocalCart)
            localStorage.setItem("cart", JSON.stringify(tempLocalCart))
        }
    }

    const checkItemOnCart = (cloth) => {
        let tempLocalCart = JSON.parse(localCart)
        return tempLocalCart.some(cartItem => cartItem.id === cloth.id)
    }

    return (
        <PromoItem>
            <ItemsWrapper>
                {
                    data.map(cloth => {
                        return <ClothItem addedToCart={() => checkItemOnCart(cloth)} key={cloth.id} onClick={addToCart} cloth={cloth} />
                    })
                }
            </ItemsWrapper>
        </PromoItem>
    )
}
