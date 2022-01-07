import React, { useEffect, useState } from 'react'
import Story from './Story'
import styled from 'styled-components'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useRef } from 'react';


const TopItem = styled.div`
display: flex;
justify-content: flex-start;
object-fit: cover;
overflow: auto;
overflow: -moz-scrollbars-none;
-ms-overflow-style: none;
scroll-behavior: smooth;

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

    :hover {
        cursor: pointer
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

    :hover {
        cursor: pointer
    }


`



export default function Stories() {

    const [scrollLeft, setScrollLeft] = useState(0);

    const [windowSize, setWindowSize] = useState(0);

    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const [showRightArrow, setShowRightArrow] = useState(false);

    const [controlScroll, setControlScroll] = useState(false);


    // const [storiesBiggerThanWindow, setStoriesBiggerThanWindow] = useState(0);

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

    const refStories = useRef(null)

    const handleArrowClick = (scrollOffset) => {
        const newScrollLeft = refStories.current.scrollLeft + scrollOffset

        setScrollLeft(newScrollLeft);

    }

    const handleResize = () => {
        setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize)

    
    const handleStoriesScroll = () => {
        setScrollLeft(refStories.current.scrollLeft)
    }

    useEffect(() => {


        refStories.current.addEventListener('scroll', handleStoriesScroll);

        return function cleanup () {
            refStories.current.removeEventListener('scroll', handleStoriesScroll)
        }

        
    }, [])

    useEffect(() => {
        refStories.current.scrollLeft = scrollLeft;
        console.log(controlScroll)
        if (refStories.current.scrollWidth >= window.innerWidth - 12) {
            setShowRightArrow(true);
            if (scrollLeft <= 0) {
                setShowLeftArrow(false);
            } else {
                setShowLeftArrow(true);
            }
            console.log(scrollLeft)
            console.log(refStories.current.scrollWidth - refStories.current.clientWidth)
            if (scrollLeft >= refStories.current.scrollWidth - refStories.current.clientWidth-1) {
                setShowRightArrow(false);
            } else {
                setShowRightArrow(true);
            }
        } else {
            setShowLeftArrow(false);
            setShowRightArrow(false);
        }
    }, [controlScroll, scrollLeft, windowSize])



    return (
        <TopItem ref={refStories}>
            <LeftArrow>
                <ArrowCircleLeftIcon value="Left" onClick={() => handleArrowClick(-100)} style={{ fontSize: 40, display: showLeftArrow ? "block" : "none" }} />
            </LeftArrow>
            {
                data.map(story => {
                    return <Story name={story.name} icon={story.icon} />
                })
            }
            <RightArrow>
                <ArrowCircleRightIcon value="Right" onClick={() => handleArrowClick(100)} style={{ fontSize: 40, display: showRightArrow ? "block" : "none" }} />
            </RightArrow>
        </TopItem>
    )
}
