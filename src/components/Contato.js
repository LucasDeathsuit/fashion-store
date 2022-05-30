import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const ContactSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 85px - 130.33px);
    padding-top: 85px;
    max-width: 100vw;
    background: rgb(255,228,252);
    background: linear-gradient(90deg, #8ec5fc 0%, #E0c3fc 100%);

    @media (max-width: 900px) {
        padding-bottom: 85px;
    }
`

const ContactWrapper = styled.div`
    display: grid;
    max-width: 1200px;
    width: 80%;
    grid-template-columns: minmax(0, 1fr) auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

const ContactLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5% 10%;
    color: #20387f;
`

const ContactLabel = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
`

const ContactDescription = styled.p`
    width: 70%;

    @media (max-width: 900px) {
        width: 100%;
    }
`

const ContactFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`

const Form = styled.form`
    display: grid;
    grid-gap: 5px;
    row-gap: 1.5rem;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`



const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 90vw;

    &.full-width {
        grid-column: 1/3;
    }
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

const Textarea = styled.textarea`
    background-color: #f2f2f2;
    outline: none;
    border: 2px solid #c1c1c1;
    border-radius: 5px;
    padding: 0.8rem 0.9rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


    ::placeholder {
        opacity: 0;
        transition: all 0.3s;
    }

    :focus::placeholder {
        opacity: 100;
    }

    :focus {
        border: 2px solid #355c7d;
    }

    &:focus + ${Label} {
        transform: translate(0px, -20px);
        color: #355c7d;
    }

    &:not(:placeholder-shown) + ${Label} {
        color: #355c7d;
        transform: translate(0px, -20px);
    }
`



export default function Contato() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <ContactSection>
            <ContactWrapper>
                <ContactLabelWrapper>
                    <ContactLabel>Contate-nos</ContactLabel>
                    <ContactDescription>Precisa entrar em contato conosco? Preencha o formulário com seu questionamento ou nos mande um email em <a href="mailto:lucasdeathsuit@gmail.com">lucasdeathsuit@gmail.com</a></ContactDescription>
                </ContactLabelWrapper>
                <ContactFormWrapper>
                    <Form>
                        <InputWrapper>
                            <StyledInput required placeholder="Insira seu nome" type='text' value={firstName}
                                name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                            <Label>Nome</Label>
                        </InputWrapper>
                        <InputWrapper>
                            <StyledInput required placeholder="Insira seu sobrenome " type='text' value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} />
                            <Label>Sobrenome</Label>
                        </InputWrapper>
                        <InputWrapper className='full-width'>
                            <StyledInput required placeholder="Insira seu email" type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                            <Label>E-mail</Label>
                        </InputWrapper>
                        <InputWrapper className='full-width'>
                            <Textarea required placeholder="Insira sua mensagem" rows='4' cols='60' type="text" value={message} name="message" onChange={(e) => setMessage(e.target.value)} />
                            <Label>Mensagem</Label>
                        </InputWrapper>
                        <InputWrapper className='full-width'>
                            <Button size="btn--large" type="btn-primary">Enviar</Button>
                        </InputWrapper>
                    </Form>
                </ContactFormWrapper>
            </ContactWrapper >
        </ContactSection>
    )
} 