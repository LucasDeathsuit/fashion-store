import styled from 'styled-components'

import React from 'react'
import Stories from './Stories'

const LogoWrapper = styled.div`
max-width: 250px;
max-height: 250px;
margin-top: -125px;
margin-left: auto;
margin-right: auto;
`

const Logo = styled.img`
    width: 100%;
    display: block;
`

export default function Hero() {
    return (
        <LogoWrapper>
            <Logo src='images/LogoTeste.png'/>
        </LogoWrapper>
    )
}
