import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import ClothItem from './ClothItem'
import { getPromoData } from './APIServices/APIServices'


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

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPromoData();
            setData(data);
        }
        fetchData();
    }, [])
    
    return (
        <PromoItem>
            <ItemsWrapper>
                {
                    data.map(cloth => {
                        return <ClothItem cloth={cloth} />
                    })
                }
            </ItemsWrapper>
            <Button type="btn--primary" size="btn--medium">Veja Mais</Button>
        </PromoItem>
    )
}
