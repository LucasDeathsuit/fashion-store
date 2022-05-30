import React, { useState } from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'



const ShoppingCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 20px;
`

const ShoppingCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
`

const Title = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #355c7d;
`

const CartWrapper = styled.div`
`

const CartList = styled.div`
    display: grid;

    & > *:not(:last-child) {
        border-bottom: 2px solid #355c7d;
    }
`

const Values = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    font-weight: 600;

    & > div {
        border: 2px solid #c1c1c1;
        padding: 15px;
        border-radius: 8px;
    }
    
`


export default function ShoppingCart() {

    const [roupas, setRoupas] = useState([{
        "name": "Sapatos",
        "icon": "sapatos.jpg",
        "link": "/",
        "price": "120.99",
        "title": "Sapatos Zagonel",
        "sizes": ["P", "M", "G", "GG"],
        "selectedSize": "GG",
        "amount": 1
    },
    {
        "name": "Blusas",
        "icon": "blusas.jpg",
        "link": "/",
        "price": "59.99",
        "title": "Blusinha Brega",
        "sizes": ["PP", "P", "M", "G", "GG"],
        "selectedSize": "M",
        "amount": 1
    },
    {
        "name": "Casacos",
        "icon": "casacos.jpg",
        "link": "/",
        "price": "45.99",
        "title": "Casaquinho de Frio",
        "sizes": ["P", "M", "G", "GG"],
        "selectedSize": "P",
        "amount": 1
    }])

    const handleValueChange = (value, key) => {
        
        const newRoupas = [...roupas];
        newRoupas[key].amount = value;

        setRoupas(newRoupas);

    }


    return (
        <ShoppingCartContainer>
            <ShoppingCartWrapper>
                <Title>Carrinho</Title>
                <CartWrapper>
                    <CartList>
                        {
                            roupas.map((item, index) => {
                                console.log(index)
                                return <CartItem index={index} key={index} onChange={handleValueChange} item={item} />
                            }
                            )
                        }
                    </CartList>
                    <Values>
                        <div>
                            Total: R${
                                roupas.reduce(
                                    (total, item) => {
                                        return (total + item.price * item.amount);
                                    }, 0
                                ).toFixed(2)
                            }
                        </div>
                    </Values>
                </CartWrapper>
            </ShoppingCartWrapper>
        </ShoppingCartContainer>
    )
}