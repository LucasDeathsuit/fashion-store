import React from 'react'
import styled from 'styled-components'

const Comment = styled.div`
background-color: #f2f2f2;
border: solid 10px pink;
display: flex;
flex-direction: column;
align-items: center;
`

const Content = styled.div`

  transform: translateY(-30%);
`

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 100%;
`

const Username = styled.h2`
  color: #8d8d8d;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
`

const Rating = styled.span`
  color: gold;
`

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3`
  color: #8d8d8d;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  `

const Paragraph = styled.p`
  color: #8d8d8d;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  text-align: center;
`

export default function CommentSection() {
  return (
    <Comment>
      <Content>
        <UserSection>
          <Avatar src='images/sapatos.jpg' />
          <Username>Fernanda Teles</Username>
        </UserSection>
        <Rating>
          xxxxx
        </Rating>
        <CommentArea>
          <Title>Lorem!!</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Paragraph>
        </CommentArea>
      </Content >
    </Comment>
  )
}
