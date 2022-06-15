import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { getPromoData } from "./APIServices/APIServices"
import ClothItem from "./ClothItem";
import { Link } from "@reach/router"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 85px;
    margin: auto;
    background-color: #f0f6fa;
    background: rgb(255,228,252);
    background: linear-gradient(90deg, #8ec5fc 0%, #E0c3fc 100%);
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 180px 1fr ;
    justify-content: center;
    margin-top: 1rem;
    max-width: 1500px;
    padding: 2rem;
    padding-top: 0;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const CategoriesList = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 1rem;

    @media (max-width: 700px) {
        grid-column: 1/3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const ItemsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 300px));
    grid-gap: 1rem;
    justify-content: center;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, minmax(100px, 300px));
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(100px, 300px));
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, minmax(100px, 300px));
    }

`
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    
`

const ListTitle = styled.h2`
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    margin: 0.5rem;::after {
        content: " |";
    }
    
    :hover {
        color: #f67280;
    }
`

export default function CategorizedItems({ category }) {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPromoData(category)
            setData(data)
        }
        fetchData();
    }, [])

    return (
        <Wrapper>
            <ContentWrapper>
                <CategoriesList>
                    <ListTitle>Roupas</ListTitle>
                    <List>
                        <li>
                            <StyledLink to="../a">
                                APIrvices
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="../a">
                                APIServies
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="../a">
                                IServices
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="../a">
                                APIServes
                            </StyledLink>
                        </li>
                    </List>
                </CategoriesList>
                <ItemsList>
                    {
                        data ?
                        data.map(cloth => {
                            return <ClothItem key={cloth.id} cloth={cloth} />
                        })
                        : null
                    }
                </ItemsList>
            </ContentWrapper>
        </Wrapper>
    )
}