import React from "react";
import styled from "styled-components";


const ContentBox = styled.div`
    border-radius: 20px;
    aspect-ratio: 9/16;
    width: 100%;
    height: 92%;
    transform: scale(0.5);
    z-index: -1;
`

const Content = styled.img`
    height: ${props => props.blank === 'true' ? '0%' : '100%'};
    width: 100%;
    object-fit: contain;
    background-color: ${props => props.blank === "true" ? "transparent" : "#f0c3cb"};
    border-radius: 20px;
    cursor: pointer;
    
`

const ContentNav = styled.div`
`

const ContentBottom = styled.div`
`

export default function StoryContent({ imagePath }) {



    return (
        <ContentBox>
            {imagePath === "null" ? <Content blank="true" /> : <Content src={`images/${imagePath}`} />}
            <ContentNav>

            </ContentNav>
            <ContentBottom>

            </ContentBottom>
        </ContentBox >
    )
}