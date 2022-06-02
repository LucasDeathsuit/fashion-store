import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-width: 90vw;
    `


const Label = styled.label`

        transition: all 0.3s;
        position: absolute;
        color: #c1c1c1;
        transform: translate(10px, 13px);
        padding: 0 2px;
        font-weight: 500;

`

const StyledInput = styled.input`
    
        background-color: #fff;
        border: 2px solid #c1c1c1;
        border-radius: 5px;
        padding: 0.8rem 0.9rem;
        outline: none;
        

        :focus {
            border: 2px solid #355c7d;
        }

        &:focus + ${Label} {
            transform: translate(3px, -19px);
            color: #355c7d;
        }

        &:not(:placeholder-shown) + ${Label} {
            color: #355c7d;
            transform: translate(3px, -19px);
        }
        
        ::placeholder {
            opacity: 0;
            transition: all 0.3s;
        }

        :focus::placeholder {
            opacity: 100;
        }

    `


export default function Input({ type, required, placeholder, value, name, onChange, label }) {

    return (
        <Wrapper>
            <StyledInput type={type} required={required} placeholder={placeholder} value={value} name={name} onChange={onChange} />
            <Label for={name}>{label}</Label>
        </Wrapper>
    )

}