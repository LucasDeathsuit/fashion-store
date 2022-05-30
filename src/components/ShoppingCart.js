import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'



const ShoppingCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 20px;
    min-height: calc(100vh - 141px - 130.33px);
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

    const [cart, setCart] = useState([])
    const cartRef = useRef();

    const handleValueChange = (value, key) => {

        let newCart = [...cart];
        if (value === 0) {
            const valueToRemove = [newCart[key]]
            newCart = newCart.filter(cart => !valueToRemove.includes(cart))
        } else {
            newCart[key].amount = value;
        }
        setCart(newCart);

    }

    useEffect(() => {
        cartRef.current = cart;
    }, [cart])

    useEffect(() => {

        let localCart = localStorage.getItem("cart")
        if (localCart) setCart(JSON.parse(localCart))

        return function storeCart() {
            localStorage.setItem("cart", JSON.stringify(cartRef.current))
        }
    }, [])


    return (
        <ShoppingCartContainer>
            <ShoppingCartWrapper>
                <Title>Carrinho</Title>
                <CartWrapper>
                    <CartList>
                        {
                            cart.map((item, index) => {
                                return <CartItem index={index} key={index} onChange={handleValueChange} item={item} />
                            }
                            )
                        }
                    </CartList>
                    <Values>
                        <div>
                            Total: R${
                                cart.reduce(
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