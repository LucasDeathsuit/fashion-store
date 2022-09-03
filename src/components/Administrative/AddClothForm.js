import React, { useState } from 'react'
import { createCloth, uploadImage } from '../APIServices/APIServices'
import styled from 'styled-components'
import Input from '../Input'
import Button from '../Button'

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 120px;
    min-height: calc(100vh - 141px - 130.33px);;
    padding-bottom: 20px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputWrapper = styled.div`
    margin: 1rem;
    width: 500px;

    @media (max-width: 550px) {
        width: 100%;
    }
`

export default function AddClothForm() {

    const [idCloth, setIdCloth] = useState(0)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [iconPath, setIconPath] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")
    const [selectedFile, setSelectedFile] = useState("")
    const [isFilePicked, setIsFilePicked] = useState(false)

    const changeHandler = async (e) => {
        setSelectedFile(e.target.files[0])
        setIsFilePicked(!isFilePicked)
    }

    const handleImageUpload = async (e) => {
        e.preventDefault()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tempID = await createCloth(name, description, price, type)
        setIdCloth(tempID)
        const path = await uploadImage(selectedFile, tempID, name)
        setIconPath(path)
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
                {/*
                <InputWrapper>
                    <Input className="fields" label="Ícone" required placeholder="Icone" type="text" value={iconPath} name="iconPath" read-only/>
                </InputWrapper>
                */}
                <InputWrapper>
                    <Input className="fields" label="Image" required placeholder="Image" type="file" name="image" multiple onChange={changeHandler} />
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