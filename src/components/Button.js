import React from 'react'
import styled from 'styled-components'


export default function Button({ className, type, children }) {

    console.log(type)

    const Item = styled.button`
        outline: none;
        border: none;
        border-radius: 4px;
        padding: 12px 18px;
        font-size: 1.2rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Geneva, Tahoma, sans-serif;
        font-weight: 600;
        color: #fff;
        background-color: #F67280;
        transition: all 0.3s ease-out;

            :hover {
                background-color: #355C7D;
            }
        

        &.btn-primary {
            color: #fff;
            background-color: #F67280;
            transition: all 0.3s ease-out;

            :hover {
                background-color: #355C7D;
            }
        }

        &.btn-secondary {
            color: #fff;
            background-color: #355c7D;
            transition: all 0.3s ease-out;

            :hover {
                background-color: #F67280;
            }
        }

        &.btn-outline {
            color: #f2f2f2;
            background-color: transparent;
            border: 1px solid #F67280;

            :hover {
                background-color: #F67280;
                color: #fff;
            }
        }
    `

    return (
        <>
            <Item className={`${type} ${className}`}>{children}</Item>
        </>
    )
}
