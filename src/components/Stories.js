import React from 'react'
import Story from './Story'
import styled from 'styled-components'

const TopItem = styled.div`
display: flex;
justify-content: space-around;
margin-left: 6rem;
margin-right: 6rem;
object-fit: cover;
;
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
        }
    ]

    return (
        <TopItem>
            {
                data.map(story => {
                    return <Story name={story.name} icon={story.icon}/>
                })
            }
        </TopItem>
    )
}
