import styled from 'styled-components'

import React from 'react'
import Stories from './Stories'

const LogoWrapper = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
height: calc(80vh);
min-height: 250px;
width: 100%;

`

export default function Hero() {
    return (
        <LogoWrapper>
            <img src='images/LogoTeste.png'/>
        </LogoWrapper>
    )
}
