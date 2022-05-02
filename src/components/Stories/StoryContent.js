import React from "react";
import styled from "styled-components";


const ContentBox = styled.div`
    display: flex;
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
    position: absolute;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    width: 100%;
    background: linear-gradient(180deg,rgba(38,38,38,.8) 0%,rgba(38,38,38,0) 100%);
    border-radius: 20px 20px 0px 0px;
    padding-top: 20px;
    padding-left: 15px;
    padding-bottom: 10%;
    font-family: sans-serif;
`

const ClothType = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 100%;
`

const ContentBottom = styled.div`
`

export default function StoryContent({ imagePath, name }) {


    return (
        <ContentBox>
            {imagePath === "null" ? <Content blank="true" /> : <Content src={`images/${imagePath}`} />}
            {imagePath === "null" ?
                null :
                <>
                    <ContentNav>
                        <ClothType alt={name} src={`images/${imagePath}`} />
                        {name}
                    </ContentNav>
                    <ContentBottom>

                    </ContentBottom>
                </>
            }
        </ContentBox >
    )
}