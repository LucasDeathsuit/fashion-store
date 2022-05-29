import React from 'react'
import styled from 'styled-components'

const STYLES = ['btn--primary', 'btn--secondary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--small'];



const Item = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        border-radius: 4px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Geneva, Tahoma, sans-serif;
        font-weight: 600;
        color: #fff;
        background-color: #F67280;
        transition: all 0.3s ease-out;
        cursor: pointer;

            :hover {
                background-color: #355C7D;
            }
        

        &.btn--primary {
            color: #fff;
            background-color: #F67280;
            transition: all 0.3s ease-out;

            :hover {
                background-color: #355C7D;
            }
        }

        &.btn--secondary {
            color: #fff;
            background-color: #355c7D;
            transition: all 0.3s ease-out;

            :hover {
                background-color: #F67280;
            }
        }

        &.btn--outline {
            color: #f2f2f2;
            background-color: transparent;
            border: 1px solid #f2f2f2;

            :hover {
                background-color: #F67280;
                color: #fff;
                border: 1px solid #F67280;
            }
        }

        &.btn--small {
            padding: 10px 16px;
            font-size: 1rem;
            width: 120px;
        }

        &.btn--medium {
            padding: 12px 18px;
            font-size: 1.2rem;
        }

        &.btn--large {
            padding: 12px 54px;
            font-size: 1.5rem;
            width: 100%;
        }
    `

export default function Button({ onClick, type, size, className, children }) {

    const checkButtonStyle = STYLES.includes(type) ? type : STYLES[0];

    const checkButtonSize = SIZES.includes(size) ? size : SIZES[0];

    return (
        <>
            <Item className={`${checkButtonStyle} ${checkButtonSize} ${className}`}>{children}</Item>
        </>
    )
}
