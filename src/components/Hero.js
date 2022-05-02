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

const StoriesWrapper = styled.div`

overflow: hidden;


@media only screen and (min-width: 769px) {
    overflow: hidden;
}
`

export default function Hero() {
    return (
        <>
            <StoriesWrapper>
                <Stories />
            </StoriesWrapper>
            <LogoWrapper>
                <img alt='Logo' src="images/logoteste.png" />
            </LogoWrapper>
        </>
    )
}
