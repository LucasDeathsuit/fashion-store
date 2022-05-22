import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import Rating from './Rating';

const Comment = styled.div`
background-color: #f2f2f2;
border: solid 10px pink;
display: flex;
flex-direction: column;
align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
`

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  transform: translateY(-65%);
  gap: 8px;
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
  font-weight: 400;
`

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
        <Rating value="4" />
        <CommentArea>
          <Title>Lorem!!</Title>
          <Paragraph>Lorem ipsum dolor sit amet, ct, consectetur adipiscing elit, sed do</Paragraph>
        </CommentArea>
      </Content >
    </Comment>
  )
}
