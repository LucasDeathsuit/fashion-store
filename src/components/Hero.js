import styled from 'styled-components'

import React from 'react'
import Stories from './Stories'

const LogoWrapper = styled.div`
display: block;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

const StoriesWrapper = styled.div`
padding-top: 4rem;
`

const array = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "News",
        path: "/news",
    },
    {
        name: "Contato",
        path: "/contact-us",
    }
]

export default function Hero() {
    return (
        <div>
            <StoriesWrapper>
                <Stories />
            </StoriesWrapper>
            <LogoWrapper>
                <img src="images/logoteste.png"/>
            </LogoWrapper>
        </div>
    )
}
