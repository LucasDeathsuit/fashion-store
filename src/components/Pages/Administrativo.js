import React, { useState } from 'react'
import styled from 'styled-components'
import AddClothForm from '../Administrative/AddClothForm'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Administrativo() {

    return (
        <>
            <Navbar />
            <AddClothForm />
            <Footer />
        </>
    )
}