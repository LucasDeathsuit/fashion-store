import React, { useState } from 'react'
import { createCloth } from '../APIServices/APIServices'
import styled from 'styled-components'
import Input from '../Input'
import Button from '../Button'

const FormWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 10px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputWrapper = styled.div`
    margin: 1rem;
`

export default function AddClothForm() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [iconPath, setIconPath] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        createCloth(name, description, iconPath, price, type);
    }

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <InputWrapper>
                    <Input className="fields" label="Name" required placeholder="Nome da Roupa" type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                </InputWrapper>
                <InputWrapper>
                    <Input className="fields" label="Descrição" required placeholder="Descrição" type="text" value={description} name="description" onChange={(e) => setDescription(e.target.value)} />
                </InputWrapper>
                <InputWrapper>
                    <Input className="fields" label="Ícone" required placeholder="Imagem" type="text" value={iconPath} name="iconPath" onChange={(e) => setIconPath(e.target.value)} />
                </InputWrapper>
                <InputWrapper>
                    <Input className="fields" label="Preço" required placeholder="Preço" type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
                </InputWrapper>
                <InputWrapper>
                    <Input className="fields" label="Tipo" required placeholder="Tipo" type="text" value={type} name="type" onChange={(e) => setType(e.target.value)} />
                </InputWrapper>
                <Button size="btn--small" onClick={handleSubmit}>Enviar</Button>
            </Form>
        </FormWrapper>
    )
}