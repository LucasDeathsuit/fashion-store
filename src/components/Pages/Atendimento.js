import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Contato from '../Contato'
import Cadastro from './Cadastro'

export default function Atendimento() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <Contato />
            <Footer />
        </>
    )
}