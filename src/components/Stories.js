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
    height: 66px;
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
    height: 66px;
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
            icon: "sapatos.jpg",

        },
        {
            name: "Blusas",
            icon: "blusas.jpg",
        },
        {
            name: "Casacos",
            icon: "casacos.jpg",
        },
        {
            name: "Sapatos",
            icon: "sapatos.jpg",

        },
        {
            name: "Blusas",
            icon: "blusas.jpg",
        },
        {
            name: "Casacos",
            icon: "casacos.jpg",
        },
        {
            name: "Sapatos",
            icon: "sapatos.jpg",

        },
        {
            name: "Blusas",
            icon: "blusas.jpg",
        },
        {
            name: "Casacos",
            icon: "casacos.jpg",
        },
        {
            name: "Sapatos",
            icon: "sapatos.jpg",

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

        return function cleanup() {
            refStories.current.removeEventListener('scroll', handleStoriesScroll)
        }


    }, [])

    useEffect(() => {
        let timer;
        refStories.current.scrollLeft = scrollLeft;
        if (refStories.current.scrollWidth >= window.innerWidth - 12) {
            if (scrollLeft <= 0) {
                timer = setTimeout(() => {
                    setShowLeftArrow(false);
                }, 50);
            } else {
                setShowLeftArrow(true);
            }
            if (scrollLeft >= refStories.current.scrollWidth - refStories.current.clientWidth - 1) {
                timer = setTimeout(() => {
                    setShowRightArrow(false);
                }, 50);
            } else {
                setShowRightArrow(true);
            }
        } else {
            setShowLeftArrow(false);
            setShowRightArrow(false);
        }



        return () => clearTimeout(timer);
    }, [scrollLeft, windowSize])



    return (
        <TopItem ref={refStories}>
            <LeftArrow>
                <ArrowCircleLeftIcon value="Left" onClick={() => handleArrowClick(-300)} style={{ fontSize: 40, display: showLeftArrow ? "block" : "none" }} />
            </LeftArrow>
            {
                data.map(story => {
                    return <Story name={story.name} icon={story.icon} />
                })
            }
            <RightArrow>
                <ArrowCircleRightIcon value="Right" onClick={() => handleArrowClick(300)} style={{ fontSize: 40, display: showRightArrow ? "block" : "none" }} />
            </RightArrow>
        </TopItem>
    )
}
