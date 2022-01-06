import React from 'react'
import Story from './Story'
import styled from 'styled-components'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { WindowSharp } from '@mui/icons-material';

const TopItem = styled.div`
display: flex;
justify-content: flex-start;
object-fit: cover;
overflow: auto;
overflow: -moz-scrollbars-none;
-ms-overflow-style: none;

::-webkit-scrollbar {
    display: none;
    
}


@media only screen and (min-width: 769px) {
    justify-content: space-around;
}
`

const LeftArrow = styled.div`
    display: flex;
    position: absolute;
    left: 0px;
    color: white;
    height: 54px;
    justify-content: center;
    align-items: center;


    @media only screen and (min-width: 768px) {
        display: none;
    }

`
const RightArrow = styled.div`
    display: flex;
    position: absolute;
    right: 5px;
    color: white;
    height: 54px;
    justify-content: center;
    align-items: center;


    @media only screen and (min-width: 768px) {
        display: none;
    }
`



export default function Stories() {

    const data = [
        {
            name: "Sapatos",
            icon: "shoe.jpg",

        },
        {
            name: "Blusas",
            icon: "shoe.jpg",
        },
        {
            name: "Casacos",
            icon: "shoe.jpg",
        },
        {
            name: "Sapatos",
            icon: "shoe.jpg",

        },
        {
            name: "Blusas",
            icon: "shoe.jpg",
        },
        {
            name: "Casacos",
            icon: "shoe.jpg",
        },
        {
            name: "Sapatos",
            icon: "shoe.jpg",

        },
        {
            name: "Blusas",
            icon: "shoe.jpg",
        },
        {
            name: "Casacos",
            icon: "shoe.jpg",
        },
        {
            name: "Sapatos",
            icon: "shoe.jpg",

        },
    ]

    

    return (
        <TopItem>
            <LeftArrow>
                <ArrowCircleLeftIcon style={{ fontSize: 40}} />
            </LeftArrow>
            {
                data.map(story => {
                    return <Story name={story.name} icon={story.icon} />
                })
            }
            <RightArrow>
                <ArrowCircleRightIcon onClick={handleArrowClick} style={{ fontSize: 40 }} />
            </RightArrow>
        </TopItem>
    )
}
