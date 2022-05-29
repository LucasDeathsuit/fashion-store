import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const ContactSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh);
    max-width: 100vw;
    background: rgb(255,228,252);
    background: linear-gradient(90deg, #8ec5fc 0%, #E0c3fc 100%);
    color: #4d4d4d;
    padding: 0 ;
    padding: 85px 0;
`

const ContactWrapper = styled.div`
    display: grid;
    max-width: 1200px;
    width: 80%;
    grid-template-columns: minmax(0, 1fr) auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`

const ContactLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 10%;

    @media (max-width: 1000px) {
        align-items: center;
    }
`

const ContactLabel = styled.h1`
    font-size: 2rem;
    font-weight: 700;
`

const ContactDescription = styled.p`
    @media (max-width: 600px) {
        display: none;
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
    grid-gap: 10px;
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

const Input = styled.input`
    background-color: #fff;
    outline-color: #d1d1d1;
    border: none;
    border-radius: 3px;
    padding: 0.8rem 0.9rem;
`

const Textarea = styled.textarea`
    background-color: #fff;
    outline-color: #d1d1d1;
    border: none;
    border-radius: 3px;
    padding: 0.8rem 0.9rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
                            <label for="firstName">Nome</label>
                            <Input placeholder="Insira seu nome" type='text' value={firstName}
                                name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <label for="lastName">Sobrenome</label>
                            <Input placeholder="Insira seu sobrenome " type='text' value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper className='full-width'>
                            <label for="email">E-mail</label>
                            <Input placeholder="Insira sem email" type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper className='full-width'>
                            <label for="message">Mensagem</label>
                            <Textarea placeholder="Insira sua mensagem" rows='4' cols='60' type="text" value={message} name="message" onChange={(e) => setMessage(e.target.value)} />
                        </InputWrapper>
                    </Form>
                    <Button size="btn--medium" type="btn-primary">Enviar</Button>
                </ContactFormWrapper>
            </ContactWrapper >
        </ContactSection>
    )
} 